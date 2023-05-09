export const sortDisplayIngredientsList = (recipes) => {
  const ingredients = {};
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j];
      if (!ingredients[ingredient.ingredient]) {
        ingredients[ingredient.ingredient] = true;
      }
    }
  }

  displayListeIngredients(recipes); // Mettre à jour la liste des ingrédients dans la page
};

export const sortDisplayAppliancesList = (recipes) => {
  const appliances = {};
  for (const recipe of recipes) {
    const appliance = recipe.appliance;
    if (!appliances[appliance]) {
      appliances[appliance] = true;
    }
  }

  displayListeAppareils(recipes); // Mettre à jour la liste des appareils dans la page
};

export const sortDisplayUstensilsList = (recipes) => {
  //console.log("je suis la ");
  const ustensils = {};
  for (const recipe of recipes) {
    for (const ustensil of recipe.ustensils) {
      //console.log(ustensil);
      if (!ustensils[ustensil]) {
        ustensils[ustensil] = true;
      }
    }
  }
  displayListeUstensiles(recipes); // Mettre à jour la liste des ustensiles dans la page
};