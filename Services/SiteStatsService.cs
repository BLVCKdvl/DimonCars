using Microsoft.Extensions.Caching.Memory;
using System.Text.Json;

namespace WebApplication1.Services
{
    public class SiteStatsService
    {
        private readonly IWebHostEnvironment _env;
        private readonly IMemoryCache _cache;
        private readonly ILogger<SiteStatsService> _logger;

        public SiteStatsService(IWebHostEnvironment env, IMemoryCache cache, ILogger<SiteStatsService> logger)
        {
            _env = env;
            _cache = cache;
            _logger = logger;
        }

        public async Task<SiteStatsDto> GetStatsAsync()
        {
#pragma warning disable CS8603
            return await _cache.GetOrCreateAsync("site_stats_v3", async entry =>
            {
                entry.SlidingExpiration = TimeSpan.FromHours(4);

                var path = Path.Combine(_env.WebRootPath, "data", "site-stats.json");

                if (!File.Exists(path))
                {
                    _logger.LogWarning("site-stats.json не найден.");
                    return new SiteStatsDto { TotalClients = 4000, TotalCars = 20, YearsOnMarket = 2 };
                }

                var json = await File.ReadAllTextAsync(path);
                var data = JsonSerializer.Deserialize<SiteStatsConfig>(json);

                var startDate = DateTime.Parse(data.CompanyStartDate);

                var years = DateTime.Today.Year - startDate.Year;
                if (DateTime.Today < startDate.AddYears(years)) years--;

                var totalClients = data.TotalClients + data.ClientBonus;

                return new SiteStatsDto
                {
                    TotalClients = totalClients,
                    TotalCars = data.TotalCars,
                    YearsOnMarket = years
                };
            });
#pragma warning restore CS8603
        }

    }

    file class SiteStatsConfig
    {
        public int TotalClients { get; set; }
        public int TotalCars { get; set; }
        public string CompanyStartDate { get; set; } = "2022-01-01";
        public int ClientBonus { get; set; } = 0;
    }
}
