using BackTFG2024.Models;
using BackTFG2024.Repositorios.Interfaces;
using MongoDB.Driver;

using BackTFG2024.Servicios;
using MongoDB.Bson;

namespace BackTFG2024.Repositorios
{
    public class CountriesCollections : ICountriesCollections {

        private readonly IMongoCollection<Country> _collection;

        public CountriesCollections(MongoDbService mongoDbService) {

            _collection = mongoDbService.Database!.GetCollection<Country>("Countries");
        }

        public async Task Delete(string id) {

            FilterDefinition<Country> filter = Builders<Country>.Filter.Eq(x => x.CountryDetail!.Country_id, id);
            await _collection!.DeleteOneAsync(filter);
        }

        public async Task<IEnumerable<Country>> GetAll() {

            return await _collection.Find(FilterDefinition<Country>.Empty).ToListAsync();
        }

        public async Task<Country> GetById(string id) {

            FilterDefinition<Country> filter = Builders<Country>.Filter.Eq(x => x.CountryDetail!.Country_id, id);
            return await _collection.Find(filter).FirstOrDefaultAsync();
        }

        public async Task Post(Country country) {

            await _collection!.InsertOneAsync(country);
        }

        public async Task PostList(List<Country> countries)
        {

            await _collection!.InsertManyAsync(countries);
        }

        public async Task Put(Country country) {

            FilterDefinition<Country> filter = Builders<Country>.Filter.Eq(x => x.CountryDetail!.Country_id, country.CountryDetail!.Country_id);
            await _collection!.ReplaceOneAsync(filter, country);
        }
    }
}
