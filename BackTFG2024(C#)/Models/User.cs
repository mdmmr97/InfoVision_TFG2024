using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace BackTFG2024.Models
{
    public class User
    {
        [BsonId]
        [BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("password")]
        public string Password { get; set; }

        [BsonElement("email")]
        public string Email { get; set; }

        [BsonElement("role")]
        public string Role { get; set; }

        [BsonElement("token")]
        public String Token { get; set; }
    }
}
