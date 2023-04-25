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
  // Créer un tableau de tous les Ingredients uniques
  const allIngredients = new Set();
  recipesArray.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      allIngredients.add(ingredient.ingredient.toLowerCase()); // Ajouter en minuscule pour éviter les doublons
    });
  });

  // Créer les éléments de la liste et les ajouter à l'élément de liste HTML
  allIngredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    listIngredients.appendChild(li);
  });
};

const displayListeAppareils = () => {
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

/*
// Fonction qui affiche le texte du li dans la console
const afficherTexte = (event) => {
    console.log(event.target.textContent);
  };
  
  // Ajouter un gestionnaire d'événements "click" à chaque élément de liste
  listIngredients.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", afficherTexte);
  });
  
  listAppareils.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", afficherTexte);
  });
  
  listUstensiles.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", afficherTexte);
  });
  */


const init = async () => {
  await getData();
  displayListeIngredients(recipes);
  displayListeAppareils();
  displayListeUstensiles();
};

init();
