<?php
function inscription(){
/*if($id == NULL) {
	header("Location: ../ident.php");
}*/
	if(count($_POST)==0) {
		require ("./vue/inscription/inscription.tpl");
	}
	else {
		$login =  isset($_POST['silogin'])?($_POST['silogin']):'';
		$email =  isset($_POST['siemail'])?($_POST['siemail']):'';
		$mdp =  isset($_POST['simdp'])?($_POST['simdp']):'';
		if(identExists($login, $email)) {
			$msgAcc = "Le login et/ou le mail existe déjà";
			$_SESSION['msgAcc'] = $msgAcc;
			require('./vue/inscription/inscription.tpl');
		} else {
			signIn($login,$email,$mdp);
			$url = "./index.php?controle=connexion&action=ident";
			header("Location:" .$url);
		}
	}
	
	//var_dump($login );
	//var_dump($email);
	// IMPORTANT Rappel PDO
	//PDOStatement::prepare() et PDOStatement::execute()
	//pour préparer des requêtes et les exécuter qu'elles rendent OU PAS des lignes 
	
}
function identExists($login, $email) {
	//var_dump(verifLogin($login));
	//var_dump(verifEmail($email));
	require('./modele/utilisateurBD.php');
	if(verifLogin($login) || verifEmail($email)) {
		return true;
	} else {
		return false;
	}
}


?>