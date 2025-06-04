
const content = {
  lt: {
    about: "<h2>Apie mus</h2><p>Profesionalus servisas su patirtimi...</p>",
    services: "<h3>Paslaugos</h3><ul><li>🔑 Programavimas ir kopijavimas</li><li>🔧 Korpuso keitimas</li><li>🚗 Avarinis atrakinimas</li><li>⚙️ Diagnostika ir lustų pririšimas</li></ul>",
    prices: "<h3>Kainoraštis</h3><ul><li>Programavimas – nuo 30 €</li><li>Korpuso keitimas – nuo 15 €</li><li>Diagnostika – nemokamai</li><li>Iškvietimas mieste – įskaičiuota</li></ul>"
  },
  en: {
    about: "<h2>About Us</h2><p>Professional service with experience...</p>",
    services: "<h3>Services</h3><ul><li>🔑 Key programming and copying</li><li>🔧 Case and button replacement</li><li>🚗 Emergency unlocking</li><li>⚙️ Diagnostics and chip linking</li></ul>",
    prices: "<h3>Prices</h3><ul><li>Programming – from 30 €</li><li>Case replacement – from 15 €</li><li>Diagnostics – free</li><li>City call-out – included</li></ul>"
  },
  ru: {
    about: "<h2>О нас</h2><p>Профессиональный сервис с опытом...</p>",
    services: "<h3>Услуги</h3><ul><li>🔑 Программирование и копирование ключей</li><li>🔧 Замена корпуса и кнопок</li><li>🚗 Аварийное вскрытие</li><li>⚙️ Диагностика и привязка чипов</li></ul>",
    prices: "<h3>Цены</h3><ul><li>Программирование — от 30 €</li><li>Замена корпуса — от 15 €</li><li>Диагностика — бесплатно</li><li>Выезд по городу — включено</li></ul>"
  }
};

function switchLanguage(lang) {
  document.getElementById("about").innerHTML = content[lang].about;
  document.getElementById("services").innerHTML = content[lang].services;
  document.getElementById("prices").innerHTML = content[lang].prices;
}
window.onload = () => switchLanguage("lt");
