using BackTFG2024.Models;
using MongoDB.Bson;

namespace BackTFG2024.Repositorios.Interfaces
{
    public interface ISongsCollections : IGenericRepository<Song> {
        Task<IEnumerable<Song>> GetAllFilters(string? countryfilter, int? yearfilter, string? searchnamesong,
                                              int? ordennamesong, int? ordencountry, int? ordenyear);

        Task PostList(List<Song> songs);
    }
}
