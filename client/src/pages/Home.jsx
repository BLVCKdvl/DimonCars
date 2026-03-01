import "../assets/css/main.css"; // или глобально в index.css

export default function Home() {
  const [stats, setStats] = useState({ clients: 0, cars: 0, years: 0 });

  useEffect(() => {
    fetch("https://localhost:7234/api/site/stats")
      .then((r) => r.json())
      .then((data) => setStats(data));
  }, []);

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
              <span className="stat-number">{stats.clients}+</span>
              <span>клиентов</span>
            </li>
            <li>
              <span className="stat-number">{stats.cars}+</span>
              <span>автомобилей</span>
            </li>
            <li className="no-background">
              <span className="stat-number">{stats.years}+</span>
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
