/*
// Créez une variable pour stocker votre tableau de recettes
let recettes = [...];

// Créez des variables pour stocker les valeurs actuelles des filtres
let filtreNom = '';
let filtreIngredients = [];
let filtreUstensiles = [];
let filtreAppareils = [];

// Fonction pour filtrer les recettes en fonction des filtres
function filtrerRecettes() {
  let recettesFiltrees = recettes.filter(recette => {
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
  afficherRecettes(recettesFiltrees);
}

// Fonction pour mettre à jour le filtre d'ustensiles et filtrer les recettes
function filtrerUstensiles(ustensile) {
  // Vérifiez si l'ustensile est déjà dans le filtre
  if (!filtreUstensiles.includes(ustensile)) {
    // Ajoutez l'ustensile au filtre
    filtreUstensiles.push(ustensile);
  } else {
    // Supprimez l'ustensile du filtre
    filtreUstensiles = filtreUstensiles.filter(u => u !== ustensile);
  }

  // Filtrer les recettes avec le nouveau filtre d'ustensiles
  filtrerRecettes();
}

// Ajoutez un événement click à chaque bouton d'ustensile pour filtrer les recettes
let boutonsUstensiles = document.querySelectorAll('.bouton-ustensile');
boutonsUstensiles.forEach(bouton => {
  bouton.addEventListener('click', (event) => {
    let ustensile = event.target.textContent;
    filtrerUstensiles(ustensile);
  });
});
*/