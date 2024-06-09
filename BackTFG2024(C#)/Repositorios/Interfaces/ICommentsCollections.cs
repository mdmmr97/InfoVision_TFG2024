using BackTFG2024.Models;
using MongoDB.Bson;

namespace BackTFG2024.Repositorios.Interfaces
{
    public interface ICommentsCollections : IGenericRepository<Comment> {
        Task<IEnumerable<Comment>> GetAllUser(string user);
        Task<Comment> GetIdCommentByUser(string id, string user);
    }
}
