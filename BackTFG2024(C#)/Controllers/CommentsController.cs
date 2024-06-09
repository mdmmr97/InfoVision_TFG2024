using AutoMapper;
using BackTFG2024.DTOs;
using BackTFG2024.Models;
using BackTFG2024.Repositorios.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackTFG2024.Controllers
{
    [Route("api/commments")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class CommentsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CommentsController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<GetCommentDTO>> GetAll()
        {
            string user = User.Identity?.Name!;
            IEnumerable<Comment> comments = await _unitOfWork.Comments.GetAllUser(user);
            return _mapper.Map<IEnumerable<GetCommentDTO>>(comments);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GetCommentDTO>> GetByIdComment(string id)
        {
            string user = User.Identity?.Name!;
            Comment comment = await _unitOfWork.Comments.GetIdCommentByUser(id, user);
            if (comment is null) return NotFound();
            else return Ok(_mapper.Map<GetCommentDTO>(comment));
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] NewCommentDTO newcomment)
        {
            newcomment.User = User.Identity?.Name!;
            Comment comment = _mapper.Map<Comment>(newcomment);
            await _unitOfWork.Comments.Post(comment);
            CreatedAtAction(nameof(GetByIdComment), new { id = comment.Id }, comment);
            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put([FromBody] CommentDTO commentDto)
        {
            commentDto.User = User.Identity?.Name!;
            Comment comment = _mapper.Map<Comment>(commentDto);
            await _unitOfWork.Comments.Put(comment);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            await _unitOfWork.Comments.Delete(id);
            return NoContent();
        }
    }
}
