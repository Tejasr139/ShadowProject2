using CMSproject26.Models;
using CMSproject26.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace CMSproject26.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserMasterController : ControllerBase
    {
        private readonly IUserMasterRepository _repository;

        public UserMasterController(IUserMasterRepository repository)
        {
            _repository = repository;
        }

        // GET: api/UserMaster
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserMaster>>> GetUserMasters()
        {
            return Ok(await _repository.GetAllAsync());
        }

        // GET: api/UserMaster/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserMaster>> GetUserMaster(int id)
        {
            var userMaster = await _repository.GetByIdAsync(id);

            if (userMaster == null)
            {
                return NotFound();
            }

            return Ok(userMaster);
        }

        // PUT: api/UserMaster/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserMaster(int id, UserMaster userMaster)
        {
            if (id != userMaster.Id)
            {
                return BadRequest();
            }

            try
            {
                await _repository.UpdateAsync(userMaster);
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }

            return NoContent();
        }

        // POST: api/UserMaster
        [HttpPost]
        public async Task<ActionResult<UserMaster>> PostUserMaster(UserMaster userMaster)
        {
            try
            {
                var createdUserMaster = await _repository.AddAsync(userMaster);
                return CreatedAtAction("GetUserMaster", new { id = createdUserMaster.Id }, createdUserMaster);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/UserMaster/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserMaster>> DeleteUserMaster(int id)
        {
            try
            {
                var userMaster = await _repository.DeleteAsync(id);
                return Ok(userMaster);
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }

}
