window.addEventListener("load", init);
var lastAlim;
var arrayAlim;
function init() {
  arrayAlim = new Array();
  var inputSubmit = document.getElementById("submit");
  console.log(inputSubmit);
  inputSubmit.style.display = "none";
  var buttonChoisir = document.getElementById("choisir");
  buttonChoisir.addEventListener("click", ajoutAlim);
  for (let option of browsers.options) {
    option.onclick = function (e) {
      input.value = option.value;
      browsers.style.display = "none";
      input.style.borderRadius = "5px";
      lastAlim = e.target.id;
    };
  }
}

function ajoutAlim() {
  var buttonChoisir = document.getElementById("choisir");
  if (arrayAlim.length == 10) {
    buttonChoisir.removeEventListener("click", ajoutAlim);
    buttonChoisir.innerHTML = "ENVOYER";
    envoyerAliments();
    buttonChoisir.addEventListener("click", envoyerAliments);
  } else {
    var input = document.getElementById("input");
    if (input.value.length != 0) arrayAlim.push(lastAlim);
    console.log(arrayAlim);
  }
}

function envoyerAliments() {
  data = { array: arrayAlim };
  $.ajax({
    type: "POST",
    url: "../php/envoyerAlim.php",
    data: data,
    success: function (response) {
      aliments.innerHTML = response;
    },
    error: function () {
      alert("PB URL");
    },
  });
}
