window.addEventListener("load", init);
var aliments;
var input;

function init() {
  // recupAliments();
  input = document.getElementById("alim");
  input.addEventListener("keyup", keyInput);
  console.log(input);
}

function keyInput(e) {
  console.log(this.value.length);
  if (this.value.length >= 3) {
    var url = "./php/recupAlim.php";
    var data = { name: this.value };
    $.ajax({
      //requête web
      async: false,
      type: "GET",
      data: data,
      dataType: "json",
      url: url,
      success: function (retour) {
        aliments = retour;
        console.log(aliments);
      },
      error: function () {
        alert("PB avec l'URL");
      },
    });
  }
}

function recupAliments() {
  url = "./php/recupSQL.php";
  $.ajax({
    //requête web
    async: false,
    type: "GET",
    dataType: "json",
    url: url,
    success: function (retour) {
      aliments = retour;
      console.log(aliments);
    },
    error: function () {
      alert("PB avec l'URL");
    },
  });
}
