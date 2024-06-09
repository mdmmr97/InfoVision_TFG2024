using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;
using BackTFG2024.Models;

namespace BackTFG2024.DTOs
{
    public class YearDTO
    {
        public string? Id { get; set; }

        public int? Edition { get; set; }

        public string? Country_id { get; set; }

        public string? Country_name { get; set; }

        public string? Logo { get; set; }

        public string? Slogan { get; set; }

        public string? City { get; set; }

        public string? Place { get; set; }

        public string? Stage { get; set; }

        public List<EventDate>? Dates { get; set; }

        public int? Participants { get; set; }

        public SongWinner? Winner { get; set; }

        public IFormFile? Logofile { get; set; }

        public IFormFile? Stagefile { get; set; }
    }

    public class NewYearDTO
    {
        public int? Edition { get; set; }

        public string Country_id { get; set; }

        public string Country_name { get; set; }

        public string? Logo { get; set; }

        public string? Slogan { get; set; }

        public string? City { get; set; }

        public string? Place { get; set; }

        public string? Stage { get; set; }

        public List<EventDate>? Dates { get; set; }

        public int? Participants { get; set; }

        public SongWinner? Winner { get; set; }

        public IFormFile? Logofile { get; set; }

        public IFormFile? Stagefile { get; set; }
    }
}