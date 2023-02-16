<?php

	$id = $_GET['id'];

	require('connectSQL.php');
		$sql="SELECT NutriScore,ScoreSante FROM `sondage` WHERE Administre=:id";
		try {
			$commande = $pdo->prepare($sql);
			$commande->bindParam(':id', $id);
			$bool = $commande->execute();
			if ($bool) {
				$resultat = $commande->fetchAll(PDO::FETCH_ASSOC); //tableau d'enregistrements

			}
		}
		catch (PDOException $e) {
			echo "Echec de select";
			die(); // On arrête tout.
		}

		//var_dump($resultat);

		$res = array();
		$res["nutriscore"] = $resultat[0]["NutriScore"];
		$res["scoresante"] = $resultat[0]["ScoreSante"];

		echo(json_encode($res));
?>