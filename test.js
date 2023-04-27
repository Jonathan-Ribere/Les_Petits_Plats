export const displayIngredientsList = (recipes) => {
  const ingredients = {};
  console.log("longueur", recipes.length);
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j];
      console.log(ingredient);
      if (!ingredients[ingredient.ingredient]) {
        ingredients[ingredient.ingredient] = true;
      }
    }
  }

  const ul = document.createElement("ul");
  for (let ingredient in ingredients) {
    const li = document.createElement("li");
    li.textContent = ingredient;
    console.log("la liste", li);
    ul.appendChild(li);
  }

  //updateIngredientsList(); // Mettre à jour la liste des ingrédients triés
  displayListeIngredients(recipes); // Mettre à jour la liste des ingrédients dans la page
  return ul;
};