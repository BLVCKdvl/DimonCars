using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api")]
    public class TestController : ControllerBase
    {
        private readonly SiteStatsContext _siteStatsContext;   

        public TestController(SiteStatsContext siteStatsContext) => _siteStatsContext = siteStatsContext;

        [HttpGet("can-connect")]
        public async Task<IActionResult> CanConnect()
        {
            var stats = await _siteStatsContext.SiteStatsCollection.SingleOrDefaultAsync();
            if (stats == null)
            {
                return Ok(
                    new
                    {
                        totalClients = 0,
                        totalCars = 0,
                        companyStartDate = 0,
                        clientBonus = 0,
                        note = "Table is empty"
                    });
            }

            return Ok(new
            {
                stats.TotalClients,
                stats.TotalCars,
                stats.CompanyStartDate,
                stats.ClientBonus
            });
        }
    }
}
