$().ready(init);
var mdp;
var msg
var prog;
var tmp;
var affi;

function init() {
  mdp=document.getElementById("simdptpass");
  msg=document.getElementById("mdpmsg");
  prog=document.getElementById("file");
  tmp=msg.innerHTML;
  mdp.addEventListener("keypress",scorePassword);
  affi=document.getElementById("imdmdp");
  
  affi.addEventListener("click",affichagemdp);
}

function scorePassword(pass) {
    pass=mdp.value;
    var score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;
    console.log(score);
    checkPassStrength(score);
}
function checkPassStrength(pass) {
    if (pass > 80 && prog.value!=300){
        msg.innerHTML= tmp+"strong";
        prog.value=300;
    }
       
    if (pass > 60 &&pass<80 && prog.value!=200){
        msg.innerHTML= tmp+ "good";
        prog.value=200;
    }
   
    if (pass >= 30 && pass<60 && prog.value!=100){
        msg.innerHTML= tmp+ "weak";
        prog.value=100;
    }
        
}

function affichagemdp(){
    var x = document.getElementById("simdptpass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
        
}