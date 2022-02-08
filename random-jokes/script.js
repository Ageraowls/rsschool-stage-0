const url = 'https://type.fit/api/quotes';

const text = document.querySelector('.quote-text');
const author = document.querySelector('.quote-author');
const btn = document.querySelector('.generate-button');

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  let random = data[Math.floor(Math.random() * data.length)];
  text.textContent = random.text;
  author.textContent = random.author;
  if (random.author == null) {
    author.textContent = 'unknown author';
  }
}
getData();
btn.addEventListener('click', getData);
