using System.ComponentModel.DataAnnotations;

namespace BackTFG2024.DTOs
{
    public class SongDTO {
        public string? Id { get; set; }
        public string? Id_song { get; set; }
        public int? Year { get; set; }
        public string? Country_id { get; set; }
        public string? Country_name { get; set; }
        public string? Img_disc { get; set; }
        public string? Img_performer { get; set; }
        public string? Performer { get; set; }
        public string? Song_title { get; set; }

        public int? Place_contest { get; set; }
        public int? Sf_num { get; set; }

        public int? Running_sf { get; set; }
        public int? Place_sf { get; set; }
        public int? Points_sf { get; set; }
        public int? Points_tele_sf { get; set; }
        public int? Points_jury_sf { get; set; }

        public int? Running_final { get; set; }
        public int? Place_final { get; set; }
        public int? Points_final { get; set; }
        public int? Points_tele_final { get; set; }
        public int? Points_jury_final { get; set; }

        public string? Composers { get; set; }
        public string? Lyricists { get; set; }
        public string? Lyrics { get; set; }

        public string? Youtube_nfp { get; set; }
        public string? Youtube_ofm { get; set; }
        public string? Youtube_live { get; set; }

        public IFormFile? Img_discfile { get; set; }
        public IFormFile? Img_performerfile { get; set; }
    }

    public class NewSongDTO
    {
        public string? Id_song { get; set; }
        public int? Year { get; set; }
        public string? Country_id { get; set; }
        public string? Country_name { get; set; }
        public string? Img_disc { get; set; }
        public string? Img_performer { get; set; }
        public string? Performer { get; set; }
        public string? Song_title { get; set; }

        public int? Place_contest { get; set; }
        public int? Sf_num { get; set; }

        public int? Running_sf { get; set; }
        public int? Place_sf { get; set; }
        public int? Points_sf { get; set; }
        public int? Points_tele_sf { get; set; }
        public int? Points_jury_sf { get; set; }

        public int? Running_final { get; set; }
        public int? Place_final { get; set; }
        public int? Points_final { get; set; }
        public int? Points_tele_final { get; set; }
        public int? Points_jury_final { get; set; }

        public string? Composers { get; set; }
        public string? Lyricists { get; set; }
        public string? Lyrics { get; set; }

        public string? Youtube_nfp { get; set; }
        public string? Youtube_ofm { get; set; }
        public string? Youtube_live { get; set; }

        public IFormFile? Img_discfile { get; set; }
        public IFormFile? Img_performerfile { get; set; }
    }
}