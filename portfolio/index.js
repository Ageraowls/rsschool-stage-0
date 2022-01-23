console.log(
  '1. Вёрстка соответствует макету. Ширина экрана 768px +48\n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15\n3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22'
);

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
