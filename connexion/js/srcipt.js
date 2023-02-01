var nav;
var page;
var body;
var toogle;
var header;

window.addEventListener("load", init);
function init() {
  toogle = document.querySelector(".toogle");
  body = document.querySelector("body");
  nav = document.getElementById("navbar");
  page = document.getElementById("page");
  header = document.querySelector("header");
  siemail.addEventListener("keypress", verifMail);
  window.addEventListener("scroll", navPosition);
  window.addEventListener("resize", navPosition);
  toogle.addEventListener("click", navResp);
}

function verifMail() {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(siemail.value)) {
    console.log("L'email est valide");
  } else {
    console.log("L'email n'est pas valide");
  }
}

function navPosition() {
  nav.style.position = "fixed";
  nav.style.top = 0;
  nav.style.left = "50%";
  nav.style.transform = "translateX(-50%)";
}

function navResp() {
  body.classList.toggle("open");
}
