import { getData } from "./api.js";
import { displayIngredientsList } from "../test.js"

// Récupère l'input de recherche et le conteneur des articles
let searchInput = document.querySelector("#search-input");
const articlesContainer = document.querySelector("#section");
let articles = [];

// Récupère les données depuis l'API et affiche les articles
getData().then((data) => {
  articles = data;
  console.log(articles);
  displayArticles(articles);
});

// Cette fonction trie et affiche les articles en fonction de la valeur de recherche entrée
const sortAndDisplayArticles = (articles) => {
  // Convertit la valeur de recherche entrée dans la barre de recherche en minuscules
  const searchValue = searchInput.value.toLowerCase();

  // Initialise un tableau pour stocker les articles triés
  let sortedArticles;

  // Si la valeur de recherche contient au moins 3 caractères, trie les articles en fonction de la valeur de recherche
  if (searchValue.length >= 3) {
    sortedArticles = articles.filter((article) => {
      // Convertit les noms d'ingrédients en minuscules et stocke-les dans un tableau
      const ingredients = article.ingredients.map((ingredient) =>
        ingredient.ingredient.toLowerCase()
      );
     // console.log(ingredients);
      // Vérifie si la valeur de recherche correspond à un nom d'ingrédient, au nom ou à la description de l'article
      return (
        ingredients.includes(searchValue) ||
        article.name.toLowerCase().includes(searchValue) ||
        article.description.toLowerCase().includes(searchValue)
      );
    });
  }
  // Sinon, affiche tous les articles
  else {
    sortedArticles = articles;
  }

  // Affiche les articles triés ou tous les articles si la valeur de recherche ne contient pas au moins 3 caractères
  displayArticles(sortedArticles);
  displayIngredientsList(sortedArticles)
};

searchInput.addEventListener("input", () => {
  sortAndDisplayArticles(articles);
});

// Affiche les articles dans le conteneur prévu à cet effet
const displayArticles = (articles) => {
  articlesContainer.innerHTML = "";
  articles.forEach((article) => {
    // Crée un élément article pour chaque article
    const articleElement = document.createElement("article");
    articleElement.classList.add("article");
    articlesContainer.appendChild(articleElement);

    // Crée une div pour l'image de l'article
    const imgCard = document.createElement("div");
    imgCard.classList.add("imgArticle");
    articleElement.appendChild(imgCard);

    // Crée une div pour le texte de l'article
    const txtCard = document.createElement("div");
    txtCard.classList.add("txtArticle");
    articleElement.appendChild(txtCard);

    // Crée une div pour l'en-tête de l'article
    const headerCard = document.createElement("div");
    headerCard.classList.add("headerCard");
    txtCard.appendChild(headerCard);

    // Crée une div pour le nom du menu
    const nameMenu = document.createElement("div");
    nameMenu.classList.add("nomMenu");
    nameMenu.innerHTML = `<h2>${article.name}</h2>`;
    headerCard.appendChild(nameMenu);

    // Crée une div pour le temps de préparation
    const time = document.createElement("div");
    time.classList.add("nomMenu");
    headerCard.appendChild(time);

    // Ajoute une image pour représenter le temps
    const svgTime = document.createElement("img");
    const svg = "../Picture/time.svg";
    svgTime.setAttribute("src", svg);
    svgTime.classList.add("svgTime");
    time.appendChild(svgTime);

    // Ajoute le temps de préparation
    const timePreparation = document.createElement("span");
    timePreparation.classList.add("timePreparation");
    timePreparation.innerHTML = `<p>${article.time}</p>`;
    time.appendChild(timePreparation);

    // Crée une div pour les ingrédients
    const mainCard = document.createElement("div");
    mainCard.classList.add("mainCard");
    txtCard.appendChild(mainCard);

    // Crée une div pour la liste d'ingrédients
    const divUl = document.createElement("div");
    divUl.classList.add("divUl");
    mainCard.appendChild(divUl);

    // Crée une liste pour les ingrédients
    const ul = document.createElement("ul");
    ul.classList.add("ulList");
    divUl.appendChild(ul);

    // Ajoute chaque ingrédient dans la liste
    article.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.textContent =
        ingredient.ingredient + ":" + ingredient.quantity + ingredient.unit;
      ul.appendChild(li);
    });

    // Crée une div pour la préparation
    const prepa = document.createElement("div");
    prepa.classList.add("prepa");
    mainCard.appendChild(prepa);

    // Crée un paragraphe  pour la liste d'ingrédients
    const prepaRecette = document.createElement("p");
    prepaRecette.classList.add("recette");
    prepaRecette.innerHTML = `<p>${article.description}</p>`;
    prepa.appendChild(prepaRecette);
  });
};
