// Ce fichier JS contient les fonctionnalités nécessaires pour initialiser une application 
// et afficher des cartes de recettes.

import { getData } from "./api.js";
import { creatCard } from "./displayCard.js";

// Déclarer un tableau vide pour stocker les recettes
let recipes = [];

// Définir une fonction asynchrone pour initialiser l'application
async function init() {
  try {
    recipes = await getData();
    recipes.forEach((recipe) => creatCard(recipe));
  } catch (error) {
    console.error(error);
  }
}

// Appeler la fonction d'initialisation pour démarrer l'application
init();
