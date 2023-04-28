
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
  listIngredients.innerHTML = ''; // vider la liste avant de la remplir à nouveau
  ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    listIngredients.appendChild(li);
  });
};

///////////
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
  listAppareils.innerHTML = '';

  // Créer les éléments de la liste et les ajouter à l'élément de liste HTML
  appareils.forEach((appareil) => {
    const li = document.createElement("li");
    li.textContent = appareil;
    listAppareils.appendChild(li);
  });
};


const displayListeUstensiles = () => {
  // Créer un tableau de tous les ustensiles uniques
  const allUstensiles = new Set();
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      allUstensiles.add(ustensil.toLowerCase()); // Ajouter en minuscule pour éviter les doublons
    });
  });

  // Créer les éléments de la liste et les ajouter à l'élément de liste HTML
  allUstensiles.forEach((ustensil) => {
    const li = document.createElement("li");
    li.textContent = ustensil;
    listUstensiles.appendChild(li);
  });
};




const init = async () => {
  await getData();
  if (recipes) {
    displayListeIngredients(recipes);
    displayListeAppareils(recipes);
    displayListeUstensiles();
  }
};

init();


