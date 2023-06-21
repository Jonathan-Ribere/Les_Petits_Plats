import { getData } from "./api.js";
import { filtrerRecettes } from "./sortDisplayCard.js";

// Créez des variables pour stocker les valeurs actuelles des filtres
let filtreIngredients = [];
let filtreAppareils = [];
let filtreUstensiles = [];

const addFilter = (ingredient) => {
  const searchedLi = ingredient;
  filtreIngredients.push(searchedLi);
  const button = document.createElement("button");
  button.textContent = searchedLi;
  button.classList.add("btn", "btn-primary", "rounded-sm", "me-3");
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-regular fa-circle-xmark";
  button.appendChild(deleteIcon);
  document.getElementById("filtres").appendChild(button);
  button.addEventListener("click", () => {
    // Ajoute un écouteur d'événement "click" au bouton
    const index = filtreIngredients.indexOf(searchedLi);
    // Recherche l'index de l'élément "searchedLi" dans le tableau "filtreIngredients"
    if (index > -1) {
      // Vérifie si l'index de l'élément est trouvé 
      filtreIngredients.splice(index, 1);
      // Supprime l'élément à l'index spécifié du tableau "filtreIngredients"
    }

    button.parentNode.removeChild(button);
    // Supprime le bouton lui-même de son parent
    filtrerRecettes(filtreIngredients, filtreAppareils, filtreUstensiles);
    // Appelle la fonction "filtrerRecettes" en lui passant les tableaux "filtreIngredients", "filtreAppareils" et "filtreUstensiles" en tant qu'arguments
  });

  filtrerRecettes(filtreIngredients, filtreAppareils, filtreUstensiles);
  // Appelle la fonction "filtrerRecettes" en lui passant les tableaux "filtreIngredients", "filtreAppareils" et "filtreUstensiles" en tant qu'arguments

};

const addAppareilFilter = (appareil) => {
  const searchedAppareil = appareil;
  filtreAppareils.push(searchedAppareil);
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
    button.parentNode.removeChild(button);
    filtrerRecettes(filtreIngredients, filtreAppareils, filtreUstensiles);
  });

  filtrerRecettes(filtreIngredients, filtreAppareils, filtreUstensiles);
};

const addUstensilesFilter = (ustensile) => {
  const searchedUstensile = ustensile;
  filtreUstensiles.push(searchedUstensile);
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
    button.parentNode.removeChild(button);
    filtrerRecettes(filtreIngredients, filtreAppareils, filtreUstensiles);
  });

  filtrerRecettes(filtreIngredients, filtreAppareils, filtreUstensiles);
};

// Fonction pour afficher la liste des ingrédients
export const displayListeIngredients = (recipesArray) => {
  const parentElement = document.querySelector("#listIngredients");
  parentElement.innerHTML = "";
  // Sélectionne l'élément parent dans le document HTML où la liste d'ingrédients sera affichée
  // Ensuite, vide le contenu de cet élément

  const uniqueIngredients = [];
  // Déclare un tableau vide pour stocker les ingrédients uniques

  recipesArray.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (!uniqueIngredients.includes(ingredient.ingredient.toLowerCase())) {
        uniqueIngredients.push(ingredient.ingredient.toLowerCase());
      }
    });
  });
  // Parcourt chaque recette dans le tableau "recipesArray"
  // Pour chaque recette, parcourt les ingrédients de cette recette
  // Vérifie si l'ingrédient n'est pas déjà présent dans le tableau des ingrédients uniques
  // Si ce n'est pas le cas, ajoute l'ingrédient (en minuscules) au tableau des ingrédients uniques

  const numColumns = 3;

  // Math.ceil() arrondit un nombre à l'entier supérieur le plus proche.
  const numRows = Math.ceil(uniqueIngredients.length / numColumns);
  // Définit le nombre de colonnes et le nombre de lignes nécessaires en fonction de la longueur du tableau des ingrédients uniques

  for (let i = 0; i < numRows; i++) {
    const row = document.createElement("div");
    row.className = "row";
    // Crée un élément div pour chaque ligne et lui attribue la classe "row"

    for (let j = i * numColumns; j < (i + 1) * numColumns; j++) {
      if (j >= uniqueIngredients.length) {
        break;
      }
      // Boucle à travers chaque colonne dans la ligne
      // Si l'index dépasse la longueur du tableau des ingrédients uniques, sort de la boucle

      const col = document.createElement("div");
      col.className = "col";
      col.textContent = uniqueIngredients[j];
      // Crée un élément div pour chaque colonne et lui attribue la classe "col"
      // Définit le texte de chaque colonne avec un ingrédient unique à l'index j du tableau des ingrédients uniques

      col.addEventListener("click", () => {
        addFilter(uniqueIngredients[j]);
      });
      // Ajoute un écouteur d'événement "click" à chaque colonne
      // Lorsque la colonne est cliquée, la fonction "addFilter" est appelée avec l'ingrédient unique correspondant à l'index j

      row.appendChild(col);
      // Ajoute la colonne à la ligne
    }

    parentElement.appendChild(row);
    // Ajoute la ligne à l'élément parent sélectionné précédemment
  }
};

export const displayListeAppareils = (recipes) => {
  const parentElement = document.querySelector("#listAppareils");
  parentElement.innerHTML = "";

  const uniqueAppareils = [];

  recipes.forEach((recipe) => {
    if (!uniqueAppareils.includes(recipe.appliance.toLowerCase())) {
      uniqueAppareils.push(recipe.appliance.toLowerCase());
    }
  });

  const numColumns = 3;
  const numRows = Math.ceil(uniqueAppareils.length / numColumns);

  for (let i = 0; i < numRows; i++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let j = i * numColumns; j < (i + 1) * numColumns; j++) {
      if (j >= uniqueAppareils.length) {
        break;
      }

      const col = document.createElement("div");
      col.className = "col";
      col.textContent = uniqueAppareils[j];

      col.addEventListener("click", () => {
        addAppareilFilter(uniqueAppareils[j]);
      });

      row.appendChild(col);
    }

    parentElement.appendChild(row);
  }
};

export const displayListeUstensiles = (recipesArray) => {
  const parentElement = document.querySelector("#listUstensiles");
  parentElement.innerHTML = "";

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
    const row = document.createElement("div");
    row.className = "row";

    // Si c'est la dernière ligne et qu'il y a moins de 3 éléments, ajouter une classe pour aligner à gauche et au centre
    if (i === numRows - 1 && lastRowNumColumns > 0) {
      row.classList.add("justify-content-start", "justify-content-md-center");
    }

    for (let j = i * numColumns; j < (i + 1) * numColumns; j++) {
      if (j >= uniqueUstensiles.length) {
        break;
      }

      const col = document.createElement("div");
      col.className = "col";
      col.textContent = uniqueUstensiles[j];

      col.addEventListener("click", () => {
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
