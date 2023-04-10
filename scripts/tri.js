let searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", function (event) {
  let caractere = event.target.value.toLowerCase();
  if (caractere.length >= 3) {
    console.log("Recherche en cours pour : " + caractere);
    let items = document.querySelectorAll(".article");
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let title = item.querySelector(".nomMenu").textContent.toLowerCase();
      if (title.includes(caractere)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  } else if (caractere.length === 0) {
    resetSearch();
  } else {
    console.log(
      "Veuillez entrer au moins 3 caractères pour lancer la recherche"
    );
  }
});

function resetSearch() {
    let items = document.querySelectorAll('.card');
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      item.style.display = 'block';
    }
  }