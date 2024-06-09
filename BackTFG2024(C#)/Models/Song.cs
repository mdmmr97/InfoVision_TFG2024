using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace BackTFG2024.Models
{
    public class Song
    {
        [BsonId]
        [BsonElement("_id") ,BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonRequired]
        [BsonElement("id_song")]
        public string? Id_song { get; set; }

        [BsonRequired]
        [BsonElement("year")]
        public int? Year { get; set; } = 0;

        [BsonRequired]
        [BsonElement("country")]
        public CountryDetail? Country { get; set; } = null!;

        [BsonElement("song")]
        public Candidature? Candidature { get; set; }


        [BsonElement("place_contest")]
        public int? Place_contest { get; set; }

        [BsonElement("sf_num")]
        public int? Sf_num { get; set; }


        [BsonElement("performance_sf")]
        public Performance_sf? Performance_sf { get; set; }

        [BsonElement("performance_final")]
        public Performance_final? Performance_final { get; set; }


        [BsonElement("youtube_nfp")]
        public string? Youtube_nfp { get; set; }
        [BsonElement("youtube_ofm")]
        public string? Youtube_ofm { get; set; }
        [BsonElement("youtube_live")]
        public string? Youtube_live { get; set; }
    }

    public class Candidature
    {
        public Candidature(string? song_title, string? performer,string? img_disc ,string? img_performer, string? composers, string? lyricists, string? lyrics) {
            Song_title = song_title;
            Performer = performer;
            Img_disc = img_disc;
            Img_performer = img_performer;
            Composers = composers;
            Lyricists = lyricists;
            Lyrics = lyrics;
        }

        [BsonElement("song_title")]
        public string? Song_title { get; set; }

        [BsonElement("performer")]
        public string? Performer { get; set; }

        [BsonElement("img_disc")]
        public string? Img_disc { get; set; }

        [BsonElement("img_performer")]
        public string? Img_performer { get; set; }

        [BsonElement("composers")]
        public string? Composers { get; set; }

        [BsonElement("lyricists")]
        public string? Lyricists { get; set; }

        [BsonElement("lyrics")]
        public string? Lyrics { get; set; }
    }

    public class Performance_sf  {
        public Performance_sf(int? running_sf, int? place_sf, int? points_sf, int? points_tele_sf, int? points_jury_sf) {
            Running_sf = running_sf;
            Place_sf = place_sf;
            Points_sf = points_sf;
            Points_tele_sf = points_tele_sf;
            Points_jury_sf = points_jury_sf;
        }

        [BsonElement("running_sf")]
        public int? Running_sf { get; set; }

        [BsonElement("place_sf")]
        public int? Place_sf { get; set; }

        [BsonElement("points_sf")]
        public int? Points_sf { get; set; }

        [BsonElement("points_tele_sf")]
        public int? Points_tele_sf { get; set; }

        [BsonElement("points_jury_sf")]
        public int? Points_jury_sf { get; set; }
    }

    public class Performance_final {

        public Performance_final(int? running_final, int? place_final, int? points_final, int? points_tele_final, int? points_jury_final) {
            Running_final = running_final;
            Place_final = place_final;
            Points_final = points_final;
            Points_tele_final = points_tele_final;
            Points_jury_final = points_jury_final;
        }   

        [BsonElement("running_final")]
        public int? Running_final { get; set; }

        [BsonElement("place_final")]
        public int? Place_final { get; set; }

        [BsonElement("points_final")]
        public int? Points_final { get; set; }

        [BsonElement("points_tele_final")]
        public int? Points_tele_final { get; set; }

        [BsonElement("points_jury_final")]
        public int? Points_jury_final { get; set; }
    }

    public class SongCard
    {
        [BsonRequired]
        [BsonElement("id_song")]
        public string? Id_song { get; set; }

        [BsonRequired]
        [BsonElement("year")]
        public int? Year { get; set; } = 0;

        [BsonRequired]
        [BsonElement("country")]
        public CountryDetail? Country { get; set; } = null!;

        [BsonElement("song_title")]
        public string? Song_title { get; set; }

        [BsonElement("performer")]
        public string? Performer { get; set; }

        [BsonElement("img_disc")]
        public string? Img_disc { get; set; }
    }
}
