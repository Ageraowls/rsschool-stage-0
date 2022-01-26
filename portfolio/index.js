// console.log(
//   '1. Вёрстка соответствует макету. Ширина экрана 768px +48\n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15\n3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22'
// );
const i18Obj = {
  en: {
    skills: 'Skills',
    portfolio: 'Portfolio',
    video: 'Video',
    price: 'Price',
    contacts: 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text':
      'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    hire: 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    winter: 'Winter',
    spring: 'Spring',
    summer: 'Summer',
    autumn: 'Autumn',
    'price-sub-title-standart': 'Standpart',
    'price-sub-title-premium': 'Premium',
    'price-sub-title-gold': 'Gold',
    'price-sub-title-standart-value': '500 $',
    'price-sub-title-premium-value': '700 $',
    'price-sub-title-gold-value': '1000 $',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    order: 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message',
    'placeholder-email': 'E-mail',
    'placeholder-phone': 'Phone',
    'placeholder-message': 'Message',
  },
  ru: {
    skills: 'Навыки',
    portfolio: 'Портфолио',
    video: 'Видео',
    price: 'Цены',
    contacts: 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text':
      'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    hire: 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    winter: 'Зима',
    spring: 'Весна',
    summer: 'Лето',
    autumn: 'Осень',
    'price-sub-title-standart': 'Стандарт',
    'price-sub-title-premium': 'Премиум',
    'price-sub-title-gold': 'Золотой',
    'price-sub-title-standart-value': '42000 руб',
    'price-sub-title-premium-value': '56000 руб',
    'price-sub-title-gold-value': '80000 руб',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    order: 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить',
    'placeholder-email': 'Почта',
    'placeholder-phone': 'Телефон',
    'placeholder-message': 'Сообщение',
  },
};

// Burger

(function () {
  const humb = document.querySelector('.burger');
  const menu = document.querySelector('.header__navigation');
  const menuLinks = document.querySelectorAll('.menu__link');
  const overlay = document.querySelector('.overlay');
  if (window.innerWidth <= 768) {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('active');
        humb.classList.remove('active');
        overlay.classList.remove('active');
      });
    }
  }
})();

let humb = document.querySelector('.burger');
let navMenu = document.querySelector('.header__navigation');
let overlay = document.querySelector('.overlay');
humb.addEventListener('click', mobileMenu);

function mobileMenu() {
  humb.classList.toggle('active');
  navMenu.classList.toggle('active');
  overlay.classList.toggle('active');
}

// Scroll to anchors

(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector('.header').clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll('.js-scroll');
    links.forEach((each) => {
      each.addEventListener('click', function () {
        const currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();

//

const portfolioBtn = document.querySelector('.button-item');
const portfolioImages = document.querySelectorAll('.pictures-item');
const portfolioBtns = document.querySelector('.portfolio__buttons-block');
const btns = document.querySelectorAll('.button-item');
// portfolioImages.forEach((img, index) => (img.src = `./assets/img/winter/${index + 1}.jpg`));
// event.dataset.forEach((season, index) => (season.src = `./assets/img/${index + 1}`));

portfolioBtns.addEventListener('click', (event) => {
  if (event.target.classList.contains('button-item')) {
    const season = event.target.dataset.season;
    portfolioImages.forEach((img, index) => (img.src = `./assets/img/${season}/${index + 1}.jpg`));
  }
  const target = event.target;
  btns.forEach((item) => {
    item.classList.remove('active');
  });
  target.classList.add('active');
});

/* preloadImages  */
function preloadImages(folder) {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/${folder}/${i}.jpg`;
  }
}
const seasons = ['winter', 'spring', 'summer', 'autumn'];
seasons.forEach((i) => preloadImages(i));

let mailInput = document.getElementById('mail');
let phoneInput = document.getElementById('phone');

function getTranslateRu(lang = 'ru') {
  const data = document.querySelectorAll('[data-i18]');
  data.forEach((item) => {
    let text = item.dataset.i18;
    item.textContent = i18Obj.ru[text];
  });
  mailInput.placeholder = 'Почта';
  phoneInput.placeholder = 'Телефон';
}
function getTranslateEn(lang = 'en') {
  const data = document.querySelectorAll('[data-i18]');
  data.forEach((item) => {
    let text = item.dataset.i18;
    item.textContent = i18Obj.en[text];
  });
  mailInput.placeholder = 'E-mail';
  phoneInput.placeholder = 'Phone';
}
const ruBtn = document.querySelector('.ru');
const enBtn = document.querySelector('.en');
ruBtn.addEventListener('click', () => getTranslateRu('ru'));
enBtn.addEventListener('click', () => getTranslateEn('en'));

const switchers = document.querySelector('.header__language-switcher');

// switch ru/eng
switchers.addEventListener('click', (event) => {
  const langs = document.querySelectorAll('.language-item');
  const language = event.target;
  langs.forEach((item) => {
    item.classList.remove('active');
  });
  language.classList.add('active');
});

// light theme

const toggleThemeBtn = document.body.querySelector('.toggle-theme-btn');
const toggleThemeImage = document.body.querySelector('#toggle-theme-image');
const section = document.body.querySelectorAll('.section');
const footer = document.body.querySelector('.footer-container');
const hero = document.body.querySelector('.hero-container');
const title = document.body.querySelectorAll('.section-title');

// toggleThemeBtn.addEventListener('click', () => {
//   if (document.body.classList.contains('theme')) {
//     document.body.classList.remove('theme');
//     toggleThemeImage.src = './assets/svg/sun.svg';
//   } else {
//     document.body.classList.add('theme');
//     toggleThemeImage.src = './assets/svg/moon.svg';
//   }
// });

toggleThemeBtn.addEventListener('click', () => {
  if (document.body.classList.contains('theme')) {
    document.body.classList.remove('theme');
  } else {
    document.body.classList.add('theme');
  }
  section.forEach((item) => {
    if (item.classList.contains('theme')) {
      item.classList.remove('theme');
      toggleThemeImage.src = './assets/svg/sun.svg';
    } else {
      item.classList.add('theme');
      toggleThemeImage.src = './assets/svg/moon.svg';
    }
  });
  if (!footer.classList.contains('dark')) {
    footer.classList.add('dark');
  }
  if (!hero.classList.contains('dark')) {
    hero.classList.add('dark');
  }
  btns.forEach((item) => {
    if (item.classList.contains('theme')) {
      item.classList.remove('theme');
    } else {
      item.classList.add('theme');
    }
  });
  title.forEach((item) => {
    if (!item.classList.contains('black')) {
      item.classList.add('black');
    } else {
      item.classList.remove('black');
    }
  });
});

let content = window
  .getComputedStyle(document.querySelector('.section-title'), ':after')
  .getPropertyValue('content');
console.log(content);
