const cards = [...document.querySelectorAll('.card')];
const playerTryCount = document.querySelector('.tries');
const timer = document.querySelector('.timer');
const resetBtn = document.querySelector('.reset');
let playerTry = 0;
let isFlipCard = false,
  firstCard,
  secondCard,
  boardLocked = false;
const playBtn = document.querySelector('.play');
let isPlay = false,
  music,
  flip;

window.onload = () => {
  const flipCard = (event) => {
    if (boardLocked) return;
    const target = event.currentTarget;

    if (boardLocked) return;
    target.classList.add('flip');

    if (!isFlipCard) {
      isFlipCard = true;
      firstCard = target;
      flip.play();
    } else {
      isFlipCard = false;
      secondCard = target;
      checkAnimals();
    }

    setTimeout(() => {
      flip.play();
    }, 200);

    const matchedCard = document.getElementsByClassName('flip');

    if (matchedCard.length === 20) {
      setTimeout(() => {
        createLi();
        showModal();
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
      }, 500);
    });
    resetTryes();
    resetTimer();
    cards.forEach((item) => {
      item.addEventListener('click', flipCard);
    });
    setTimeout(randomOrder, 1000);
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

  resetBtn.addEventListener('click', restart);

  // leader-board
  let leader = [];
  const orderList = document.querySelector('.order-list');
  const createLi = () => {
    const li = document.createElement('li');
    li.className = 'board__score';
    li.textContent = `moves:${playerTry} time:${minutes}:${seconds}`;
    let temp = localStorage.getItem('score-agera');
    leader = JSON.parse(temp) || [];
    leader.push({ moves: playerTry, time: `${minutes}:${seconds}` });
    orderList.append(li);
    sortByMoves(leader);
    localStorage.setItem('score-agera', JSON.stringify(leader));
  };

  function sortByMoves(arr) {
    arr.sort((a, b) => (a.moves > b.moves ? 1 : -1));
  }

  // localStorage
  function showResult() {
    let temp = localStorage.getItem('score-agera');
    let result = JSON.parse(temp) || [];
    result.forEach((item, index) => {
      if (index < 10) {
        const li = document.createElement('li');
        li.className = 'board__score';
        li.textContent = `moves:${item.moves} time:${item.time}`;
        orderList.append(li);
      }
    });
  }
  showResult();

  // modal

  const modalClose = document.querySelector('.modal__close');
  const modal = document.querySelector('.modal');
  const modalTitle = document.querySelector('.modal__title');
  const modalOverlay = document.querySelector('.modal__overlay');

  const closeModal = () => {
    modal.style.display = 'none';
    document.location.reload();
  };

  modal.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeModal();
    }
  });

  const showModal = () => {
    modal.style.display = 'block';
    createTitle();
  };

  const createTitle = () => {
    const title = document.createElement('h3');
    title.className = 'modal-sub-title';
    title.textContent = `It took you ${playerTry} moves and time: ${minutes}:${seconds}`;
    modalTitle.after(title);
  };

  const repeatBtn = document.querySelector('.repeat-button');

  modalClose.addEventListener('click', closeModal);
  repeatBtn.addEventListener('click', closeModal);

  // music

  const createMusic = () => {
    music = new Audio();
    music.src = './assets/audio/thememusic.mp3';
    music.loop = true;
    music.volume = 0.3;
    flip = new Audio();
    flip.src = './assets/audio/cardflip.mp3';
    flip.volume = 0.1;
  };

  function playMusic() {
    if (isPlay) {
      music.pause();
      isPlay = false;
      playBtn.firstElementChild.href.baseVal = './assets/sprite.svg#play';
    } else {
      music.play();
      isPlay = true;
      playBtn.firstElementChild.href.baseVal = './assets/sprite.svg#pause';
    }
  }

  playBtn.addEventListener('click', playMusic);
  createMusic();

  // information btn

  const inforamtionBtn = document.querySelector('.information-btn');
  const modalInformation = document.querySelector('.modal-information');
  const modalCloseInformation = document.querySelector('.modal__close-information');

  const showModalInformation = () => {
    modalInformation.style.display = 'block';
    flip.play();
  };

  const closeModalInformation = () => {
    modalInformation.style.display = 'none';
    flip.play();
  };

  modalInformation.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      closeModalInformation();
    }
  });

  inforamtionBtn.addEventListener('click', showModalInformation);
  modalCloseInformation.addEventListener('click', closeModalInformation);
};
