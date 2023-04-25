import { getData } from "./api.js";

const tableau = await getData()
console.log(tableau);

const resultArray = [];

// Sélectionner l'élément input qui servira de champ de recherche
let searchInput = document.querySelector("#search-input");

// Sélectionner l'élément parent qui contient tous les articles
let articlesContainer = document.querySelector("#section");
console.log(articlesContainer);

// Sélectionner tous les éléments qui contiennent les articles à rechercher
let articles = articlesContainer.querySelectorAll(".article");

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
/*
    // Sélectionner tous les éléments qui contiennent les articles à rechercher
    let items = document.querySelectorAll(".article");

    // Filtrer les articles pour ne conserver que ceux qui contiennent le texte recherché
    let filteredArticles = articlesArray.filter(function (article) {
      // Récupérer le titre de l'article en minuscule
      let title = article.querySelector(".nomMenu").textContent.toLowerCase();

      // Récupérer le contenu de l'article en minuscule
      let content = article.querySelector(".recette").textContent.toLowerCase();

      // Vérifier si le texte recherché est présent dans le titre ou le contenu de l'article
      return title.includes(searchValue) || content.includes(searchValue);*/
/*



// Convertir les articles en tableau pour pouvoir utiliser la méthode filter() dessus
let articlesArray = Array.from(articles);
console.log(articlesArray);


    // Vider le contenu de l'élément parent
    articlesContainer.innerHTML = "";

    // Créer une carte pour chaque article filtré et l'ajouter à l'élément parent
    filteredArticles.forEach(function (article) {
      CreatCard(article);
    });
    /*
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
    } /////////////
  } else {
    // Si la longueur du texte entré est inférieure à 3 caractères, afficher tous les articles
    articlesArray.forEach(function (article) {
      CreatCard(article);
    });
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
*/