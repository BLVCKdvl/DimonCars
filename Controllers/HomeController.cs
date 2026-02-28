using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebApplication1.Models;
using WebApplication1.Data;
using WebApplication1.Services;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {

        private readonly SiteStatsContext _siteStatsContext;

        public HomeController(SiteStatsContext statsServiceContext)
        {
            _siteStatsContext = statsServiceContext;
        }

        public async Task<IActionResult> Index()
        {
            var stats = await _siteStatsContext.SiteStatsCollection.SingleOrDefaultAsync();

            var siteStatsModel = SiteStatsService.GetStats(stats);

            return View(siteStatsModel);

        }

        public IActionResult Catalog()
        {
            return View();
        }

        public IActionResult Conditions()
        {
            return View();
        }
        public IActionResult Rewievs()
        {
            return View();
        }
        public IActionResult Contacts()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
