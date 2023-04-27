//import { getData } from "./api.js";

const searchInput = document.querySelector("#search-input");
const articlesContainer = document.querySelector("#section");

let articles = [];

// Utiliser une fonction fléchée pour rendre la syntaxe plus concise
const sortArticles = (articles) => {
const searchValue = searchInput.value.toLowerCase();
return articles.filter((article) => {
// Utiliser la décomposition pour accéder aux propriétés de l'article
const { appliance, name, description } = article;
return (
appliance.toLowerCase().includes(searchValue) ||
name.toLowerCase().includes(searchValue) ||
description.toLowerCase().includes(searchValue)
);
});
};

// Utiliser la syntaxe de destructuration pour rendre le code plus lisible
export const displayIngredientsList = (recipes) => {
  // On crée un tableau qui contiendra tous les ingrédients
  const ingredients = [];
console.log("longeur", recipes.length);
  // On parcourt chaque recette
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
   
    // On parcourt chaque ingrédient de la recette
    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j];
      // On ajoute l'ingrédient à notre tableau s'il n'y est pas déjà
      if (!ingredients.includes(ingredient.ingredient)) {
        ingredients.push(ingredient.ingredient);
      }
    }
  }

  // On crée une liste HTML avec les ingrédients
  const ul = document.createElement("ul");
  for (let i = 0; i < ingredients.length; i++) {
    const li = document.createElement("li");
    li.textContent = ingredients[i];
    ul.appendChild(li);
  }

  // On affiche la liste dans la page
  return ul;
};
/*
const displayArticles = (articles) => {
// Utiliser innerHTML pour effacer le contenu de l'élément
articlesContainer.innerHTML = "";
for (const article of articles) {
const { name, time, description, recipes } = article;
const articleElement = document.createElement("article");
articleElement.classList.add("article");
articlesContainer.appendChild(articleElement);

const imgCard = document.createElement("div");
imgCard.classList.add("imgArticle");
articleElement.appendChild(imgCard);

const txtCard = document.createElement("div");
txtCard.classList.add("txtArticle");
articleElement.appendChild(txtCard);

const headerCard = document.createElement("div");
headerCard.classList.add("headerCard");
txtCard.appendChild(headerCard);

const nameMenu = document.createElement("div");
nameMenu.classList.add("nomMenu");
nameMenu.innerHTML = `<h2>${name}</h2>`;
headerCard.appendChild(nameMenu);

const timeElement = document.createElement("div");
timeElement.classList.add("nomMenu");
headerCard.appendChild(timeElement);

const svgTime = document.createElement("img");
const svg = "../Picture/time.svg";
svgTime.setAttribute("src", svg);
svgTime.classList.add("svgTime");
timeElement.appendChild(svgTime);

const timePreparation = document.createElement("span");
timePreparation.classList.add("timePreparation");
timePreparation.innerHTML = `<p>${time} min</p>`;
timeElement.appendChild(timePreparation);

const mainCard = document.createElement("div");
mainCard.classList.add("mainCard");
txtCard.appendChild(mainCard);

const divUl = document.createElement("div");
divUl.classList.add("divUl");
mainCard.appendChild(divUl);

const ul = displayIngredientsList(recipes);
ul.classList.add("ulList");
divUl.appendChild(ul);

const prepa = document.createElement("div");
prepa.classList.add("prepa");
mainCard.appendChild(prepa);

const prepaRecette = document.createElement("p");
prepaRecette.classList.add("recette");
prepaRecette.innerHTML = `<p>${description}</p>`;
prepa.appendChild(prepaRecette);

  };
};*/
/*
// Utiliser async/await pour simplifier la gestion des promesses
const fetchArticles = async () => {
  try {
  const data = await getData();
  articles = data;
  displayArticles(articles);
  } catch (error) {
  console.log(error);
  }
  };*/
  /*
  // Utiliser la méthode addEventListener pour détecter les événements sur l'input
  searchInput.addEventListener("input", () => {
  const sortedArticles = sortArticles(articles);
  displayArticles(sortedArticles);
  });

  fetchArticles();


*/


/*
const tableau = await getData()
console.log(tableau);

const resultArray = [];


// Ajouter un événement qui se déclenche à chaque fois que l'utilisateur entre du texte dans le champ de recherche
searchInput.addEventListener("input", function (event) {
  // Récupérer le texte entré dans le champ de recherche et le mettre en minuscule
  let searchValue = event.target.value.toLowerCase();

  // Si la longueur du texte entré est supérieure ou égale à 3 caractères
  if (searchValue.length >= 3) {
    // Afficher un message dans la console pour indiquer que la recherche est en cours
    console.log("Recherche en cours pour : " + searchValue);

    for (let i = 0; i < tableau.length; i++) {
      const obj = tableau[i];
      console.log(obj);
      if (obj.appliance === searchValue) {
        console.log(obj.appliance);
        resultArray.push(obj);
      }
    }
    
    console.log(resultArray); }})
*/
