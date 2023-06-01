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
let filtreUstensiles = [];
let filtreAppareils = [];

const addFilter = (ingredient) => {
  const searchedLi = ingredient;
  // Ajout de l'ingrédient cliqué au tableau filtreIngredients
  filtreIngredients.push(searchedLi);
  console.log(`Nouvelle recherche pour les ingrédients ${filtreIngredients}`);
  // Création d'un bouton pour l'ingrédient cliqué
  const button = document.createElement("button");
  button.textContent = searchedLi;
  button.classList.add("btn", "btn-primary", "rounded-pill", "me-3");
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-times";
  button.appendChild(deleteIcon);
  document.getElementById("filtres").appendChild(button);
  // Ajout d'un gestionnaire d'événements au bouton pour le supprimer
  button.addEventListener("click", () => {
    // Suppression de l'ingrédient cliqué du tableau filtreIngredients
    const index = filtreIngredients.indexOf(searchedLi);
    if (index > -1) {
      filtreIngredients.splice(index, 1);
    }
    console.log(`Nouvelle recherche pour les ingrédients ${filtreIngredients}`);
    // Suppression du bouton du DOM
    button.parentNode.removeChild(button);
    // Filtrage des recettes avec les ingrédients cliqués
    filtrerRecettes(filtreIngredients, filtreAppareils);
  });
  // Filtrage des recettes avec les ingrédients cliqués
  filtrerRecettes(filtreIngredients, filtreAppareils);
};

const addAppareilFilter = (appareil) => {
  const searchedAppareil = appareil;
  // Ajout de l'appareil cliqué au tableau filtreAppareils
  filtreAppareils.push(searchedAppareil);
  console.log(`Nouvelle recherche pour les appareils ${filtreAppareils}`);
  // Création d'un bouton pour l'appareil cliqué
  const button = document.createElement("button");
  button.textContent = searchedAppareil;
  button.classList.add("btn", "btn-primary", "rounded-pill", "me-3");
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-times";
  button.appendChild(deleteIcon);
  document.getElementById("filtres").appendChild(button);
  // Ajout d'un gestionnaire d'événements au bouton pour le supprimer
  button.addEventListener("click", () => {
    // Suppression de l'appareil cliqué du tableau filtreAppareils
    const index = filtreAppareils.indexOf(searchedAppareil);
    if (index > -1) {
      filtreAppareils.splice(index, 1);
    }
    console.log(`Nouvelle recherche pour les appareils ${filtreAppareils}`);
    // Suppression du bouton du DOM
    button.parentNode.removeChild(button);
    // Filtrage des recettes avec les appareils cliqués
    filtrerRecettes(filtreIngredients, filtreAppareils);
  });
  // Filtrage des recettes avec les appareils cliqués
  filtrerRecettes(filtreIngredients, filtreAppareils);
};

// Fonction pour afficher la liste des ingrédients
export const displayListeIngredients = (recipesArray) => {
  // Créer un tableau pour stocker les ingrédients uniques
  const uniqueIngredients = [];

  recipesArray.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      // Vérifier si l'ingrédient est déjà présent dans le tableau des ingrédients uniques
      if (!uniqueIngredients.includes(ingredient.ingredient.toLowerCase())) {
        // Si l'ingrédient n'est pas déjà présent, l'ajouter au tableau
        uniqueIngredients.push(ingredient.ingredient.toLowerCase());
      }
    });
  });

  // Créer les éléments de la liste et les ajouter à l'élément de liste HTML
  listIngredients.innerHTML = ""; // vider la liste avant de la remplir à nouveau
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
  // Créer un tableau pour stocker les ustensiles uniques
  const uniqueUstensiles = [];

  recipesArray.forEach((recipe) => {
    recipe.ustensils.forEach((ustensile) => {
      // Vérifier si l'ustensile est déjà présent dans le tableau des ustensiles uniques
      if (!uniqueUstensiles.includes(ustensile.toLowerCase())) {
        // Si l'ustensile n'est pas déjà présent, l'ajouter au tableau
        uniqueUstensiles.push(ustensile.toLowerCase());
      }
    });
  });

  // Trier le tableau des ustensiles uniques
  const ustensiles = uniqueUstensiles.sort();

  // Vider la liste des ustensiles existants avant de la remplir à nouveau
  listUstensiles.innerHTML = "";

  // Créer les éléments de la liste et les ajouter à l'élément de liste HTML
  ustensiles.forEach((ustensile) => {
    const li = document.createElement("li");
    li.textContent = ustensile;

    li.addEventListener("click", () => {
      addFilter(ustensile); // Appeler la fonction addFilter en passant l'ustensile cliqué
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
