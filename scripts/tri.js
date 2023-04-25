import { getData } from "./api.js";

// Sélectionner l'élément input qui servira de champ de recherche
let searchInput = document.querySelector("#search-input");

const articlesContainer = document.querySelector("#section");

let articles = [];

// Récupérer les articles depuis l'API et les afficher
getData().then((data) => {
  articles = data;
  console.log(articles);
  displayArticles(articles);
});

const sortArticles = (articles) => {
  const searchValue = searchInput.value.toLowerCase();
  const filteredArticles = articles.filter((article) => {
    console.log(article.appliance);
    return (
      article.appliance.toLowerCase().includes(searchValue) ||
      article.name.toLowerCase().includes(searchValue) ||
      article.description.toLowerCase().includes(searchValue)
    );
  });
  return filteredArticles;
};

// Afficher les articles qui correspondent à la recherche
const displayArticles = (articles) => {
  articlesContainer.innerHTML = "";
  articles.forEach((article) => {
    const articleElement = document.createElement("article");
    articleElement.classList.add("article");
    articlesContainer.appendChild(articleElement);

    const imgCard = document.createElement("div");
    imgCard.classList.add("imgArticle");
    articleElement.appendChild(imgCard);

    const txtCard = document.createElement("div");
    txtCard.classList.add("txtArticle");
    articleElement.appendChild(txtCard);

    const headerCard = document.createElement("div");
    headerCard.classList.add("headerCard");
    txtCard.appendChild(headerCard);

    const nameMenu = document.createElement("div");
    nameMenu.classList.add("nomMenu");
    nameMenu.innerHTML = `<h2>${article.name}</h2>`;
    headerCard.appendChild(nameMenu);

    const time = document.createElement("div");
    time.classList.add("nomMenu");
    headerCard.appendChild(time);

    const svgTime = document.createElement("img");
    const svg = "../Picture/time.svg";
    svgTime.setAttribute("src", svg);
    svgTime.classList.add("svgTime");
    time.appendChild(svgTime);

    const timePreparation = document.createElement("span");
    timePreparation.classList.add("timePreparation");
    timePreparation.innerHTML = `<p>${article.time}</p>`;
    time.appendChild(timePreparation);

    const mainCard = document.createElement("div");
    mainCard.classList.add("mainCard");
    txtCard.appendChild(mainCard);

    const divUl = document.createElement("div");
    divUl.classList.add("divUl");
    mainCard.appendChild(divUl);

    const ul = document.createElement("ul");
    ul.classList.add("ulList");
    divUl.appendChild(ul);

    article.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.textContent = ingredient.ingredient + ":" + ingredient.quantity + ingredient.unit ;
      ul.appendChild(li);
    });

    const prepa = document.createElement("div");
    prepa.classList.add("prepa");
    mainCard.appendChild(prepa);

    const prepaRecette = document.createElement("p");
    prepaRecette.classList.add("recette");
    prepaRecette.innerHTML = `<p>${article.description}</p>`;
    prepa.appendChild(prepaRecette);
  });
};

// Ajouter un événement qui se déclenche à chaque fois que l'utilisateur entre du texte dans le champ de recherche
searchInput.addEventListener("input", () => {
  const newSortArticles = sortArticles(articles);
  displayArticles(newSortArticles);
});
/*
const tableau = await getData()
console.log(tableau);
const resultArray = [];
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
*/