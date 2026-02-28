using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models
{        
    [Table("site_stats")]
    public class SiteStats
    {
        [Column("id")]
        public int id { get; set; }
        [Column("total_clients")]
        public int TotalClients { get; set; }
        [Column("total_cars")]
        public int TotalCars { get; set; }
        [Column("company_start_date")]
        public int CompanyStartDate { get; set; }
        [Column("client_bonus")]
        public int ClientBonus { get; set; }

    }
}
