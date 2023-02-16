<?php
	require('connectSQL.php'); //$pdo est défini dans ce fichier
		$sql="SELECT Aliment1,Aliment2,Aliment3,Aliment4,Aliment5,Aliment6,Aliment7,Aliment8,Aliment9,Aliment10 FROM `sondage`";
		try {
			$commande = $pdo->prepare($sql);
			$bool = $commande->execute();
			if ($bool) {
				$identifiants = $commande->fetchAll(PDO::FETCH_ASSOC); //tableau d'enregistrements

			}
		}
		catch (PDOException $e) {
			echo "Echec de select";
			die(); // On arrête tout.
		}

		$res = array();

		for ($i=1; $i < 12; $i++) { 
			$res[$i] = 0;
		}

		for($i = 0; $i < count($identifiants); $i++)
			foreach ($identifiants[$i] as $val) {
				$sql="SELECT alim_grp_code FROM aliments WHERE alim_code=:alim_code";
				try {
					$commande = $pdo->prepare($sql);
					$commande->bindParam(':alim_code', $val);
					$bool = $commande->execute();
					if ($bool) {
						$categories = $commande->fetchAll(PDO::FETCH_ASSOC); //tableau d'enregistrements
					}
				}
				catch (PDOException $e) {
					echo "Echec de select";
					die(); // On arrête tout.
				}

				$res[$categories[0]["alim_grp_code"]] = $res[$categories[0]["alim_grp_code"]]+1;
				
			}
		echo(json_encode($res));
?>