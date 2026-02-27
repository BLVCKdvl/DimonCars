using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api")]
    public class TestController : ControllerBase
    {
        private readonly SiteStatsContext _siteStatsContext;   

        public TestController(SiteStatsContext siteStatsContext) => _siteStatsContext = siteStatsContext;

        [HttpGet("can-connect")]
        public IActionResult CanConnect()
        {
            bool canConnect = _siteStatsContext.Database.CanConnect();

            StringBuilder stringBuilder = new StringBuilder();

            stringBuilder.Append(canConnect + "\n");

            stringBuilder.Append(_siteStatsContext.SiteStatsCollection);

            return Ok(stringBuilder.ToString());
        }
    }
}
