const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const onInputChanges = (element) => {
    const fontSize = element.currentTarget.value;
    
    spanEl.style.fontSize = `${fontSize}px`;
};

inputEl.addEventListener('input', onInputChanges);