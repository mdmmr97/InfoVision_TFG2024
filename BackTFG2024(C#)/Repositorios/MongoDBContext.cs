using MongoDB.Driver;

namespace BackTFG2024.Repositorios
{
    public class MongoDBContext {
        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;

        public string Songs_Collection { get; set; } = null!;
        public string Years_Collection { get; set; } = null!;
        public string Countries_Collection { get; set; } = null!;
        public string Users_Collection { get; set; } = null!;
        public string Comments_Collection { get; set; } = null!;
    }
}
