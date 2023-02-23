<?php

	$id = $_SESSION['id'];

	require('./modele/connectSQL.php'); //$pdo est défini dans ce fichier
		$sql="SELECT Aliment1,Aliment2,Aliment3,Aliment4,Aliment5,Aliment6,Aliment7,Aliment8,Aliment9,Aliment10 FROM `sondage` WHERE Administre=:id";
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

		foreach ($resultat[0] as $val) {
			$sql="SELECT getPreference(:alim_code)";
			try {
				$commande = $pdo->prepare($sql);
				$commande->bindParam(':alim_code', $val);
				$bool = $commande->execute();
				if ($bool) {
					$preferences = $commande->fetchAll(PDO::FETCH_ASSOC); //tableau d'enregistrements
				}
			}
			catch (PDOException $e) {
				echo "Echec de select";
				die(); // On arrête tout.
			}

			array_push($res, $preferences[0]["getPreference('" . $val . "')"]);
			//var_dump($preferences[0]["getPreference('" . $val . "')"]);
		}

		$values = array_count_values($res);
		echo(json_encode($values));
?>