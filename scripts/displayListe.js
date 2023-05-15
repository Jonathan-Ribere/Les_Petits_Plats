import {getData} from "./api.js"

// Récupération de l'élément bouton et de la liste Ingredients
const buttonIngredients = document.getElementById("buttonIngredients");
const listIngredients = document.getElementById("listIngredients");

// Récupération de l'élément bouton et de la liste Appareils
const buttonAppareils = document.getElementById("buttonAppareils");
const listAppareils = document.getElementById("listAppareils");

// Récupération de l'élément bouton et de la liste Ustensiles
const buttonUstensiles = document.getElementById("buttonUstensiles");
const listUstensiles = document.getElementById("listUstensiles");


const addClickHandlerToListItems = (listItems) => {
  listItems.forEach((li) => {
    li.addEventListener("click", () => {
      const searchedLi = li.textContent;
      // Générer une nouvelle recherche avec l'ingrédient cliqué
      console.log(`Nouvelle recherche pour l'ingrédient ${searchedLi}`);
      
    });
  });
};

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

    addClickHandlerToListItems([li]); // Passer l'élément li dans un tableau

    listIngredients.appendChild(li);
  });
};



export const displayListeAppareils = (recipes) => {
  // Créer un tableau pour stocker les appareils uniques
  const uniqueAppareils = [];

  // Boucler sur chaque recette pour trouver les appareils uniques
  recipes.forEach((recipe) => {
    // Vérifier si l'appareil est déjà présent dans le tableau des appareils uniques
    if (!uniqueAppareils.includes(recipe.appliance.toLowerCase())) {
      // Si l'appareil n'est pas déjà présent, l'ajouter au tableau
      uniqueAppareils.push(recipe.appliance.toLowerCase());
    }
  });

  // Créer un tableau des appareils uniques triés
  const appareils = uniqueAppareils.sort();

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

    addClickHandlerToListItems([li]); // Passer l'élément li dans un tableau

    listUstensiles.appendChild(li);
  });
};



const init = async () => {
  const recipes = await getData()
  
  if (recipes) {
    displayListeIngredients(recipes);
    displayListeAppareils(recipes);
    displayListeUstensiles(recipes);
  }
};

init();
