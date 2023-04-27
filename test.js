export const displayIngredientsList = (recipes) => {
  const ingredients = [];
  console.log("longueur", recipes.length);
  ingredients.length = 0; // vider le tableau avant de le remplir à nouveau
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j];
      console.log(ingredient);
      if (!ingredients.includes(ingredient.ingredient)) {
        ingredients.push(ingredient.ingredient);
      }
    }
  }

  const ul = document.createElement("ul");
  for (let i = 0; i < ingredients.length; i++) {
    const li = document.createElement("li");
    li.textContent = ingredients[i];
    console.log("la liste", li);
    ul.appendChild(li);
  }

  //updateIngredientsList(); // Mettre à jour la liste des ingrédients triés
  displayListeIngredients(recipes); // Mettre à jour la liste des ingrédients dans la page
  return ul;
};