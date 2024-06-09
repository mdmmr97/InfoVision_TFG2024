using BackTFG2024.Models;

namespace BackTFG2024.DTOs
{
    public  class CountryDTO
    {
        public string? Id { get; set; }

        public string? Country_id { get; set; }

        public string? Country_name { get; set; }

        public string? Flag { get; set; }

        public string? Maps { get; set; }

        public string? Capital { get; set; }

        public Double? Area { get; set; }

        public Double? Population { get; set; }


        public int? Participations { get; set; }

        public int? Debut { get; set; }

        public List<Victory>? Victories { get; set; }

        public List<Hosted>? Hosted { get; set; }

        public List<string>? Images { get; set; }

        public IFormFile? FlagFile { get; set; }

        public IFormFile? MapsFile { get; set; }

        public List<IFormFile>? ImagesLsit { get; set; }
    }

    public class NewCountryDTO
    {
        public string? Country_id { get; set; }

        public string? Country_name { get; set; }

        public string? Flag { get; set; }

        public string? Maps { get; set; }

        public string? Capital { get; set; }

        public Double? Area { get; set; }

        public Double? Population { get; set; }


        public int? Participations { get; set; }

        public int? Debut { get; set; }

        public List<Victory>? Victories { get; set; }

        public List<Hosted>? Hosted { get; set; }

        public List<string>? Images { get; set; }

        public IFormFile? FlagFile { get; set; }

        public IFormFile? MapsFile { get; set; }

        public List<IFormFile>? ImagesLsit { get; set; }
    }
}