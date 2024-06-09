using BackTFG2024.Models;
using MongoDB.Bson;

namespace BackTFG2024.Repositorios.Interfaces
{
    public interface IYearsCollections : IGenericRepository<Year> {

        Task PostList(List<Year> years);
    }
}
