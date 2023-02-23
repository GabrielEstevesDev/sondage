$().ready(init);
var nom;

function init() {
  getNom();
  document.getElementById("nom").innerHTML=nom;
  setTimeout(printPdf, 1500);
}
function getNom() {
  url = "./index.php?controle=utilisateur&action=getNom";
  $.ajax({
    async: false, //défaut
    type: "GET",
    url: url,
    success: function (retour) {
      console.log(retour);
      nom = retour;
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // code à exécuter en cas d'erreur
      console.error(textStatus, errorThrown);
    },
  });
}


function printPdf() {
  window.print();
}
