import { getData } from "./api.js";
import { creatCard } from "./displayCard.js";
import {displayListeIngredients, displayListeAppareils, displayListeUstensiles } from "./displayListe.js"
import {
  sortDisplayIngredientsList,
  sortDisplayAppliancesList,
  sortDisplayUstensilsList
} from "./sortListeInput.js";

// Créez des variables pour stocker les valeurs actuelles des filtres
let filtreNom = '';
let filtreIngredients = [];
let filtreUstensiles = [];
let filtreAppareils = [];

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
  displayListeIngredients(sortedArticles)
  //sortDisplayIngredientsList(sortedArticles);

  displayListeAppareils(sortedArticles);
  //sortDisplayAppliancesList(sortedArticles);

  displayListeUstensiles(sortedArticles);
  //sortDisplayUstensilsList(sortedArticles);
};

// Ajout d'un écouteur d'événement sur l'élément input pour mettre à jour l'affichage à chaque saisie
searchInput.addEventListener("input", () => {
  sortAndDisplayArticles(articles);
});


// Fonction pour filtrer les recettes en fonction des filtres
function filtrerRecettes() {
  let recettesFiltrees = articles.filter(recette => {
    // Vérifiez si la recette contient le nom filtré
    if (filtreNom !== '' && !recette.name.toLowerCase().includes(filtreNom.toLowerCase())) {
      return false;
    }
    // Vérifiez si la recette contient tous les ingrédients filtrés
    if (filtreIngredients.length > 0 && !filtreIngredients.every(ingredient => recette.ingredients.includes(ingredient))) {
      return false;
    }
    // Vérifiez si la recette contient tous les ustensiles filtrés
    if (filtreUstensiles.length > 0 && !filtreUstensiles.every(ustensile => recette.ustensils.includes(ustensile))) {
      return false;
    }
    // Vérifiez si la recette contient tous les appareils filtrés
    if (filtreAppareils.length > 0 && !filtreAppareils.every(appareil => recette.appliance === appareil)) {
      return false;
    }
    // Si toutes les conditions sont remplies, la recette est incluse dans les recettes filtrées
    return true;
  });

  // Affichez les recettes filtrées
  sortAndDisplayArticles(recettesFiltrees);
}