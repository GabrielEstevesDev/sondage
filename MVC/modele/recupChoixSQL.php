<?php
	
	$id = $_GET["id"];

	require('./connectSQL.php'); //$pdo est défini dans ce fichier
	$sql="SELECT Aliment1,Aliment2,Aliment3,Aliment4,Aliment5,Aliment6,Aliment7,Aliment8,Aliment9,Aliment10 FROM `sondage` WHERE Administre=:id";
	try {
		$commande = $pdo->prepare($sql);
		$commande->bindParam(':id', $id);
		$bool = $commande->execute();
		if ($bool) {
			$choix = $commande->fetchAll(PDO::FETCH_ASSOC); //tableau d'enregistrements
		}
	}
	catch (PDOException $e) {
		echo "Echec de select";
		die(); // On arrête tout.
	}

	$resultat = array();

	foreach ($choix[0] as $val) {
		require('./connectSQL.php'); //$pdo est défini dans ce fichier
		$sql="SELECT alim_nom_fr FROM `aliments` WHERE alim_code=:id";
		try {
			$commande = $pdo->prepare($sql);
			$commande->bindParam(':id', $val);
			$bool = $commande->execute();
			if ($bool) {
				$alim = $commande->fetchAll(PDO::FETCH_ASSOC); //tableau d'enregistrements
			}
		}
		catch (PDOException $e) {
			echo "Echec de select";
			die();
		}

		array_push($resultat,$alim[0]);
	}

	echo(json_encode($resultat,JSON_UNESCAPED_UNICODE));
?>