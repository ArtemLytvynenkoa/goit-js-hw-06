const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const onInputChanges = (event) => {
    const textInInput = event.currentTarget.value;
    spanEl.textContent = textInInput;

    if (textInInput.length === 0) {
        spanEl.textContent = 'Anonymous';
    }
};

inputEl.addEventListener('input', onInputChanges);