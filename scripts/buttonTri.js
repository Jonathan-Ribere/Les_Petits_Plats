
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
const updateIngredientsList = async () => {
  const data = await getData();
  displayListeIngredients(data);
};
///////////
const displayListeAppareils = (recipesArray) => {
    // Créer un objet pour stocker les ingrédients uniques
    const uniqueAppareils = {};
  // Créer un tableau de tous les Appareils uniques
  const allAppareils = new Set();
  recipes.forEach((recipe) => {
    allAppareils.add(recipe.appliance.toLowerCase()); // Ajouter en minuscule pour éviter les doublons
  });

  // Créer les éléments de la liste et les ajouter à l'élément de liste HTML
  allAppareils.forEach((appareil) => {
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
    displayListeAppareils();
    displayListeUstensiles();
  }
};

init();


