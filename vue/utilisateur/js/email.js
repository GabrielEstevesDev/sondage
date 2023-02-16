$().ready(init);
var email;
var msgemail;

function init() {
    email=document.getElementById("siemail");
    msgemail=document.getElementById("emailmsg");
    email.addEventListener("keypress",ValidationMail);

  }

function ValidationMail()
{
	var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{1,}$/;

	if (email.value.match(regex))
	{
		msgemail.innerHTML="Adresse mail valide";
	}
	else
	{
		msgemail.innerHTML="Adresse mail non valide";
	}
}