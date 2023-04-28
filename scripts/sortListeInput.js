export const displayIngredientsList = (recipes) => {
  const ingredients = {};
  //console.log("longueur", recipes.length);
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j];
      //console.log(ingredient);
      if (!ingredients[ingredient.ingredient]) {
        ingredients[ingredient.ingredient] = true;
      }
    }
  }

  const ul = document.createElement("ul");
  for (let ingredient in ingredients) {
    const li = document.createElement("li");
    li.textContent = ingredient;
   //console.log("la liste", li);
    ul.appendChild(li);
  }

  displayListeIngredients(recipes); // Mettre à jour la liste des ingrédients dans la page
  return ul;
};

export const displayAppliancesList = (recipes) => {
  const appliances = {};
  console.log(appliances);
  for (const recipe of recipes) {
    const appliance = recipe.appliance;
    if (!appliances[appliance]) {
      appliances[appliance] = true;
    }
  }

  const ul = document.createElement("ul");
  for (const appliance in appliances) {
    const li = document.createElement("li");
    console.log(li);
    li.textContent = appliance;
    ul.appendChild(li);
  }
 

  displayListeAppareils(recipes); // Mettre à jour la liste des appareils dans la page
  return ul;
};