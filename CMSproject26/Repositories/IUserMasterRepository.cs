using CMSproject26.Models;

namespace CMSproject26.Repositories
{
    public interface IUserMasterRepository
    {
        Task<IEnumerable<UserMaster>> GetAllAsync();
        Task<UserMaster> GetByIdAsync(int id);
        Task<UserMaster> AddAsync(UserMaster userMaster);
        Task<UserMaster> UpdateAsync(UserMaster userMaster);
        Task<UserMaster> DeleteAsync(int id);
    }

}
