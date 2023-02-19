// //
// window.addEventListener("load", init);

// function init() {
//   const monElement = document.getElementById("connected");
//   const elementHTML = monElement.innerHTML;

//   monElement.addEventListener("mouseover", () => {
//     monElement.innerHTML =
//       "<a id='link' href='./index.php?action=deconnexion&controle=logout'> Déconnexion</a>";
//     var monLien = document.getElementById("link");
//     monLien.addEventListener("click", clickLink);
//   });

//   monElement.addEventListener("mouseout", (e) => {
//     e.stopPropagation();
//     monElement.innerHTML = elementHTML;
//   });

//   monElement.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("click li");
//   });
// }

// function clickLink() {
//   const event = new Event("click", { bubbles: true });
//   enfant.dispatchEvent(event);
//   console.log("click a");
// }
// // function init() {
// //   document.getElementById("connected").addEventListener("mouseover", overLogIn);
// //   document.getElementById("connected").addEventListener("mouseout", outLogIn);
// // }

// function overLogIn() {
//   document.getElementById("connected").style.display = "none";
// }

// function outLogIn() {
//   document.getElementById("connected").style.display = "block";
// }
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
  window.addEventListener("scroll", navPosition);
  window.addEventListener("resize", navPosition);
  toogle.addEventListener("click", navResp);
}

function navPosition() {
  if (window.innerWidth <= 900 || window.scrollY > header.offsetHeight) {
    nav.style.position = "fixed";
    nav.style.top = 0;
    nav.style.left = "50%";
    nav.style.transform = "translateX(-50%)";
  } else {
    nav.style.position = "static";
    nav.style.transform = "translateX(0)";
  }
}

function navResp() {
  body.classList.toggle("open");
}
