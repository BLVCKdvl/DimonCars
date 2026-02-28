using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models
{        
    [Table("site_stats")]
    public class SiteStats
    {
        public int id { get; set; }
        public int TotalClients { get; set; }
        public int TotalCars { get; set; }        
        public int CompanyStartDate { get; set; }
        public int ClientBonus { get; set; }

    }
}
