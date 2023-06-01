import { getData } from "./api.js";
import { filtrerRecettes } from "./sortDisplayCard.js";

// Récupération de l'élément bouton et de la liste Ingredients
const buttonIngredients = document.getElementById("buttonIngredients");
const listIngredients = document.getElementById("listIngredients");

// Récupération de l'élément bouton et de la liste Appareils
const buttonAppareils = document.getElementById("buttonAppareils");
const listAppareils = document.getElementById("listAppareils");

// Récupération de l'élément bouton et de la liste Ustensiles
const buttonUstensiles = document.getElementById("buttonUstensiles");
const listUstensiles = document.getElementById("listUstensiles");

// Créez des variables pour stocker les valeurs actuelles des filtres
let filtreIngredients = [];
let filtreAppareils = [];
let filtreUstensiles = [];

const addFilter = (ingredient) => {
  const searchedLi = ingredient;
  filtreIngredients.push(searchedLi);
  console.log(`Nouvelle recherche pour les ingrédients ${filtreIngredients}`);
  
  const button = document.createElement("button");
  button.textContent = searchedLi;
  button.classList.add("btn", "btn-primary", "rounded-pill", "me-3");
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-times";
  button.appendChild(deleteIcon);
  document.getElementById("filtres").appendChild(button);
  
  button.addEventListener("click", () => {
    const index = filtreIngredients.indexOf(searchedLi);
    if (index > -1) {
      filtreIngredients.splice(index, 1);
    }
    console.log(`Nouvelle recherche pour les ingrédients ${filtreIngredients}`);
    button.parentNode.removeChild(button);
    filtrerRecettes(filtreIngredients, filtreAppareils, filtreUstensiles);
  });
  
  filtrerRecettes(filtreIngredients, filtreAppareils, filtreUstensiles);
};

const addAppareilFilter = (appareil) => {
  const searchedAppareil = appareil;
  filtreAppareils.push(searchedAppareil);
  console.log(`Nouvelle recherche pour les appareils ${filtreAppareils}`);
  
  const button = document.createElement("button");
  button.textContent = searchedAppareil;
  button.classList.add("btn", "btn-primary", "rounded-pill", "me-3");
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-times";
  button.appendChild(deleteIcon);
  document.getElementById("filtres").appendChild(button);
  
  button.addEventListener("click", () => {
    const index = filtreAppareils.indexOf(searchedAppareil);
    if (index > -1) {
      filtreAppareils.splice(index, 1);
    }
    console.log(`Nouvelle recherche pour les appareils ${filtreAppareils}`);
    button.parentNode.removeChild(button);
    filtrerRecettes(filtreIngredients, filtreAppareils, filtreUstensiles);
  });
  
  filtrerRecettes(filtreIngredients, filtreAppareils, filtreUstensiles);
};

const addUstensilesFilter = (ustensile) => {
  const searchedUstensile = ustensile;
  filtreUstensiles.push(searchedUstensile);
  console.log(`Nouvelle recherche pour les ustensiles ${filtreUstensiles}`);
  
  const button = document.createElement("button");
  button.textContent = searchedUstensile;
  button.classList.add("btn", "btn-primary", "rounded-pill", "me-3");
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-times";
  button.appendChild(deleteIcon);
  document.getElementById("filtres").appendChild(button);
  
  button.addEventListener("click", () => {
    const index = filtreUstensiles.indexOf(searchedUstensile);
    if (index > -1) {
      filtreUstensiles.splice(index, 1);
    }
    console.log(`Nouvelle recherche pour les ustensiles ${filtreUstensiles}`);
    button.parentNode.removeChild(button);
    filtrerRecettes(filtreIngredients, filtreAppareils, filtreUstensiles);
  });
  
  filtrerRecettes(filtreIngredients, filtreAppareils, filtreUstensiles);
};

// Fonction pour afficher la liste des ingrédients
export const displayListeIngredients = (recipesArray) => {
  const uniqueIngredients = [];

  recipesArray.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (!uniqueIngredients.includes(ingredient.ingredient.toLowerCase())) {
        uniqueIngredients.push(ingredient.ingredient.toLowerCase());
      }
    });
  });

  listIngredients.innerHTML = "";
  uniqueIngredients.sort().forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;

    li.addEventListener("click", () => {
      addFilter(ingredient);
    });

    listIngredients.appendChild(li);
  });
};

export const displayListeAppareils = (recipes) => {
  const uniqueAppareils = [];

  recipes.forEach((recipe) => {
    if (!uniqueAppareils.includes(recipe.appliance.toLowerCase())) {
      uniqueAppareils.push(recipe.appliance.toLowerCase());
    }
  });

  listAppareils.innerHTML = "";

  uniqueAppareils.sort().forEach((appareil) => {
    const li = document.createElement("li");
    li.textContent = appareil;

    li.addEventListener("click", () => {
      addAppareilFilter(appareil);
    });

    listAppareils.appendChild(li);
  });
};

export const displayListeUstensiles = (recipesArray) => {
  const uniqueUstensiles = [];

  recipesArray.forEach((recipe) => {
    recipe.ustensils.forEach((ustensile) => {
      if (!uniqueUstensiles.includes(ustensile.toLowerCase())) {
        uniqueUstensiles.push(ustensile.toLowerCase());
      }
    });
  });

  listUstensiles.innerHTML = "";

  uniqueUstensiles.sort().forEach((ustensile) => {
    const li = document.createElement("li");
    li.textContent = ustensile;

    li.addEventListener("click", () => {
      addUstensilesFilter(ustensile);
    });

    listUstensiles.appendChild(li);
  });
};


const init = async () => {
  const recipes = await getData();

  if (recipes) {
    displayListeIngredients(recipes);
    displayListeAppareils(recipes);
    displayListeUstensiles(recipes);
  }
};

init();
