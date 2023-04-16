// Sélectionner l'élément input qui servira de champ de recherche
let searchInput = document.querySelector("#search-input");

// Ajouter un événement qui se déclenche à chaque fois que l'utilisateur entre du texte dans le champ de recherche
searchInput.addEventListener("input", function (event) {
  // Récupérer le texte entré dans le champ de recherche et le mettre en minuscule
  let caractere = event.target.value.toLowerCase();

  // Si la longueur du texte entré est supérieure ou égale à 3 caractères
  if (caractere.length >= 3) {
    // Afficher un message dans la console pour indiquer que la recherche est en cours
    console.log("Recherche en cours pour : " + caractere);

    // Sélectionner tous les éléments qui contiennent les articles à rechercher
    let items = document.querySelectorAll(".article");

    // Parcourir tous les éléments contenant les articles
    for (let i = 0; i < items.length; i++) {
      // Récupérer l'élément actuel dans la boucle
      let item = items[i];

      // Récupérer le titre de l'article contenu dans l'élément actuel et le mettre en minuscule
      let title = item.querySelector(".nomMenu").textContent.toLowerCase();

      // Vérifier si le titre de l'article contient le texte entré dans le champ de recherche
      if (title.includes(caractere)) {
        // Si c'est le cas, afficher l'élément actuel
        item.style.display = "block";
      } else {
        // Sinon, masquer l'élément actuel
        item.style.display = "none";
      }
    }
  } else if (caractere.length === 0) {
    // Si aucun texte n'a été entré, appeler la fonction resetSearch() pour afficher tous les articles
    resetSearch();
  } else {
    // Si la longueur du texte entré est inférieure à 3 caractères, afficher un message dans la console pour indiquer qu'il faut entrer au moins 3 caractères
    console.log("Veuillez entrer au moins 3 caractères pour lancer la recherche");
  }
});

// Fonction pour réinitialiser la recherche et afficher tous les articles
function resetSearch() {
  // Sélectionner tous les éléments qui contiennent les articles à rechercher
  let items = document.querySelectorAll(".article");

  // Parcourir tous les éléments contenant les articles
  for (let i = 0; i < items.length; i++) {
    // Récupérer l'élément actuel dans la boucle
    let item = items[i];

    // Afficher l'élément actuel
    item.style.display = "block";
  }
}