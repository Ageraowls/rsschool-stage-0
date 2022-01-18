console.log(
  '1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\n3. Вёрстка соответствует макету +48\n4. Требования к css + 12\n5. Интерактивность, реализуемая через css +20'
);

// Burger

(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__navigation');
  const menuCloseItem = document.querySelector('.header__navigation-close');
  const menuLinks = document.querySelectorAll('.menu__link');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__navigation_active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__navigation_active');
  });
  if (window.innerWidth <= 768) {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('header__navigation_active');
      });
    }
  }
})();

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
