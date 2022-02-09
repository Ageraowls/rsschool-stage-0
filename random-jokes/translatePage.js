import translateArr from './translate.js';

const langBlock = document.querySelector('.lang');
const elemsForTranslate = [...document.querySelectorAll('[data-i18]')];
const langBtns = [...document.querySelectorAll('.lang-item')];
let btn = document.querySelector('.generate-button');

let events = new Event('click');

// btn.dispatchEvent(event);

export const toggleLanguage = (event) => {
  if (event.target.classList.contains('lang-item')) {
    const lang = event.target.textContent.toLowerCase();
    elemsForTranslate.forEach((item) => {
      const elemDataSet = item.dataset.i18;
      item.textContent = translateArr[lang][elemDataSet];
      if (lang === 'en') {
        localStorage.setItem('userLang', 'en');
      } else {
        localStorage.setItem('userLang', 'ru');
      }
    });
  }
  btn.dispatchEvent(events);
  toggleActiveBtnLang(event);
};

const toggleActiveBtnLang = (event) => {
  langBtns.forEach((item) => {
    item.classList.remove('lang_item-active');
  });
  event.target.classList.add('lang_item-active');
};

const langSubscribe = () => {
  langBlock.addEventListener('click', toggleLanguage);
};

export default langSubscribe;
