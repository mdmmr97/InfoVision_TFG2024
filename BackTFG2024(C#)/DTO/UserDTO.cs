using MongoDB.Bson.Serialization.Attributes;

namespace BackTFG2024.DTOs
{
    public class UserLoginDTO
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class UserDTO
    {
        public String Token { get; set; }
    }

    public class NewUserDTO
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string? Role { get; set; } = null;
    }
}