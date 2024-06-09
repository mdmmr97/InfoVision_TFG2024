using AutoMapper;
using BackTFG2024.DTOs;
using BackTFG2024.Models;
using BackTFG2024.Repositorios.Interfaces;
using BackTFG2024.Utilidades;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackTFG2024.Controllers
{
    [Route("api/users")]
    [ApiController]
    [AllowAnonymous]
    public class UsersController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;

        public UsersController(IUnitOfWork unitOfWork, IMapper mapper, IConfiguration configuration)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> Register([FromBody] NewUserDTO newuserDTO)
        {
            newuserDTO.Password = EncriptarPassword.Encriptar(newuserDTO.Password);
            User user = _mapper.Map<User>(newuserDTO);
            await _unitOfWork.Users.Register(user);
            user = await ConstruirToken(user);
            return Ok(_mapper.Map<UserDTO>(user));
        }


        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login([FromBody] UserLoginDTO userLoginDTO)
        {
            User user = await _unitOfWork.Users.Login(userLoginDTO);
            if (!EncriptarPassword.Verificar(userLoginDTO.Password, user.Password)) throw new Exception("Credenciales Incorrectas");

            user = await ConstruirToken(user);
            return Ok(_mapper.Map<UserDTO>(user));
        }

        private async Task<User> ConstruirToken(User user) {
            //Cabecera
            SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret_Key"]!));
            SigningCredentials credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            //Claim
            List<Claim> claims = new List<Claim>{
                new Claim(ClaimTypes.Name, user.Name),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
            };

            if (user.Role == "admin") claims.Add(new Claim(ClaimTypes.Role, "admin"));

            //Payload
            DateTime expiracion = DateTime.UtcNow.AddHours(3);
            
            JwtSecurityToken token = new JwtSecurityToken(issuer: null, audience: null, claims: claims, expires: expiracion, signingCredentials: credentials);
            user.Token = new JwtSecurityTokenHandler().WriteToken(token);
            return user;

            /* --> Otra forma de hacerlo
             JwtHeader _header = new JwtHeader(credentials);
             JwePayload _payload = new JwePayload(claims);
             JwtSecurityToken _token = new JwtSecurityToken(_header, _payload);
             */

        }
    }
}
