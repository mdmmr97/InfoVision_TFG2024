using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace BackTFG2024.Models
{
    public class Year
    {
        [BsonId]
        [BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [Required]
        [BsonElement("edition")]
        public int? Edition { get; set; }

        [Required]
        [BsonElement("country")]
        public CountryDetail? Country { get; set; }

        [BsonElement("logo")]
        public string? Logo { get; set; }

        [BsonElement("slogan")]
        public string? Slogan { get; set; }

        [BsonElement("city")]
        public string? City { get; set; }

        [BsonElement("place")]
        public string? Place { get; set; }

        [BsonElement("stage")]
        public string? Stage { get; set; }

        [BsonElement("dates")]
        public List<EventDate>? Dates { get; set; }

        [BsonElement("participants")]
        public int? Participants { get; set; } = 0!;

        [BsonElement("winner")]
        public SongWinner? Winner { get; set; }
    }

    public class EventDate
    {
        [BsonElement("event")]
        public string? Event { get; set; }

        [BsonElement("date")]
        public string? Date { get; set; }
    }

    public class SongWinner
    {
        [BsonElement("country")]
        public string? Country { get; set; } = null!;

        [BsonElement("artist")]
        public string? Artist { get; set; } = null!;

        [BsonElement("song")]
        public string? Song { get; set; } = null!;

        [BsonElement("points")]
        public int? Points { get; set; } = 0!;
    }

    public class YearCard
    {
        public string? Edition { get; set; }

        public string? Logo { get; set; }
    }
}
