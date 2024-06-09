using BackTFG2024.Repositorios.Interfaces;
using BackTFG2024.Servicios;

namespace BackTFG2024.Repositorios
{
    public class UnitOfWork : IUnitOfWork {

        MongoDbService _mongoDbService;

        public UnitOfWork(MongoDbService mongoDbService) {

            _mongoDbService = mongoDbService;

            Songs = new SongsCollections(_mongoDbService);
            Years = new YearsCollections(_mongoDbService);
            Countries = new CountriesCollections(_mongoDbService);
            Comments = new CommentsCollections(_mongoDbService);
            Users = new UsersCollections(_mongoDbService);
        }
        public ISongsCollections Songs { get; set; }

        public IYearsCollections Years { get; set; }

        public ICountriesCollections Countries { get; set; }

        public ICommentsCollections Comments { get; set; }

        public IUsersCollections Users { get; set; }
    }
}
