function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const spanEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

const onBackgroundBodyClick = () => {
  body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = `${body.style.backgroundColor}`;
};


buttonEl.addEventListener('click', onBackgroundBodyClick);