const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const onInputChanges = (event) => {
    spanEl.textContent = event.currentTarget.value;
};

inputEl.addEventListener('input', onInputChanges);