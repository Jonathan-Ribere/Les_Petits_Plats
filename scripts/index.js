let recipes = [];

async function getData() {
  try {
    const response = await fetch("/data/recipes.json");
    const data = await response.json();
    recipes = data.recipes;
    console.log(recipes);
    return recipes;
  } catch (error) {
    console.error(error);
  }
}

const CreatCard = (recipe) => {
  const section = document.querySelector(".section");

  const article = document.createElement("article");
  article.classList.add("article");
  section.appendChild(article);

  const imgCard = document.createElement("div");
  imgCard.classList.add("imgCard");
  article.appendChild(imgCard);

  const txtCard = document.createElement("div");
  txtCard.classList.add("txtArticle");
  article.appendChild(txtCard);

  const headerCard = document.createElement("div");
  headerCard.classList.add("d-flex", "justify-content-between", "mb-3");
  txtCard.appendChild(headerCard);

  const nameMenu = document.createElement("div");
  nameMenu.classList.add("nomMenu");
  nameMenu.textContent = recipe.name;
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
  timePreparation.textContent = recipe.time
  time.appendChild(timePreparation);
};

async function init() {
  try {
    const response = await fetch("/data/recipes.json");
    const data = await response.json();
    const recipes = data.recipes;
    
    for (const recipe of recipes) {
      CreatCard(recipe);
    }
  } catch (error) {
    console.error(error);
  }
}

init();

init();