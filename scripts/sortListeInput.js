export const sortDisplayIngredientsList = (recipes) => {
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

  displayListeIngredients(recipes); // Mettre à jour la liste des ingrédients dans la page

};

export const sortDisplayAppliancesList = (recipes) => {
  const appliances = {};
  console.log(appliances);
  for (const recipe of recipes) {
    const appliance = recipe.appliance;
    if (!appliances[appliance]) {
      appliances[appliance] = true;
    }
  }
 
  displayListeAppareils(recipes); // Mettre à jour la liste des appareils dans la page

};