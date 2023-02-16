$().ready(init);

var choix;

function init() {
	getChoix();
	afficherChoix();
}

function getChoix() {
  url = "./modele/recupChoixSQL.php";
  $.ajax({
    async: false, //défaut
    type: "GET",
    data: {id:"10"},
    url: url,
    dataType : "json",
    success: function (retour) {
      choix = retour;
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // code à exécuter en cas d'erreur
      console.error(textStatus, errorThrown);
    }
  });
}

function afficherChoix() {
	for(var i = 0; i < 10; i++) {
		$("p.alim"+(i+1)).text(choix[i]["alim_nom_fr"]);
	}
}