const cards = [...document.querySelectorAll('.card')];
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
  };

  const checkAnimals = () => {
    const isEqual = firstCard.dataset.animal === secondCard.dataset.animal;

    isEqual ? disableCards() : unFlipCards();
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
    }, 1000);
  }

  const resetBoard = () => {};

  cards.forEach((item) => {
    item.addEventListener('click', flipCard);

    const randomPlace = Math.floor(Math.random() * cards.length);
    item.style.order = randomPlace;
  });
};
