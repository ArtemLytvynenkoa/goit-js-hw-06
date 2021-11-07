const inputEl = document.querySelector("#validation-input");
const correctLengthLikeString = inputEl.getAttribute('data-length');
const correctLengthLikeNumber = Number.parseInt(correctLengthLikeString);


const onInputBlur = (event) => {
    const lengthEnteredValue = event.currentTarget.value.length;
    inputEl.classList.add('invalid');
    
    if (lengthEnteredValue === correctLengthLikeNumber) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid');
    };
};

inputEl.addEventListener('blur', onInputBlur);