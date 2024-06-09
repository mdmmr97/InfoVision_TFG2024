using BackTFG2024.Models;
using BackTFG2024.Repositorios.Interfaces;
using BackTFG2024.Servicios;
using MongoDB.Driver;
using System.Diagnostics.Metrics;

namespace BackTFG2024.Repositorios
{
    internal class CommentsCollections : ICommentsCollections
    {
        private readonly IMongoCollection<Comment> _collection;

        public CommentsCollections(MongoDbService mongoDbService) {
            _collection = mongoDbService.Database!.GetCollection<Comment>("Comments");
        }

        public async Task Delete(string id)
        {
            FilterDefinition<Comment> filter = Builders<Comment>.Filter.Eq(x => x.Id, id);
            await _collection.DeleteOneAsync(filter);
        }

        public async Task<IEnumerable<Comment>> GetAllUser(string user)
        {
            FilterDefinition<Comment> filter = Builders<Comment>.Filter.Eq(x => x.User, user);
            return await _collection.Find(filter).ToListAsync();
        }

        public Task<IEnumerable<Comment>> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<Comment> GetIdCommentByUser(string id, string user)
        {
            FilterDefinition<Comment> filter = Builders<Comment>.Filter.Eq(x => x.Song_Id, id) & 
                                               Builders<Comment>.Filter.Eq(x => x.User, user);
            return await _collection.Find(filter).FirstOrDefaultAsync();
        }

        public async Task Post(Comment comment)
        {
            await _collection!.InsertOneAsync(comment);
        }

        public async Task Put(Comment comment)
        {
            FilterDefinition<Comment> filter = Builders<Comment>.Filter.Eq(x => x.Id, comment.Id);
            await _collection!.ReplaceOneAsync(filter, comment);
        }

        public Task<Comment> GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}