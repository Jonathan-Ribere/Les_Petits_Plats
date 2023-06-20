export const creatCard = (recipe) => {
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

  if (recipe.ingredients && recipe.ingredients.length > 0) {
    // Vérifie si la propriété `ingredients` existe et si sa longueur est supérieure à zéro

    recipe.ingredients.forEach((ingredient) => {
      // Itère sur chaque élément de la liste `ingredients` de la recette

      const li = document.createElement("li");
      li.classList.add("liCard");
      // Crée un nouvel élément <li> et lui ajoute la classe "liCard"

      let ingredientString = ingredient.ingredient;
      // Initialise une variable `ingredientString` avec la valeur de la propriété `ingredient` de l'élément `ingredient` actuel

      if (ingredient.quantity) {
        // Vérifie si la propriété `quantity` de l'élément `ingredient` existe

        ingredientString += `: <span class="ingredient-quantity">${ingredient.quantity}`;
        // Ajoute la quantité à la variable `ingredientString` avec une chaîne de caractères formatée

        if (ingredient.unit) {
          ingredientString += ` ${ingredient.unit}`;
          // Ajoute l'unité à la variable `ingredientString` si elle existe
        }

        ingredientString += `</span>`;
        // Ferme la balise <span> ouverte précédemment avec la variable `ingredientString`
      }

      li.innerHTML = ingredientString;
      // Affecte la valeur de `ingredientString` en tant que contenu HTML de l'élément <li>

      ul.appendChild(li);
      // Ajoute l'élément <li> à l'élément <ul> existant dans le code précédent
    });
  }


  const prepa = document.createElement("div");
  prepa.classList.add("prepa");
  mainCard.appendChild(prepa);

  const prepaRecette = document.createElement("p");
  prepaRecette.classList.add("recette");
  prepaRecette.textContent = recipe.description;
  prepa.appendChild(prepaRecette);
};
