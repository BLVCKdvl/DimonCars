export default function Conditions() {
  const conditions = [
    {
      title: "Водительское удостоверение",
      text: "Стаж от 2 лет, возраст от 21 года — стандартные требования, без фанатизма",
    },
    {
      title: "Залог",
      text: "От 100 BYN на эконом-класс, от 200 BYN на комфорт и выше. Возвращаем полностью при возврате авто в нормальном состоянии",
    },
    {
      title: "Топливо",
      text: "Полный бак при получении — полный при возврате. Или доплати 50 BYN и верни пустым — как тебе удобнее",
    },
    {
      title: "Пробег",
      text: "300 км/сутки включены в стоимость. Сверх — 0.20 BYN/км (самые низкие цены в Минске)",
    },
    {
      title: "Доставка/подача",
      text: "Бесплатно в пределах Минска с 9:00 до 21:00. Ночью и в область — от 30 BYN",
    },
    {
      title: "Страховка",
      text: "ОСАГО + КАСКО с франшизой 300–500 BYN включены в цену",
    },
  ];

  return (
    <section className="conditions">
      <h3 className="page-header">Условия аренды</h3>

      <div className="cards-container">
        {conditions.map((card, index) => (
          <div className="condition-card" key={index}>
            <h4>{card.title}</h4>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
