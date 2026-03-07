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
          <a
            href="/"
            className="column"
            style={{
              backgroundImage: `url(${models.photoPath})`,
            }}
          >
            <div class="info-container">
              <h3>{models.makeModel}</h3>
              <p>{models.manufactureYear}</p>
              <p>{models.dailyCost}р в день</p>
            </div>
          </a>
          <a
            href="/"
            className="column"
            style={{
              backgroundImage: `url(${models.photoPath})`,
            }}
          >
            <div class="info-container">
              <h3>{models.makeModel}</h3>
              <p>{models.manufactureYear}</p>
              <p>{models.dailyCost}р в день</p>
            </div>
          </a>
        </div>
        <div className="row">
          <a
            href="/"
            className="column"
            style={{
              backgroundImage: `url(${models.photoPath})`,
            }}
          >
            <div class="info-container">
              <h3>{models.makeModel}</h3>
              <p>{models.manufactureYear}</p>
              <p>{models.dailyCost}р в день</p>
            </div>
          </a>
          <a
            href="/"
            className="column"
            style={{
              backgroundImage: `url(${models.photoPath})`,
            }}
          >
            <div class="info-container">
              <h3>{models.makeModel}</h3>
              <p>{models.manufactureYear}</p>
              <p>{models.dailyCost}р в день</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
