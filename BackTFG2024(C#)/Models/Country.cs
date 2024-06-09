using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace BackTFG2024.Models
{
    public class Country
    {
        [BsonId]
        [BsonElement("_id"), BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("country")]
        public CountryDetail? CountryDetail { get; set; }

        [BsonElement("flag")]
        public string? Flag { get; set; }

        [BsonElement("maps")]
        public string? Maps { get; set; }

        [BsonElement("capital")]
        public string? Capital { get; set; }

        [BsonElement("area")]
        public Double? Area { get; set; }

        [BsonElement("population")]
        public Double? Population { get; set; }


        [BsonElement("participations")]
        public int? Participations { get; set; }

        [BsonElement("debut")]
        public int? Debut { get; set; }

        [BsonElement("victories")]
        public List<Victory>? Victories { get; set; }

        [BsonElement("hosted")]
        public List<Hosted>? Hosted { get; set; }

        [BsonElement("images")]
        public List<string>? Images { get; set; }
    }

    public class CountryDetail
    {
        public CountryDetail (string country_id, string country_name)
        {
            this.Country_id = country_id;
            this.Country_name = country_name;
        }

        [Required]
        [BsonElement("country_id")]
        [StringLength(maximumLength: 2)]
        public string Country_id { get; set; } = null!;

        [Required]
        [BsonElement("country_name")]
        public string Country_name { get; set; } = null!;
    }

    public class Victory
    {
        [BsonElement("year")]
        public int? Year { get; set; }

        [BsonElement("city")]
        public string? City { get; set; }

        [BsonElement("artist")]
        public string? Artist { get; set; }

        [BsonElement("song")]
        public string? Song { get; set; }

        [BsonElement("points")]
        public int? Points { get; set; }
    }

    public class Hosted {  
        
        [BsonElement("year")]
        public int? Year { get; set; }

        [BsonElement("city")]
        public string? City { get; set; }
    }

    public class CountryCard
    {
        public CountryDetail? CountryDetail { get; set; }

        public string? Flag { get; set; }
    }

}
