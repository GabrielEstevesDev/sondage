window.addEventListener("load", init);
var lastCodeAlim;
var arrayAlim;
var lastNomAlim;
function init() {
  arrayAlim = new Array();
  var inputSubmit = document.getElementById("submit");
  console.log(inputSubmit);
  inputSubmit.style.display = "none";
  var buttonChoisir = document.getElementById("choisir");
  buttonChoisir.addEventListener("click", ajoutAlim);
  for (let option of browsers.options) {
    option.onclick = function (e) {
      input.value = option.textContent;
      browsers.style.display = "none";
      input.style.borderRadius = "5px";
      lastAlim = e.target.id;
      lastNomAlim = option.textContent;
    };
  }
}

function ajoutAlim() {
  var buttonChoisir = document.getElementById("choisir");
  var input = document.getElementById("input");
  if (input.value.length != 0) {
    arrayAlim.push(lastAlim);
    afficherAlimChoisi();
    if (arrayAlim.length == 10) {
      buttonChoisir.removeEventListener("click", ajoutAlim);
      buttonChoisir.innerHTML = "ENVOYER";
      envoyerAliments();
      buttonChoisir.addEventListener("click", envoyerAliments);
    }
  }
  console.log(arrayAlim);
}

function afficherAlimChoisi() {
  var numAlim = arrayAlim.length;
  insert.innerHTML =
    insert.innerHTML +
    "<tr><td>" +
    numAlim +
    "</td><td>" +
    lastNomAlim +
    "</td> </tr>";
}
function envoyerAliments() {
  data = { array: arrayAlim };
  $.ajax({
    type: "POST",
    url: "../php/envoyerAlim.php",
    data: data,
    success: function (response) {},
    error: function () {
      alert("PB URL");
    },
  });
}
