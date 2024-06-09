using BackTFG2024.Models;
using MongoDB.Bson;

namespace BackTFG2024.Repositorios.Interfaces
{
    public interface ICountriesCollections : IGenericRepository<Country> {
        Task PostList(List<Country> countries);
    }
}
