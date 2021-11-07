function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const container = document.querySelector('#boxes');



const onInputChange = () => {
  return inputEl.value;
};

const onButtonCreateClick = () => {
  const containerElements = [];
  let boxWidth = 20;
  let boxHeight = 20;

  for (let i = 0; i < onInputChange(); i += 1) {
    boxWidth += 10;
    boxHeight += 10;
    containerElements.push(`<div style = "background-color: ${getRandomHexColor()}; width: ${boxWidth}px; height: ${boxHeight}px"></div>`);
  }

  container.insertAdjacentHTML('afterbegin', containerElements.join(' '));

};

const onButtonDestroyClick = () => {
  container.innerHTML = '';
  inputEl.value = 0;
};

inputEl.addEventListener('change', onInputChange);
createButton.addEventListener('click', onButtonCreateClick);
destroyButton.addEventListener('click', onButtonDestroyClick);