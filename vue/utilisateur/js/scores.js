$().ready(init);

var nutriscore;
var scoresante;
var uId;
function init() {
  getScores();
  afficherScores();
}
function getId() {
  url = "./index.php?controle=utilisateur&action=getId";
  $.ajax({
    async: false, //défaut
    type: "GET",
    url: url,
    success: function (retour) {
      uId = retour;
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // code à exécuter en cas d'erreur
      console.error(textStatus, errorThrown);
    },
  });
}
function getScores() {
  getId();
  url = "./modele/recupScoresSQL.php";
  $.ajax({
    async: false, //défaut
    type: "GET",
    data: { id: uId },
    url: url,
    dataType: "json",
    success: function (retour) {
      nutriscore = retour["nutriscore"];
      scoresante = retour["scoresante"];
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // code à exécuter en cas d'erreur
      console.error(textStatus, errorThrown);
    },
  });
}

function afficherScores() {
  $(".nutriscore").text("Votre nutriscore : " + nutriscore);
  $(".scoresante").text("Votre score santé : " + scoresante);
}
