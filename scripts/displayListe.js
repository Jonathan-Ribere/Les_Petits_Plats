import { getData } from "./api.js";
import { filtrerRecettes } from "./sortDisplayCard.js";

// Récupération de l'élément bouton et de la liste Ingredients
const listIngredients = document.getElementById("listIngredients");


// Récupération de l'élément bouton et de la liste Appareils
const listAppareils = document.getElementById("listAppareils");

// Récupération de l'élément bouton et de la liste Ustensiles
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
  button.classList.add("btn", "btn-primary", "rounded-sm", "me-3");
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-regular fa-circle-xmark";
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
  button.classList.add("btn", "bg-success", "text-white", "rounded-sm", "me-3");
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-regular fa-circle-xmark";
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
  button.classList.add("btn", "bg-danger", "rounded-sm", "text-white", "me-3");
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-regular fa-circle-xmark";
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
  const parentElement = document.querySelector('#listIngredients');
  parentElement.innerHTML = '';

  const uniqueIngredients = [];

  recipesArray.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (!uniqueIngredients.includes(ingredient.ingredient.toLowerCase())) {
        uniqueIngredients.push(ingredient.ingredient.toLowerCase());
      }
    });
  });

  const numColumns = 3;
  const numRows = Math.ceil(uniqueIngredients.length / numColumns);

  for (let i = 0; i < numRows; i++) {
    const row = document.createElement('div');
    row.className = 'row';

    for (let j = i * numColumns; j < (i + 1) * numColumns; j++) {
      if (j >= uniqueIngredients.length) {
        break;
      }

      const col = document.createElement('div');
      col.className = 'col';
      col.textContent = uniqueIngredients[j];

      col.addEventListener('click', () => {
        addFilter(uniqueIngredients[j]);
      });

      row.appendChild(col);
    }

    parentElement.appendChild(row);
  }
};






export const displayListeAppareils = (recipes) => {
  const parentElement = document.querySelector('#listAppareils');
  parentElement.innerHTML = '';

  const uniqueAppareils = [];

  recipes.forEach((recipe) => {
    if (!uniqueAppareils.includes(recipe.appliance.toLowerCase())) {
      uniqueAppareils.push(recipe.appliance.toLowerCase());
    }
  });

  const numColumns = 3;
  const numRows = Math.ceil(uniqueAppareils.length / numColumns);

  for (let i = 0; i < numRows; i++) {
    const row = document.createElement('div');
    row.className = 'row';

    for (let j = i * numColumns; j < (i + 1) * numColumns; j++) {
      if (j >= uniqueAppareils.length) {
        break;
      }

      const col = document.createElement('div');
      col.className = 'col';
      col.textContent = uniqueAppareils[j];

      col.addEventListener('click', () => {
        addAppareilFilter(uniqueAppareils[j]);
      });

      row.appendChild(col);
    }

    parentElement.appendChild(row);
  }
};


export const displayListeUstensiles = (recipesArray) => {
  const parentElement = document.querySelector('#listUstensiles');
  parentElement.innerHTML = '';

  const uniqueUstensiles = [];

  recipesArray.forEach((recipe) => {
    recipe.ustensils.forEach((ustensile) => {
      if (!uniqueUstensiles.includes(ustensile.toLowerCase())) {
        uniqueUstensiles.push(ustensile.toLowerCase());
      }
    });
  });

  const numColumns = 3;
  const numRows = Math.ceil(uniqueUstensiles.length / numColumns);
  const lastRowNumColumns = uniqueUstensiles.length % numColumns;

  for (let i = 0; i < numRows; i++) {
    const row = document.createElement('div');
    row.className = 'row';

    // Si c'est la dernière ligne et qu'il y a moins de 3 éléments, ajouter une classe pour aligner à gauche et au centre
    if (i === numRows - 1 && lastRowNumColumns > 0) {
      row.classList.add('justify-content-start', 'justify-content-md-center');
    }

    for (let j = i * numColumns; j < (i + 1) * numColumns; j++) {
      if (j >= uniqueUstensiles.length) {
        break;
      }

      const col = document.createElement('div');
      col.className = 'col';
      col.textContent = uniqueUstensiles[j];

      col.addEventListener('click', () => {
        addUstensilesFilter(uniqueUstensiles[j]);
      });

      row.appendChild(col);
    }

    parentElement.appendChild(row);
  }
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
