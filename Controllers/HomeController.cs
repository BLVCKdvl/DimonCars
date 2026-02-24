using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        private readonly SiteStatsService _statsService;

        public HomeController(SiteStatsService statsService)
        {
            _statsService = statsService;
        }

        public async Task<IActionResult> Index()
        {
            ViewBag.Stats = await _statsService.GetStatsAsync();

            return View();   
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
