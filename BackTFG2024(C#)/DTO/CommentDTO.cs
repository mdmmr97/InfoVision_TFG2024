using MongoDB.Bson.Serialization.Attributes;

namespace BackTFG2024.DTOs
{
    public class CommentDTO {
        public string Id { get; set; }

        public string Song_Id { get; set; }

        public string? User { get; set; }

        public string Song_name { get; set; }

        public int Year { get; set; }

        public string Country { get; set; }

        public int? Note_nfp { get; set; }

        public int? Note_ofm { get; set; }

        public int? Note_live { get; set; }

        public string? Text { get; set; }
    }

    public class GetCommentDTO
    {
        public string Id { get; set; }

        public string? Song_Id { get; set; }

        public string Song_name { get; set; }

        public int Year { get; set; }

        public string Country { get; set; }

        public int? Note_nfp { get; set; }

        public int? Note_ofm { get; set; }

        public int? Note_live { get; set; }

        public string? Text { get; set; }
    }

    public class NewCommentDTO
    {
        public string Song_Id { get; set; }

        public string? User { get; set; }

        public string Song_name { get; set; }

        public int Year { get; set; }

        public string Country { get; set; }

        public int? Note_nfp { get; set; }

        public int? Note_ofm { get; set; }

        public int? Note_live { get; set; }

        public string? Text { get; set; }
    }
}