using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Services;

[Route("api/site")]
[ApiController]
public class CarStatsController : ControllerBase
{
    private readonly CarInfoContext _carInfoContext;

    public CarStatsController(CarInfoContext carInfoContext)
    {
        _carInfoContext = carInfoContext;
    }

    [HttpGet("carInfo")]
    public async Task<IActionResult> GetStats()
    {
        var db = await _carInfoContext.CarInfoCollection.FirstOrDefaultAsync();

        var vm  = CarInfoService.GetCarInfo(db);

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