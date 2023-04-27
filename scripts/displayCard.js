export const creatCard = (recipe) => {
    // Accéder à la liste des ingrédients
    const ingredients = recipe.ingredients;
    const section = document.querySelector("#section");
  
    const article = document.createElement("article");
    article.classList.add("article");
    section.appendChild(article);
  
    const imgCard = document.createElement("div");
    imgCard.classList.add("imgArticle");
    article.appendChild(imgCard);
  
    const txtCard = document.createElement("div");
    txtCard.classList.add("txtArticle");
    article.appendChild(txtCard);
  
    const headerCard = document.createElement("div");
    headerCard.classList.add("headerCard");
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
    timePreparation.textContent = recipe.time + "min";
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
  
    for (const ingredient of ingredients) {
      const li = document.createElement("li");
      li.classList.add("list");
  
      const quantitySpan = document.createElement("span");
      quantitySpan.classList.add("quantity");
      quantitySpan.textContent = `${ingredient.quantity} ${
        ingredient.unit || ""
      }`;
  
      li.textContent = `${ingredient.ingredient} : `;
      li.appendChild(quantitySpan);
  
      ul.appendChild(li);
    }
  
    const prepa = document.createElement("div");
    prepa.classList.add("prepa");
    mainCard.appendChild(prepa);
  
    const prepaRecette = document.createElement("p");
    prepaRecette.classList.add("recette");
    prepaRecette.textContent = recipe.description;
    prepa.appendChild(prepaRecette);
  };