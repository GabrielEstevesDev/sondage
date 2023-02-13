$().ready(init);

var nutriscore;
var scoresante;

function init() {
	getScores();
	afficherScores();
}

function getScores() {
  url = "./modele/recupScoresSQL.php";
  $.ajax({
    async: false, //défaut
    type: "GET",
    data: {id:"10"},
    url: url,
    dataType : "json",
    success: function (retour) {
      nutriscore = retour["nutriscore"];
      scoresante = retour["scoresante"];
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // code à exécuter en cas d'erreur
      console.error(textStatus, errorThrown);
    }
  });
}

function afficherScores() {
	$(".nutriscore").text("Votre nutriscore : " + nutriscore);
  $(".scoresante").text("Votre score santé : " + scoresante);
}