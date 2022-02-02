const musicContainer = document.querySelector('body');
const musicCard = document.querySelector('.music-card');
const playBtn = document.querySelector('.play-button');
const music = document.querySelector('.music-container');
const backwardBtn = document.querySelector('.backward-button');
const forwardBtn = document.querySelector('.forward-button');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const singer = document.querySelector('.singer-name');
const songTitle = document.querySelector('.song-title');
const durationTime = document.querySelector('.durationTime');
const currentTimes = document.querySelector('.currentTime');
console.log(currentTimes);

// Song title

const songs = ["Don't Hurt Yourself", "Don't Start Now", 'Highway Love'];
const singers = ['Beyonce', 'Dua Lipa', 'IVOXYGEN'];
const covers = ['lemonade', 'dontstartnow', 'higwaylove'];
let songIndex = 0;

function loadSong(song) {
  songTitle.innerHTML = song;
  singer.innerHTML = singers[songIndex];
  audio.src = `assets/audio/${song}.mp3`;
  musicCard.style.background = `url(./assets/img/${covers[songIndex]}.png) top no-repeat`;
  musicContainer.style.background = `url(./assets/img/${covers[songIndex]}.png) `;
  musicContainer.style.backgroundSize = `100%`;
  musicContainer.style.backgroundPosition = `center`;
  musicContainer.style.backgroundRepeat = `no-repeat`;
  musicContainer.style.height = `100vh`;
}

loadSong(songs[songIndex]);

function playSong() {
  const play = document.querySelector('.play');
  play.src = `assets/svg/pause.svg`;
  musicCard.classList.add('player');

  audio.play();
}

function pauseSong() {
  const play = document.querySelector('.play');
  play.src = `assets/svg/play.svg`;
  musicCard.classList.remove('player');

  audio.pause();
}

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function updateProgress(event) {
  const { duration, currentTime } = event.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  let cs = parseInt(audio.currentTime % 60);
  let cm = parseInt((audio.currentTime / 60) % 60);
  currentTimes.innerHTML = `${cm}:${cs}`;
}

function setProgress(event) {
  const width = this.clientWidth;
  const clickX = event.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

audio.onloadeddata = function () {
  progress.max = audio.duration;
  let ds = parseInt(audio.duration % 60);
  let dm = parseInt((audio.duration / 60) % 60);
  durationTime.innerHTML = `${dm}:${ds}`;
};

// event listeners

playBtn.addEventListener('click', () => {
  const isPlaying = musicCard.classList.contains('player');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

backwardBtn.addEventListener('click', prevSong);
forwardBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);
