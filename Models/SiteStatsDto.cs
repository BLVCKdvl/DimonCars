public class SiteStatsDto
{
    public int TotalClients { get; set; }
    public int TotalCars { get; set; }
    public int YearsOnMarket { get; set; }
    public string? YearsText => YearsOnMarket >= 5 ? YearsOnMarket.ToString() : $"{YearsOnMarket}+";
}
