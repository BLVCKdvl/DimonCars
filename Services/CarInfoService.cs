using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class CarInfoService
    {
        public static CarInfo GetCarInfo(CarInfo info)
        {
            if (info == null) return new CarInfo
            {
                MakeModel = "N/D",
                ManufactureYear = 0,
                PhotoPath = "/",
                EngineVolume = 0.0f,
                DailyCost = 0,
                CarClass = 'A'
            };

            return new CarInfo
            {
                MakeModel = info.MakeModel,
                ManufactureYear = info.ManufactureYear,
                PhotoPath = info.PhotoPath,
                EngineVolume = info.EngineVolume,
                DailyCost = info.DailyCost,
                CarClass = info.CarClass
            };
        }
    }
}