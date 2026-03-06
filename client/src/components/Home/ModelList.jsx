import { useState, useEffect } from "react";

import { api } from "../../services/carInfo";

export default function ModelList() {
  const [models, setModels] = useState({
    makeModel: "",
    manufactureYear: 0,
    photoPath: "",
    engineVolume: 0.0,
    dailyCost: 0,
    carClass: "",
  });

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
        <div className="row">
          <div
            className="column left"
            style={{
              backgroundImage: `url(${models.photoPath})`,
            }}
          ></div>
          <div
            className="column right"
            style={{
              backgroundImage: `url(${models.photoPath})`,
            }}
          ></div>
        </div>
        <div className="row">
          <div
            className="column left"
            style={{
              backgroundImage: `url(${models.photoPath})`,
            }}
          ></div>
          <div
            className="column right"
            style={{
              backgroundImage: `url(${models.photoPath})`,
            }}
          ></div>
        </div>
        {/* <h1>Каталог автомобилей</h1>
        <p>{models.makeModel}</p>
        <p>{models.manufactureYear}</p>
        <p>{models.photoPath}</p>
        <p>{models.engineVolume}</p>
        <p>{models.dailyCost}</p>
        <p>{models.carClass}</p>
        <img src={models.photoPath} alt="авто" /> */}
      </div>
    </section>
  );
}
