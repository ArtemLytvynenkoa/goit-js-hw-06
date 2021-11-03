const listEl = document.querySelector('#categories');

const numOfCategories = listEl.children.length;

console.log(`Number of categories: ${numOfCategories}`);


const allItemEl = document.querySelectorAll('.item');

allItemEl.forEach(element => {
    const firstChildOfElement = element.firstElementChild.textContent;

    console.log(`Category: ${firstChildOfElement}`);

    const numOfElements = element.lastElementChild.querySelectorAll('li').length;

    console.log(`Elements: ${numOfElements}`);

});