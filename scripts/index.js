// Importer les fonctions nécessaires à partir de fichiers externes
import { getData } from "./api.js";
import { creatCard } from "./displayCard.js";

// Déclarer un tableau vide pour stocker les recettes
let recipes = [];

// Définir une fonction asynchrone pour initialiser l'application
async function init() {
  try {
    // Récupérer les données des recettes à partir de l'API
    recipes = await getData();

    // Parcourir le tableau de recettes et appeler la fonction creatCard pour chaque recette
    recipes.forEach(recipe => creatCard(recipe));
  } catch (error) {
    // Afficher une erreur s'il y a un problème lors de la récupération des données
    console.error(error);
  }
}

// Appeler la fonction d'initialisation pour démarrer l'application
init();