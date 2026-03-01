import { useState, useEffect } from "react";
import { api } from "../services/api";

export default function SiteStats() {
  const [stats, setStats] = useState({
    totalClients: 0,
    totalCars: 0,
    yearsOnMarket: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getStats()
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <section className="main">
      <div className="intro-container">
        <div className="left-block">
          <h1 className="intro">
            Аренда
            <br />
            автомобилей
            <br />в Минске
          </h1>
          <div className="main-info">
            Широкий ассортимент автомобилей
            <br />
            эконом, комфорт и премиум класса
          </div>
          <ul className="company-stats">
            <li>
              <span className="white-round">без водителя</span>
              <span className="white-round">доступен выезд за город</span>
            </li>
            <li>
              <span className="stat-number">{stats.totalClients}+</span>
              <span>клиентов</span>
            </li>
            <li>
              <span className="stat-number">{stats.totalCars}+</span>
              <span>автомобилей</span>
            </li>
            <li className="no-background">
              <span className="stat-number">{stats.yearsOnMarket}+</span>
              <span>лет на рынке</span>
            </li>
          </ul>
        </div>
        <div className="image-right">
          <a className="btn-round" href="/catalog">
            перейти
            <br />в автопарк
          </a>
        </div>
      </div>
    </section>
  );
}
