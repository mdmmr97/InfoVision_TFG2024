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
    [Route("api/countries")]
    [ApiController]
    [AllowAnonymous]
    public class CountriesController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IAlmacenadorArchivos _archivos;
        private readonly string _name_entidad = "countries";
        private readonly string _name_flags = "flags";
        private readonly string _name_maps = "maps";
        private readonly string _name_images = "images";

        public CountriesController(IUnitOfWork unitOfWork, IMapper mapper, IAlmacenadorArchivos archivos)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _archivos = archivos;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IEnumerable<Country>> GetAll() {
            return await _unitOfWork.Countries.GetAll();    
        }
        
        [HttpGet("card")]
        [AllowAnonymous]
        public async Task<IEnumerable<CountryCard>> GetAllCard()
        {
            IEnumerable<Country> countries = await _unitOfWork.Countries.GetAll();
            return _mapper.ProjectTo<CountryCard>(countries.AsQueryable());
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<Country>> GetByIdCountry(string id) {

            Country country = await _unitOfWork.Countries.GetById(id);
            return country is not null ? Ok(country) : NotFound();
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public async Task<ActionResult> Post([FromBody] NewCountryDTO newcountry) {

            if (newcountry.FlagFile is not null)
            {
                string nombrefile = $"Flag_{newcountry.Country_name}";
                newcountry.Flag = await _archivos.GuardarArchivo(_name_entidad, _name_flags, nombrefile, newcountry.FlagFile);
            }
            if (newcountry.MapsFile is not null)
            {
                string nombrefile = $"Map_{newcountry.Country_name}";
                newcountry.Maps = await _archivos.EditarArchivo(newcountry.Maps!, _name_entidad, _name_maps, nombrefile, newcountry.MapsFile);
            }
            if (newcountry.ImagesLsit is not null)
            {
                foreach (IFormFile image in newcountry.ImagesLsit)
                {
                    string nombrefile = $"Image_{newcountry.Country_name}";
                    string path = await _archivos.GuardarArchivo(_name_entidad, _name_images, nombrefile, image);
                    newcountry.Images = new List<string>();
                    newcountry.Images!.Add(path);
                }
            }

            Country country = _mapper.Map<Country>(newcountry);
            await _unitOfWork.Countries.Post(country);
            CreatedAtAction(nameof(GetByIdCountry), new { id = country.Id }, country);
            return NoContent();
        }

        [HttpPost("list")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public async Task<ActionResult> PostList([FromBody] List<NewCountryDTO> newcountries)
        {
            List<Country> countries = _mapper.Map<List<Country>>(newcountries);
            await _unitOfWork.Countries.PostList(countries);

            foreach (Country country in countries)
            CreatedAtAction(nameof(GetByIdCountry), new { id = country.Id }, country);

            return NoContent();
        }

        [HttpPut("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public async Task<ActionResult> Put([FromBody] CountryDTO countryDto) {

            if (countryDto.FlagFile is not null ) {
                string nombrefile = $"Flag_{countryDto.Country_name}";
                countryDto.Flag = await _archivos.EditarArchivo(countryDto.Flag!, _name_entidad, _name_flags, nombrefile, countryDto.FlagFile);
            }
            if (countryDto.MapsFile is not null)
            {
                string nombrefile = $"Map_{countryDto.Country_name}";
                countryDto.Maps = await _archivos.EditarArchivo(countryDto.Maps!, _name_entidad, _name_maps, nombrefile, countryDto.MapsFile);
            }
            if (countryDto.ImagesLsit is not null) {

                List<string> imagesborradas = new List<string>();
                foreach (string foto in countryDto.Images!)
                {
                    bool borrado = await _archivos.BorrarArchivo(foto, _name_entidad, _name_images);
                    if (borrado) imagesborradas.Add(foto);
                }
                imagesborradas.ForEach(x => countryDto.Images!.Remove(x));

                foreach (IFormFile image in countryDto.ImagesLsit) {
                    string nombrefile = $"Image_{countryDto.Country_name}";
                    string path = await _archivos.GuardarArchivo(_name_entidad, _name_images, nombrefile, image);
                    countryDto.Images!.Add(path);
                }
            }
            
            Country country = _mapper.Map<Country>(countryDto);
            await _unitOfWork.Countries.Put(country);
            return NoContent();
        }

        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public async Task<ActionResult> Delete(string id) {

            await _unitOfWork.Countries.Delete(id);
            return NoContent();
        }
    }
}
