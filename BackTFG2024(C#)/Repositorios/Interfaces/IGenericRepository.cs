using System.Linq.Expressions;

namespace BackTFG2024.Repositorios.Interfaces
{
    public interface IGenericRepository<T> where T : class {
        Task<IEnumerable<T>> GetAll();
        Task<T> GetById(string id);
        Task Post(T t);
        Task Put(T t);
        Task Delete(string id);
     }
}
