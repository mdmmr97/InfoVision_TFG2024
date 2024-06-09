using AutoMapper;
using BackTFG2024.DTOs;
using BackTFG2024.Models;
using BackTFG2024.Repositorios.Interfaces;
using BackTFG2024.Utilidades;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BackTFG2024.Controllers
{
    [Route("api/years")]
    [ApiController]
    [AllowAnonymous]
    public class YearsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IAlmacenadorArchivos _archivos;
        private readonly string _name_entidad = "years";
        private readonly string _name_stage = "stages";
        private readonly string _name_logo = "logos";

        public YearsController(IUnitOfWork unitOfWork, IMapper mapper, IAlmacenadorArchivos archivos) {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _archivos = archivos;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IEnumerable<Year>> GetAll() {
            return await _unitOfWork.Years.GetAll();    
        }

        [HttpGet("card")]
        [AllowAnonymous]
        public async Task<IEnumerable<YearCard>> GetAllCard()
        {
            IEnumerable<Year> years = await _unitOfWork.Years.GetAll();
            return _mapper.ProjectTo<YearCard>(years.AsQueryable());
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<Year>> GetByIdYear(int id) {

            Year year = await _unitOfWork.Years.GetById(id.ToString());
            return year is not null ? Ok(year) : NotFound();
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public async Task<ActionResult> Post([FromBody] NewYearDTO newyear) {
            if (newyear.Logofile is not null)
            {
                string nombrefile = $"Logo_ESC{newyear.Edition}";
                newyear.Logo= await _archivos.GuardarArchivo(_name_entidad, _name_logo, nombrefile, newyear.Logofile!);
            }

            if (newyear.Stagefile is not null)
            {
                string nombrefile = $"Escenario_{newyear.Edition}";
                newyear.Stage = await _archivos.GuardarArchivo(_name_entidad, _name_stage, nombrefile, newyear.Stagefile!);
            }
            Year year = _mapper.Map<Year>(newyear);
            await _unitOfWork.Years.Post(year);
            CreatedAtAction(nameof(GetByIdYear), new { id = year.Id }, year);
            return NoContent();
        }

        [HttpPost("list")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public async Task<ActionResult> PostList([FromBody] List<NewYearDTO> newyears)
        {
            List<Year> years = _mapper.Map<List<Year>>(newyears);
            await _unitOfWork.Years.PostList(years);

            foreach (Year year in years)
            CreatedAtAction(nameof(GetByIdYear), new { id = year.Id }, year);

            return NoContent();
        }

        [HttpPut("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public async Task<ActionResult> Put([FromBody] YearDTO yearDto) {
            if (yearDto.Logofile is not null)
            {
                string nombrefile = $"Logo_ESC{yearDto.Edition}";
                yearDto.Logo = await _archivos.EditarArchivo(yearDto.Logo!, _name_entidad, _name_logo, nombrefile, yearDto.Logofile);
            }

            if (yearDto.Stagefile is not null)
            {
                string nombrefile = $"Escenario_{yearDto.Edition}";
                yearDto.Stage = await _archivos.EditarArchivo(yearDto.Stage!, _name_entidad, _name_stage, nombrefile, yearDto.Stagefile);
            }
            Year year = _mapper.Map<Year>(yearDto);
            await _unitOfWork.Years.Put(year);
            return NoContent();
        }

        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public async Task<ActionResult> Delete(int id) {

            await _unitOfWork.Years.Delete(id.ToString());
            return NoContent();
        }
    }
}
