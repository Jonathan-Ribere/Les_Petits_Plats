import { getData } from "./api.js";
import { creatCard } from "./displayCard.js";
import {
  sortDisplayIngredientsList,
  sortDisplayAppliancesList,
  sortDisplayUstensilsList
} from "./sortListeInput.js";

// Récupération de l'élément input
const searchInput = document.querySelector("#search-input");

// Initialisation du tableau d'articles
let articles = [];

// Récupération des données depuis l'API et création des cartes d'articles
getData().then((data) => {
  articles = data;
  creatCard(articles);
});

// Fonction pour trier et afficher les articles
const sortAndDisplayArticles = (articles) => {
  // Récupération de la valeur de recherche et conversion en minuscules
  const searchValue = searchInput.value.toLowerCase();

  // Initialisation du tableau trié d'articles
  let sortedArticles;

  // Si la valeur de recherche est d'au moins 3 caractères
  if (searchValue.length >= 3) {
    // Filtrage des articles selon le critère de recherche
    sortedArticles = articles.filter((article) => {
      const ingredients = article.ingredients.map((ingredient) =>
        ingredient.ingredient.toLowerCase()
      );
      return (
        ingredients.includes(searchValue) ||
        article.name.toLowerCase().includes(searchValue) ||
        article.description.toLowerCase().includes(searchValue)
      );
    });
  } else {
    // Si la valeur de recherche est inférieure à 3 caractères, on affiche tous les articles
    sortedArticles = articles;
  }

  // Récupération de la section d'affichage des articles
  const section = document.querySelector("#section");

  // Suppression du contenu précédent de la section
  section.innerHTML = "";

  // Création des cartes d'articles pour les articles triés et affichage de la liste d'ingrédients
  sortedArticles.forEach((article) => {
    creatCard(article, section);
  });
  sortDisplayIngredientsList(sortedArticles);
  sortDisplayAppliancesList(sortedArticles);
  sortDisplayUstensilsList(sortedArticles);
};

// Ajout d'un écouteur d'événement sur l'élément input pour mettre à jour l'affichage à chaque saisie
searchInput.addEventListener("input", () => {
  sortAndDisplayArticles(articles);
});
