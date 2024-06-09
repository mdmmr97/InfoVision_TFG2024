using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace BackTFG2024.Models
{
    public class Comment {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("song_id")]
        public string Song_Id { get; set; }

        [BsonElement("user")]
        public string User { get; set; }

        [BsonElement("song_name")]
        public string Song_name { get; set; }

        [BsonElement("year")]
        public int Year { get; set; }

        [BsonElement("country_id")]
        public string Country { get; set; }

        [BsonElement("note_nfp")]
        public int? Note_NFP { get; set; }

        [BsonElement("note_ofm")]
        public int? Note_OFM { get; set; }

        [BsonElement("note_live")]
        public int? Note_Live { get; set; }

        [BsonElement("comment")]
        public string? Text { get; set; }

    }
}
