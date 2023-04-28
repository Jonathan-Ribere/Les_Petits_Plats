export const addClickHandlerToListItems = (listItems) => {
    listItems.forEach((li) => {
      li.addEventListener("click", () => {
        const searchedLi = li.textContent;
        // Générer une nouvelle recherche avec l'ingrédient cliqué
        console.log(`Nouvelle recherche pour l'ingrédient ${searchedLi}`);
      });
    });
  };