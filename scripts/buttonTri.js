// Récupération de l'élément bouton et de la liste
const buttonUstensiles = document.getElementById("buttonUstensiles");
const listUstensiles = document.getElementById("listUstensiles");

// Création d'un tableau vide pour stocker les données du JSON
let recipes = [];

async function getData() {
  try {
    const response = await fetch("/data/recipes.json");
    const data = await response.json();
    recipes = data.recipes;
    return recipes;
  } catch (error) {
    console.error(error);
  }
}

function displayListeUstensiles (){
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
}

async function init() {
  // Récupérer les données de JSON
  await getData();

  displayListeUstensiles()
}

init();