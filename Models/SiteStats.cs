using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models
{
    public class SiteStatsContext : DbContext
    {
        public SiteStatsContext(DbContextOptions<SiteStatsContext> options)
            : base(options) { }

        public DbSet<SiteStats> SiteStatsCollection { get; set; }
    }

    public class SiteStats
    {
        public int id { get; set; }
        public int TotalClients { get; set; }
        public int TotalCars { get; set; }        
        public int CompanyStartDate { get; set; }
        public int ClientBonus { get; set; }

    }
}
