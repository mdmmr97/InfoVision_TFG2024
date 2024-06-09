using BackTFG2024.Models;
using BackTFG2024.Repositorios.Interfaces;
using MongoDB.Driver;

using BackTFG2024.Servicios;
using MongoDB.Bson;

namespace BackTFG2024.Repositorios
{
    public class YearsCollections : IYearsCollections {

        private readonly IMongoCollection<Year> _collection;

        public YearsCollections(MongoDbService mongoDbService) {

            _collection = mongoDbService.Database!.GetCollection<Year>("Years");
        }

        public async Task Delete(string id) {

            FilterDefinition<Year> filter = Builders<Year>.Filter.Eq(x => x.Edition, int.Parse(id));
            await _collection.DeleteOneAsync(filter);
        }

        public async Task<IEnumerable<Year>> GetAll() {

            return await _collection.Find(FilterDefinition<Year>.Empty).ToListAsync();
        }

        public async Task<Year> GetById(string id)
        {

            FilterDefinition<Year> filter = Builders<Year>.Filter.Eq(x => x.Edition, int.Parse(id));
            return await _collection.Find(filter).FirstOrDefaultAsync();
        }

        public async Task Post(Year year) {

            await _collection.InsertOneAsync(year);
        }

        public async Task PostList(List<Year> years)
        {

            await _collection.InsertManyAsync(years);
        }

        public async Task Put(Year year) {

            FilterDefinition<Year> filter = Builders<Year>.Filter.Eq(x => x.Edition, year.Edition);
            await _collection.ReplaceOneAsync(filter, year);
        }
    }
}
