using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api")]
    public class TestController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public TestController(ApplicationDbContext db) => _db = db;

        [HttpGet("can-connect")]
        public IActionResult CanConnect()
        {
            bool canConnect = _db.Database.CanConnect();
            return Ok(new { CanConnect = canConnect });
        }
    }
}
