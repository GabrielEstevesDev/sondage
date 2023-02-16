const eye = document.querySelector(".fa-eye");
const eyeoff = document.querySelector(".fa-eye-slash");
const passwordField = document.querySelector("#inputmdp");

eye.addEventListener("click", () => {
  console.log("testtttt");
  eye.style.display = "none";
  eyeoff.style.display = "block";
  passwordField.type = "text";
});

eyeoff.addEventListener("click", () => {
  console.log("testtt2");
  eyeoff.style.display = "none";
  eye.style.display = "block";
  passwordField.type = "password";
});
