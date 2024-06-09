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
    [Route("api/songs")]
    [ApiController]
    [AllowAnonymous]
    public class SongsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IAlmacenadorArchivos _archivos;
        private readonly string _name_entidad = "songs";
        private readonly string _name_disco = "images_disco";
        private readonly string _name_performer = "images_performer";

        public SongsController(IUnitOfWork unitOfWork, IMapper mapper, IAlmacenadorArchivos archivos) {

            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _archivos = archivos;   
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IEnumerable<Song>> GetAll() {
            return await _unitOfWork.Songs.GetAll();    
        }

        [HttpGet("card")]
        [AllowAnonymous]
        public async Task<IEnumerable<SongCard>> GetAllCard()
        {
            IEnumerable<Song> songs = await _unitOfWork.Songs.GetAll();
            return _mapper.ProjectTo<SongCard>(songs.AsQueryable());
        }

        [HttpGet("card/filter")]
        [AllowAnonymous]
        public async Task<IEnumerable<SongCard>> GetCardFilter(string? countryfilter, int? yearfilter, string? searchnamesong,
                                                               int? ordennamesong, int? ordencountry, int? ordenyear)
        {
            IEnumerable<Song> songs = await _unitOfWork.Songs.GetAllFilters(countryfilter, yearfilter, searchnamesong, ordennamesong, ordencountry, ordenyear);
            return _mapper.ProjectTo<SongCard>(songs.AsQueryable());
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<Song>> GetByIdSong(string id) {

            Song song = await _unitOfWork.Songs.GetById(id);
            return song is not null ? Ok(song) : NotFound();
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public async Task<ActionResult> Post([FromBody] NewSongDTO newsong) {
            if (newsong.Img_discfile is not null)
            {
                string nombrefile = $"Disc_{newsong.Song_title}";
                newsong.Img_disc = await _archivos.GuardarArchivo(_name_entidad, _name_disco, nombrefile, newsong.Img_discfile!);
            }

            if (newsong.Img_performerfile is not null)
            {
                string nombrefile = $"Performer_{newsong.Performer}";
                newsong.Img_performer = await _archivos.GuardarArchivo(_name_entidad, _name_performer, nombrefile, newsong.Img_performerfile!);
            }

            Song song = _mapper.Map<Song>(newsong);
            await _unitOfWork.Songs.Post(song);
            CreatedAtAction(nameof(GetByIdSong), new { id = song.Id }, song);
            return NoContent();
        }

        [HttpPost("list")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public async Task<ActionResult> PostList([FromBody] List<NewSongDTO> newsongs)
        {
            List<Song> songs = _mapper.Map<List<Song>>(newsongs);
            await _unitOfWork.Songs.PostList(songs);

            foreach (Song song in songs)
            CreatedAtAction(nameof(GetByIdSong), new { id = song.Id }, song);

            return NoContent();
        }

        [HttpPut("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public async Task<ActionResult> Put([FromBody] SongDTO songDto) {
            if (songDto.Img_discfile is not null)
            {
                string nombrefile = $"Disc_{songDto.Song_title}";
                songDto.Img_disc = await _archivos.EditarArchivo(songDto.Img_disc!, _name_entidad, _name_disco, nombrefile, songDto.Img_discfile);
            }
            if (songDto.Img_performerfile is not null)
            {
                string nombrefile = $"Performer_{songDto.Performer}";
                songDto.Img_performer = await _archivos.EditarArchivo(songDto.Img_performer!, _name_entidad, _name_performer, nombrefile, songDto.Img_performerfile);
            }

            Song song = _mapper.Map<Song>(songDto);
            await _unitOfWork.Songs.Put(song);
            return NoContent();
        }

        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "admin")]
        public async Task<ActionResult> Delete(string id) {

            await _unitOfWork.Songs.Delete(id);
            return NoContent();
        }
    }
}
