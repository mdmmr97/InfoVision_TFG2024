using BackTFG2024.DTOs;
using BackTFG2024.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace BackTFG2024.Repositorios.Interfaces
{
    public interface IUsersCollections  {
        Task<User> Login (UserLoginDTO loginDTO);
        Task Register (User user);
    }
}
