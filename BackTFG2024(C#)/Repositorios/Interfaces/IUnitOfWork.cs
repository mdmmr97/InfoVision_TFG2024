namespace BackTFG2024.Repositorios.Interfaces
{
    public interface IUnitOfWork  {
        ISongsCollections Songs { get; }
        IYearsCollections Years { get; }
        ICountriesCollections Countries { get; }
        ICommentsCollections Comments { get; }
        IUsersCollections Users { get; }
    }
}
