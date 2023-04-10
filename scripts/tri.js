let searchInput = document.querySelector('#search-input');
searchInput.addEventListener('input', function(event) {
    let caractere = event.target.value; 
    if (caractere.length >= 3) {
      console.log('Recherche en cours pour : ' + caractere);
    } else {
      console.log('Veuillez entrer au moins 3 caractères pour lancer la recherche');
    }
});