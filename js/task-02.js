const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const recipeListEl = document.querySelector('#ingredients');

// const itemsOfIngredients = ingredients.map(ingredient => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient;
//   itemEl.classList.add('item');

//   return itemEl;
// })

const makeItemsOfIngredients = array => {
  return array.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');

    return itemEl;
  });
};

const elements = makeItemsOfIngredients(ingredients);

recipeListEl.append(...elements);
