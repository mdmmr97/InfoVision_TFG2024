using BackTFG2024.Models;
using BackTFG2024.Repositorios.Interfaces;
using MongoDB.Driver;
using System.Linq.Expressions;

using BackTFG2024.Servicios;
using MongoDB.Bson;
using System.Text.Json;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Hosting;

namespace BackTFG2024.Repositorios
{
    public class SongsCollections : ISongsCollections {

        private readonly IMongoCollection<Song> _collection;

        public SongsCollections(MongoDbService mongoDbService) {

            _collection = mongoDbService.Database!.GetCollection<Song>("Songs");
        }

        public async Task Delete(string id) {

            FilterDefinition<Song> filter = Builders<Song>.Filter.Eq(x => x.Id_song, id);
            await _collection.DeleteOneAsync(filter);
        }

        public async Task<IEnumerable<Song>> GetAll() {

            return await _collection.Find(FilterDefinition<Song>.Empty).ToListAsync();
        }

        public async Task<IEnumerable<Song>> GetAllFilters(string? countryfilter, int? yearfilter, string? searchnamesong,
                                                           int? ordennamesong, int? ordencountry, int? ordenyear)
        {
            FilterDefinition<Song> filter = MakeFilter(countryfilter, yearfilter, searchnamesong);

            if (ordennamesong == null && ordencountry == null && ordenyear == null) return await _collection.Find(filter).ToListAsync();

            SortDefinition<Song> sort = MakeSort(ordennamesong, ordencountry, ordenyear);
            return await _collection.Find(filter).Sort(sort).ToListAsync();
        }

        public async Task<Song> GetById(string id) {

            FilterDefinition<Song> filter = Builders<Song>.Filter.Eq(x => x.Id_song, id);
            return await _collection.Find(filter).FirstOrDefaultAsync();
        }

        public async Task Post(Song song) {

            await _collection.InsertOneAsync(song);
        }

        public async Task PostList(List<Song> songs)
        {

            await _collection.InsertManyAsync(songs);
        }

        public async Task Put(Song song) {

            FilterDefinition<Song> filter = Builders<Song>.Filter.Eq(x => x.Id_song, song.Id_song);
            await _collection.ReplaceOneAsync(filter, song);
        }

        private FilterDefinition<Song> MakeFilter(string? countryfilter, int? yearfilter, string? searchnamesong)
        {
            FilterDefinitionBuilder<Song> filterbuilder = Builders<Song>.Filter;
            FilterDefinition<Song> filter;
            filter = countryfilter == null ? filterbuilder.Empty : filterbuilder.Eq(x => x.Country!.Country_id, countryfilter);
            filter = yearfilter == null ? filter : filter & filterbuilder.Eq(x => x.Year, yearfilter);
            filter = searchnamesong == null ? filter : filter & filterbuilder.Regex(x => x.Candidature!.Song_title, new BsonRegularExpression(searchnamesong, "i"));
            return filter;
        }

        private SortDefinition<Song> MakeSort(int? ordennamesong, int? ordencountry, int? ordenyear)
        {
            SortDefinitionBuilder<Song> sortBuilder = Builders<Song>.Sort;
            SortDefinition<Song> sortname = ordennamesong == 1 ? sortBuilder.Ascending(x => x.Candidature!.Song_title) : sortBuilder.Descending(x => x.Candidature!.Song_title);
            SortDefinition<Song> sortcountry = ordencountry == 1 ? sortBuilder.Ascending(x => x.Country!.Country_name) : sortBuilder.Descending(x => x.Country!.Country_name);
            SortDefinition<Song> sortyear = ordenyear == 1 ? sortBuilder.Ascending(x => x.Year) : sortBuilder.Descending(x => x.Year);

            if (ordennamesong != null && ordencountry != null && ordenyear != null) return Builders<Song>.Sort.Combine(sortname, sortcountry, sortyear);

            if (ordennamesong != null && ordencountry != null) return Builders<Song>.Sort.Combine(sortname, sortcountry);
            if (ordennamesong != null && ordenyear != null) return Builders<Song>.Sort.Combine(sortname, sortyear);
            if (ordencountry != null && ordenyear != null) return Builders<Song>.Sort.Combine(sortcountry, sortyear);
            
            if (ordennamesong != null) return sortname;
            if (ordencountry != null) return sortcountry;
            return sortyear;
        }
    }
}
