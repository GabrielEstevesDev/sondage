<?php
if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 

$id = isset($_SESSION['id'])?($_SESSION['id']):NULL;

/*if($id == NULL) {
	header("Location: ../ident.php");
}*/

	$login =  isset($_POST['silogin'])?($_POST['silogin']):'';
	$email =  isset($_POST['siemail'])?($_POST['siemail']):'';
	$mdp =  isset($_POST['simdp'])?($_POST['simdp']):'';

	
	if(identExists($login, $email)) {
		$msgAcc = "Le login et/ou le mail existe déjà";
		$_SESSION['msgAcc'] = $msgAcc;
		header("Location: ../ident.php");
	} else {
		signIn($login,$email,$mdp);
		$msgAcc = "Compte créé, vous pouvez vous connecter";
		$_SESSION['msgAcc'] = $msgAcc;
		header("Location: ../ident.php");
	}
	//var_dump($login );
	//var_dump($email);
	// IMPORTANT Rappel PDO
	//PDOStatement::prepare() et PDOStatement::execute()
	//pour préparer des requêtes et les exécuter qu'elles rendent OU PAS des lignes 
	
	function identExists($login, $email) {
		//var_dump(verifLogin($login));
		//var_dump(verifEmail($email));
		if(verifLogin($login) /*|| verifEmail($email)*/) {
			return true;
		} else {
			return false;
		}
	}
	
	
?>