const cards = [...document.querySelectorAll('.card')];
const playerTryCount = document.querySelector('.tries');
const timer = document.querySelector('.timer');
let playerTry = 0;
let isFlipCard = false,
  firstCard,
  secondCard,
  boardLocked = false;

window.onload = () => {
  const flipCard = (event) => {
    if (boardLocked) return;
    const target = event.currentTarget;

    if (boardLocked) return;
    target.classList.add('flip');

    if (!isFlipCard) {
      isFlipCard = true;
      firstCard = target;
    } else {
      isFlipCard = false;
      secondCard = target;
      checkAnimals();
    }

    const matchedCard = document.getElementsByClassName('flip');

    if (matchedCard.length === 20) {
      setTimeout(() => {
        playerTry = 0;
        playerTryCount.textContent = playerTry;
        restart();
      }, 1000);
    }
  };

  const checkAnimals = () => {
    const isEqual = firstCard.dataset.animal === secondCard.dataset.animal;

    isEqual ? disableCards() : unFlipCards();
    countTries();
  };

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  }

  function unFlipCards() {
    boardLocked = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      boardLocked = false;
      resetBoard();
    }, 1000);
  }

  const countTries = () => {
    setTimeout(() => {
      playerTry++;
      playerTryCount.textContent = playerTry;
    }, 500);
    if (playerTry === 0) {
      seconds = 0;
      minutes = 0;
      hours = 0;
      startTimer();
    }
  };

  const resetTryes = () => {
    playerTry = 0;
    playerTryCount.textContent = playerTry;
  };

  const randomOrder = () => {
    cards.forEach((item) => {
      const randomPlace = Math.floor(Math.random() * cards.length);
      item.style.order = randomPlace;
    });
  };

  const resetBoard = () => {
    isFlipCard = boardLocked = false;
    firstCard = secondCard = null;
  };

  cards.forEach((item) => {
    item.addEventListener('click', flipCard);

    randomOrder();
  });

  // restart game

  const restart = (event) => {
    cards.forEach((item, index) => {
      setTimeout(() => {
        cards[index].classList.remove('flip');
      }, 2000);
    });
    resetTryes();
    resetTimer();
    cards.forEach((item) => {
      item.addEventListener('click', flipCard);
    });
    setTimeout(randomOrder, 2100);
  };

  // timer

  let seconds = 0,
    minutes = 0,
    hours = 0,
    interval;

  timer.style.fontWeight = '900';

  timer.innerHTML = `${minutes} min ${seconds} sec`;
  const startTimer = () => {
    interval = setInterval(() => {
      timer.innerHTML = `${minutes} min ${seconds} sec`;
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
    }, 1000);
  };

  const resetTimer = () => {
    let seconds = 0;
    minutes = 0;
    hours = 0;
    let timer = document.querySelector('.timer');
    timer.innerHTML = '0 min 0 sec';
    clearInterval(interval);
  };
};
