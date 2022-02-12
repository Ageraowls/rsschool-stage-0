import langSubscribe from './translatePage.js';
import lang from './translatePage.js';
import { toggleLanguage } from './translatePage.js';
import translateArr from './translate.js';
function url() {
  return localStorage.getItem('userLang') === 'ru' ? './quotes.json' : 'https://type.fit/api/quotes';
}
const text = document.querySelector('.quote-text');
const author = document.querySelector('.quote-author');
const btn = document.querySelector('.generate-button');
let elemsForTranslate = [...document.querySelectorAll('[data-i18]')];
const ruBtn = document.querySelector('.ru');
const enBtn = document.querySelector('.en');

async function getData() {
  let res = await fetch(url());
  const data = await res.json();
  let random = data[Math.floor(Math.random() * data.length)];
  text.textContent = random.text;
  author.textContent = random.author;
  if (random.author == null) {
    author.textContent = 'unknown author';
  }
}
btn.addEventListener('click', getData);
window.onload = () => {
  let userLang = localStorage.getItem('userLang');
  if (userLang == undefined) {
    localStorage.setItem('userLang', 'en');
    userLang = 'en';
  }
  if (userLang === 'ru') {
    localStorage.setItem('userLang', 'ru');
    userLang = 'ru';
    enBtn.classList.remove('lang_item-active');
    ruBtn.classList.add('lang_item-active');
  }

  elemsForTranslate.forEach((item) => {
    const elemDataSet = item.dataset.i18;
    item.textContent = translateArr[userLang][elemDataSet];
  });
  langSubscribe();
  getData();
};

console.log(
  `1. Вёрстка +10\n2. При загрузке страницы приложения отображается рандомная цитата +10\n3. При перезагрузке страницы цитата обновляется (заменяется на другую) +10\n4. Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10\n5. Смена цитаты сопровождается любым другим эффектом, например, изменяется изображение или меняется фоновый цвет страницы, или проигрывается звук и т.д * +10\n 6. Можно выбрать один из двух языков отображения цитат: en/ru или en/be ** +10\n 7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10 (реализовал еще localStorage)`
);
