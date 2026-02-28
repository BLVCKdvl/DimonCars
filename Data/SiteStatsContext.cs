using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Data
{
    public class SiteStatsContext : DbContext
    {
        public SiteStatsContext(DbContextOptions<SiteStatsContext> options)
            : base(options) { }

        public DbSet<SiteStats> SiteStatsCollection { get; set; }
    }
}
