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
  const searchValue = searchInput.value.toLowerCase();
  // Récupère la valeur de recherche entrée par l'utilisateur et la met en minuscules

  let sortedArticles;
  // Déclare une variable pour stocker les articles triés

  if (searchValue.length >= 3) {
    // Vérifie si la valeur de recherche a une longueur d'au moins 3 caractères

    sortedArticles = articles.filter((article) => {
      // Filtre les articles en fonction des critères de recherche

      const ingredients = article.ingredients.map((ingredient) =>
        ingredient.ingredient.toLowerCase()
      );
      // Crée un tableau des ingrédients de chaque article en les mettant en minuscules

      return (
        ingredients.includes(searchValue) ||
        article.name.toLowerCase().includes(searchValue) ||
        article.description.toLowerCase().includes(searchValue)
      );
      // Retourne true si la valeur de recherche correspond à l'un des ingrédients, au nom ou à la description de l'article
    });
  } else {
    sortedArticles = articles;
    // Si la valeur de recherche a moins de 3 caractères, utilise tous les articles sans les filtrer
  }

  const section = document.querySelector("#section");
  section.innerHTML = "";
  // Sélectionne la section dans le document HTML où les articles seront affichés
  // Ensuite, vide le contenu de cette section

  sortedArticles.forEach((article) => {
    creatCard(article, section);
    // Pour chaque article trié, crée une carte en utilisant la fonction "creatCard" et l'ajoute à la section
  });

  displayListeIngredients(sortedArticles);
  displayListeAppareils(sortedArticles);
  displayListeUstensiles(sortedArticles);
  // Appelle les fonctions pour afficher les listes d'ingrédients, d'appareils et d'ustensiles en utilisant les articles triés
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
    // Filtre les articles en fonction des filtres d'ingrédients, d'appareils et d'ustensiles

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
    // Vérifie si tous les ingrédients filtrés sont présents dans la recette
    // Si le filtre d'ingrédients est vide, toutes les recettes sont considérées comme valides

    const appareilFiltrePresent =
      !filtreAppareils.length ||
      filtreAppareils.includes(recette.appliance.toLowerCase());
    // Vérifie si l'appareil filtré est présent dans la recette
    // Si le filtre d'appareils est vide, toutes les recettes sont considérées comme valides

    const ustensilesFiltresPresent =
      !filtreUstensiles.length ||
      filtreUstensiles.every(
        (ustensile) =>
          recette.ustensils &&
          recette.ustensils.includes(ustensile.toLowerCase())
      );
    // Vérifie si tous les ustensiles filtrés sont présents dans la recette
    // Si le filtre d'ustensiles est vide, toutes les recettes sont considérées comme valides

    return (
      ingrFiltresPresent && appareilFiltrePresent && ustensilesFiltresPresent
    );
    // Retourne true si la recette passe tous les filtres, sinon retourne false
  });

  // Affiche les recettes filtrées
  sortAndDisplayArticles(recettesFiltrees);
  // Appelle la fonction "sortAndDisplayArticles" pour trier et afficher les recettes filtrées
};
/*

La méthode every est une méthode qui est utilisée sur un tableau.
Elle teste si tous les éléments du tableau satisfont une condition donnée.
Elle renvoie true si tous les éléments du tableau passent le test de la condition, sinon elle renvoie false.
Elle arrête son exécution dès qu'un élément ne satisfait pas la condition.
La méthode some :

La méthode some est également utilisée sur un tableau.
Elle teste si au moins un élément du tableau satisfait une condition donnée.
Elle renvoie true si au moins un élément du tableau passe le test de la condition, sinon elle renvoie false.
Elle arrête son exécution dès qu'un élément satisfait la condition.

*/