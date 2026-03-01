using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Services;

[Route("api/site")]
[ApiController]
public class SiteController : ControllerBase
{
    private readonly SiteStatsContext _siteStatsContext;

    public SiteController(SiteStatsContext siteStatsContext)
    {
        _siteStatsContext = siteStatsContext;
    }

    [HttpGet("stats")]
    public async Task<IActionResult> GetStats()
    {
        var db = await _siteStatsContext.SiteStatsCollection.FirstOrDefaultAsync();

        var vm = SiteStatsService.GetStats(db);

        if (vm == null)
        {
            throw new NullReferenceException("DB returned null");
        }
        else
        {
            return Ok(vm);
        }        
    }
}