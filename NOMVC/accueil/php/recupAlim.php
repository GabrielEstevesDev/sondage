<?php
		require('../../connectSQL.php'); //$pdo est défini dans ce fichier
		$sql="SELECT * FROM `aliments`";
		try {
			$commande = $pdo->prepare($sql);
			$bool = $commande->execute();
			if ($bool) {
				$resultat = $commande->fetchAll(PDO::FETCH_ASSOC); //tableau d'enregistrements
			}
		}
		catch (PDOException $e) {
			echo "Echec de select";
			die(); // On arrête tout.
		}
		$_SESSION['resultat'] = $resultat;
		$tabAlim=array();
		$_SESSION['tabAlim'] = $tabAlim;
		require("../index.tpl");
		// $url = "../index.tpl";
		// header("Location:" . $url) ;
	
?>