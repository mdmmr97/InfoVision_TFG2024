using BackTFG2024.DTOs;
using BackTFG2024.Models;
using BackTFG2024.Repositorios.Interfaces;
using BackTFG2024.Servicios;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace BackTFG2024.Repositorios
{
    public class UsersCollections : IUsersCollections
    {
        private readonly IMongoCollection<User> _collection;

        public UsersCollections(MongoDbService mongoDbService)
        {
            _collection = mongoDbService.Database!.GetCollection<User>("Users");
        }

        public async Task<User> Login(UserLoginDTO loginDTO)
        {
            FilterDefinition<User> filter = Builders<User>.Filter.Eq(x => x.Email, loginDTO.Email);
            return await _collection.Find(filter).FirstOrDefaultAsync();
        }

        public async Task Register(User user) {
           await _collection.InsertOneAsync(user);
        }
    }
}
