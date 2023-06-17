import { getData } from "./api.js";
import { creatCard } from "./displayCard.js";
import {
  displayListeIngredients,
  displayListeAppareils,
  displayListeUstensiles,
} from "./displayListe.js";

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
export const sortAndDisplayArticles = (articles) => {
  // Récupération de la valeur de recherche et conversion en minuscules
  const searchValue = searchInput.value.toLowerCase();

  // Initialisation du tableau trié d'articles
  let sortedArticles;

  // Si la valeur de recherche est d'au moins 3 caractères
  if (searchValue.length >= 3) {
    // Filtrage des articles selon le critère de recherche
    sortedArticles = [];
    for (let i = 0; i < articles.length; i++) {
      const ingredients = [];
      for (let j = 0; j < articles[i].ingredients.length; j++) {
        ingredients.push(articles[i].ingredients[j].ingredient.toLowerCase());
      }
      if (
        ingredients.includes(searchValue) ||
        articles[i].name.toLowerCase().includes(searchValue) ||
        articles[i].description.toLowerCase().includes(searchValue)
      ) {
        sortedArticles.push(articles[i]);
      }
    }
  } else {
    // Si la valeur de recherche est inférieure à 3 caractères, on affiche tous les articles
    sortedArticles = articles;
  }

  // Récupération de la section d'affichage des articles
  const section = document.querySelector("#section");

  // Suppression du contenu précédent de la section
  section.innerHTML = "";

  // Création des cartes d'articles pour les articles triés et affichage de la liste d'ingrédients
  for (let i = 0; i < sortedArticles.length; i++) {
    creatCard(sortedArticles[i], section);
  }

  displayListeIngredients(sortedArticles);
  displayListeAppareils(sortedArticles);
  displayListeUstensiles(sortedArticles);
};

// Ajout d'un écouteur d'événement sur l'élément input pour mettre à jour l'affichage à chaque saisie
searchInput.addEventListener("input", () => {
  sortAndDisplayArticles(articles);
});

// Fonction pour filtrer les recettes en fonction des filtres
export const filtrerRecettes = (
  filtreIngredients,
  filtreAppareils,
  filtreUstensiles
) => {
  let recettesFiltrees = articles.filter((recette) => {
    // Vérifie si la recette contient tous les ingrédients filtrés
    const ingrFiltresPresent =
      !filtreIngredients.length ||
      filtreIngredients.every((ingredient) =>
        recette.ingredients.some(
          (recetteIngredient) =>
            recetteIngredient.ingredient &&
            recetteIngredient.ingredient.toLowerCase() ===
            ingredient.toLowerCase()
        )
      );

    // Vérifie si la recette correspond à l'appareil filtré
    const appareilFiltrePresent =
      !filtreAppareils.length ||
      filtreAppareils.includes(recette.appliance.toLowerCase());

    // Vérifie si la recette contient tous les ustensiles filtrés
    const ustensilesFiltresPresent =
      !filtreUstensiles.length ||
      filtreUstensiles.every(
        (ustensile) =>
          recette.ustensils &&
          recette.ustensils.includes(ustensile.toLowerCase())
      );

    // Retourne true si tous les filtres sont satisfaits, sinon false
    return (
      ingrFiltresPresent && appareilFiltrePresent && ustensilesFiltresPresent
    );
  });

  console.log(recettesFiltrees);

  // Affiche les recettes filtrées
  sortAndDisplayArticles(recettesFiltrees);
};
