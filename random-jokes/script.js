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
const ruBtn = document.querySelector('.ru');

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
const elemsForTranslate = [...document.querySelectorAll('[data-i18]')];
window.onload = () => {
  let userLang = localStorage.getItem('userLang');
  if (userLang === undefined) {
    localStorage.setItem('userLang', 'en');
    userLang = 'en';
  }

  elemsForTranslate.forEach((item) => {
    const elemDataSet = item.dataset.i18;
    item.textContent = translateArr[userLang][elemDataSet];
  });

  langSubscribe();
  getData();
};
