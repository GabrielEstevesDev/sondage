window.addEventListener("load", init);
var lastObjAlim;
var tabAlim;
function init() {
  arrayAlim = new Array();
  tabAlim = new Array();
  var inputSubmit = document.getElementById("submit");
  console.log(inputSubmit);
  inputSubmit.style.display = "none";
  var buttonChoisir = document.getElementById("choisir");
  buttonChoisir.addEventListener("click", ajoutAlim);
  for (let option of browsers.options) {
    option.onclick = function (e) {
      browsers.style.display = "none";
      input.style.borderRadius = "5px";
      lastObjAlim = { code: e.target.id, nom: option.textContent };
      input.value = option.textContent;
      lastAlim = e.target.id;
      lastNomAlim = option.textContent;
    };
  }
}

function ajoutAlim(e) {
  var buttonChoisir = document.getElementById("choisir");
  var input = document.getElementById("input");
  if (input.value.length != 0) {
    tabAlim.push(lastObjAlim);
    afficherAlimChoisi();
    if (tabAlim.length == 10) {
      buttonChoisir.removeEventListener("click", ajoutAlim);
      buttonChoisir.innerHTML = "ENVOYER";
      buttonChoisir.addEventListener("click", envoyerAliments);
    }
  }
  console.log(tabAlim);
}

function afficherAlimChoisi() {
  insert.innerHTML = "";
  for (let [i, choix] of tabAlim.entries()) {
    var number = i + 1;
    insert.innerHTML =
      insert.innerHTML +
      "<tr> <td>" +
      number +
      "</td><td>" +
      choix["nom"] +
      "</td><td><button id=" +
      i +
      " class=supOption>Supprimer</button></td> </tr>";
  }
  for (let choix of document.getElementsByClassName("supOption")) {
    choix.addEventListener("click", supChoix);
  }
}

function supChoix(e) {
  var index = e.target.id;
  if (index > -1) {
    tabAlim.splice(index, 1);
  }
  afficherAlimChoisi();
  var buttonChoisir = document.getElementById("choisir");
  if (tabAlim.length < 10) {
    buttonChoisir.innerHTML = "choisir";
    buttonChoisir.addEventListener("click", ajoutAlim);
  }
}
function envoyerAliments() {
  data = { array: arrayAlim ,controle:"aliment",action:"envoyer10alim"};
  $.ajax({
    type: "POST",
    url: "./index.php",
    data: data,
    success: function (response) {},
    error: function () {
      alert("PB URL");
    },
  });

}
