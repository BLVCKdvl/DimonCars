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
      <div className="model-list-container">
        <h1>Каталог автомобилей</h1>
        <p>{models.makeModel}</p>
        <p>{models.manufactureYear}</p>
        <p>{models.photoPath}</p>
        <p>{models.engineVolume}</p>
        <p>{models.dailyCost}</p>
        <p>{models.carClass}</p>
        <img src={models.photoPath} alt="авто" />
      </div>
    </section>
  );
}
