using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models
{
    [Table("car_info")]
    public class CarInfo
    {
        [Column("id")]
        public int? id { get; set; }

        [Column("make_model")]
        public string? MakeModel { get; set; }

        [Column("manufacture_year")]
        public int ManufactureYear { get; set; }

        [Column("photo_path")]
        public string? PhotoPath { get; set; }

        [Column("engine_volume")]
        public float EngineVolume { get; set; }

        [Column("daily_cost")]
        public int DailyCost { get; set; }

        [Column("car_class")]
        public char CarClass { get; set; }
    }
}
