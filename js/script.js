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
  var input = document.getElementById("input");
  if (input.value.length != 0) arrayAlim.push(lastAlim);
  console.log(arrayAlim);
}
