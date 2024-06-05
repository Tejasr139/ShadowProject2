﻿using CMSproject26.Models;
using Microsoft.EntityFrameworkCore;

namespace CMSproject26.Repositories
{
    public class UserMasterRepository : IUserMasterRepository
    {
        private readonly ApplicationDbContext _context;

        public UserMasterRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<UserMaster>> GetAllAsync()
        {
            try
            {
                return await (from u in _context.UserMasters.Include(u => u.UserTypeMaster)
                              select u).ToListAsync();
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception("Error getting all users", ex);
            }
        }

        public async Task<UserMaster> GetByIdAsync(int id)
        {
            try
            {
                var userMaster = await (from u in _context.UserMasters.Include(u => u.UserTypeMaster)
                                        where u.Id == id
                                        select u).FirstOrDefaultAsync();
                if (userMaster == null)
                {
                    throw new KeyNotFoundException("User not found");
                }
                return userMaster;
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception($"Error getting user with id {id}", ex);
            }
        }

        public async Task<UserMaster> AddAsync(UserMaster userMaster)
        {
            try
            {
                _context.UserMasters.Add(userMaster);
                await _context.SaveChangesAsync();
                return userMaster;
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception("Error adding user", ex);
            }
        }

        public async Task<UserMaster> UpdateAsync(UserMaster userMaster)
        {
            try
            {
                var existingUserMaster = await (from u in _context.UserMasters
                                                where u.Id == userMaster.Id
                                                select u).FirstOrDefaultAsync();
                if (existingUserMaster == null)
                {
                    throw new KeyNotFoundException("User not found");
                }

                existingUserMaster.UserName = userMaster.UserName;
                existingUserMaster.Password = userMaster.Password;
                existingUserMaster.Email = userMaster.Email;
                existingUserMaster.FirstName = userMaster.FirstName;
                existingUserMaster.LastName = userMaster.LastName;
                existingUserMaster.Address = userMaster.Address;
                existingUserMaster.City = userMaster.City;
                existingUserMaster.State = userMaster.State;
                existingUserMaster.Country = userMaster.Country;
                existingUserMaster.Pincode = userMaster.Pincode;
                existingUserMaster.UserTypeId = userMaster.UserTypeId;

                _context.Entry(existingUserMaster).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return existingUserMaster;
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception("Error updating user", ex);
            }
        }

        public async Task<UserMaster> DeleteAsync(int id)
        {
            try
            {
                var userMaster = await (from u in _context.UserMasters
                                        where u.Id == id
                                        select u).FirstOrDefaultAsync();
                if (userMaster == null)
                {
                    throw new KeyNotFoundException("User not found");
                }

                _context.UserMasters.Remove(userMaster);
                await _context.SaveChangesAsync();
                return userMaster;
            }
            catch (Exception ex)
            {
                // Log the exception (implement logging as needed)
                throw new Exception("Error deleting user", ex);
            }
        }
    }

}
