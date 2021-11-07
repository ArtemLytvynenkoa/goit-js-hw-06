const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueUI = document.querySelector("#value");
let counterValue = 0;

const incrementFn = () => {
    counterValue += 1;
    return updateValueUI();
};
const decrementFn = () => {
    counterValue -= 1;
    return updateValueUI();
};
const updateValueUI = () => {
    valueUI.textContent = counterValue;
 };

decrementButton.addEventListener("click", decrementFn);
incrementButton.addEventListener("click", incrementFn);