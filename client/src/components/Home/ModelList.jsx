import { useState, useEffect } from "react";
import { api } from "../../services/carInfo";

export default function ModelList() {
  // const [models, setModels] = useState({
  //   makeModel: "",
  //   manufactureYear: 0,
  //   photoPath: "",
  //   engineVolume: 0.0,
  //   dailyCost: 0,
  //   carClass: "",
  // });

  const [models, setModels] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getModels()
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <section className="model-list">
      <h1 className="model-header">Каталог автомобилей</h1>
      <div className="model-list-container">
        {models
          .reduce((rows, car, index) => {
            if (index % 2 === 0) {
              rows.push([car]);
            } else {
              rows[rows.length - 1].push(car);
            }
            return rows;
          }, [])
          .map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((car, i) => (
                <a
                  key={car.makeModel + i}
                  href="/"
                  className="column"
                  style={{
                    backgroundImage: `url(${car.photoPath || "/no-photo.jpg"})`,
                  }}
                >
                  <div className="info-container">
                    <h3>{car.makeModel}</h3>
                    <p>{car.manufactureYear}</p>
                    <p>{car.dailyCost} BYN в день</p>
                  </div>
                </a>
              ))}
              {row.length === 1 && (
                <div className="column" style={{ backgroundImage: "none" }} />
              )}
            </div>
          ))}
      </div>
    </section>
  );
}
