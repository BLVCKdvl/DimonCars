using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class SiteStatsService
    {
        public static SiteStats GetStats(SiteStats stats)
        {
            if (stats == null) return new SiteStats
            {
                TotalCars = 0,
                TotalClients = 0,
                YearsOnMarket = 0,
            };

            int yearsOnMarket = DateTime.Today.Year - stats.CompanyStartDate.Year;

            return new SiteStats
            {
                TotalClients = stats.TotalClients + stats.ClientBonus,
                TotalCars = stats.TotalCars,
                YearsOnMarket = yearsOnMarket,
            };
        }
    }
}