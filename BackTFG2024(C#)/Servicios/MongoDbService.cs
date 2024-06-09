using MongoDB.Driver;

namespace BackTFG2024.Servicios
{
    public class MongoDbService
    {
        private readonly IConfiguration _config;
        private readonly IMongoDatabase? _database;

        public MongoDbService(IConfiguration config)
        {
            _config = config;

            string? connectionString = _config.GetConnectionString("DbConnection");
            MongoUrl mongoUrl = MongoUrl.Create(connectionString);
            MongoClient mongoClient = new MongoClient(mongoUrl);
            _database = mongoClient.GetDatabase(mongoUrl.ApplicationName);
        }

        public IMongoDatabase? Database => _database;
    }
}
