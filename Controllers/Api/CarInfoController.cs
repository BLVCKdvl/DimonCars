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
        var databaseResponse = await _carInfoContext.CarInfoCollection
            .AsNoTracking()
            .OrderBy(x => x.id)
            .ToListAsync();

        //var vm  = CarInfoService.GetCarInfo(db);

        var viewModel = databaseResponse
            .Select(CarInfoService.GetCarInfo)
            .Where (x => x != null)
            .ToList();

        return Ok(viewModel);

        // if (vm == null)
        // {
        //     throw new NullReferenceException("DB returned null");
        // }
        // else
        // {
        //     return Ok(vm);
        // }
    }
}