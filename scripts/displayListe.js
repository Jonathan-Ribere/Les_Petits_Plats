
// Récupération de l'élément bouton et de la liste Ingredients
const buttonIngredients = document.getElementById("buttonIngredients");
const listIngredients = document.getElementById("listIngredients");

// Récupération de l'élément bouton et de la liste Appareils
const buttonAppareils = document.getElementById("buttonAppareils");
const listAppareils = document.getElementById("listAppareils");

// Récupération de l'élément bouton et de la liste Ustensiles
const buttonUstensiles = document.getElementById("buttonUstensiles");
const listUstensiles = document.getElementById("listUstensiles");

// Création d'un tableau vide pour stocker les données du JSON
let recipes = [];

const getData = async () => {
  try {
    const response = await fetch("/data/recipes.json");
    const data = await response.json();
    recipes = data.recipes;
    return recipes;
  } catch (error) {
    console.error(error);
  }
};

const addClickHandlerToListItems = (listItems) => {
  listItems.forEach((li) => {
    li.addEventListener("click", () => {
      const searchedLi = li.textContent;
      // Générer une nouvelle recherche avec l'ingrédient cliqué
      console.log(`Nouvelle recherche pour l'ingrédient ${searchedLi}`);
    });
  });
};

const displayListeIngredients = (recipesArray) => {
  // Créer un objet pour stocker les ingrédients uniques
  const uniqueIngredients = {};

  recipesArray.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      // Vérifier si l'ingrédient est déjà présent dans l'objet des ingrédients uniques
      if (!uniqueIngredients[ingredient.ingredient.toLowerCase()]) {
        // Si l'ingrédient n'est pas déjà présent, l'ajouter à l'objet
        uniqueIngredients[ingredient.ingredient.toLowerCase()] = true;
      }
    });
  });

  // Créer un tableau des ingrédients uniques triés
  const ingredients = Object.keys(uniqueIngredients).sort();

  // Créer les éléments de la liste et les ajouter à l'élément de liste HTML
  listIngredients.innerHTML = ""; // vider la liste avant de la remplir à nouveau
  ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;

    addClickHandlerToListItems([li]); // Passer l'élément li dans un tableau

    listIngredients.appendChild(li);
  });
};


const displayListeAppareils = (recipes) => {
  // Créer un tableau pour stocker les appareils uniques
  const uniqueAppareils = {};

  // Boucler sur chaque recette pour trouver les appareils uniques
  recipes.forEach((recipe) => {
    // Si l'appareil n'existe pas encore dans le tableau des appareils uniques, l'ajouter
    if (!uniqueAppareils[recipe.appliance.toLowerCase()]) {
      uniqueAppareils[recipe.appliance.toLowerCase()] = true;
    }
  });

  // Créer un tableau des appareils uniques triés
  const appareils = Object.keys(uniqueAppareils).sort();

  // Vider la liste des appareils existants avant de la remplir à nouveau
  listAppareils.innerHTML = "";

  // Créer les éléments de la liste et les ajouter à l'élément de liste HTML
  appareils.forEach((appareil) => {
    const li = document.createElement("li");
    li.textContent = appareil;

    addClickHandlerToListItems([li]); // Passer l'élément li dans un tableau

    listAppareils.appendChild(li);
  });
};

const displayListeUstensiles = (recipesArray) => {
  // Créer un objet pour stocker les ustensiles uniques
  const uniqueUstensiles = {};

  recipesArray.forEach((recipe) => {
    recipe.ustensils.forEach((ustensile) => {
      // Vérifier si l'ustensile est déjà présent dans l'objet des ustensiles uniques
      if (!uniqueUstensiles[ustensile.toLowerCase()]) {
        // Si l'ustensile n'est pas déjà présent, l'ajouter à l'objet
        uniqueUstensiles[ustensile.toLowerCase()] = true;
      }
    });
  });

  // Créer un tableau des ustensiles uniques triés
  const ustensiles = Object.keys(uniqueUstensiles).sort();

  // Vider la liste des ustensiles existants avant de la remplir à nouveau
  listUstensiles.innerHTML = "";

  // Créer les éléments de la liste et les ajouter à l'élément de liste HTML
  ustensiles.forEach((ustensile) => {
    const li = document.createElement("li");
    li.textContent = ustensile;

    addClickHandlerToListItems([li]); // Passer l'élément li dans un tableau

    listUstensiles.appendChild(li);
  });
};


const init = async () => {
  await getData();
  if (recipes) {
    displayListeIngredients(recipes);
    displayListeAppareils(recipes);
    displayListeUstensiles(recipes);
  }
};

init();
