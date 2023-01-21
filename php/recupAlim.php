<?php
		require('./connectSQL.php'); //$pdo est défini dans ce fichier
        $name =  isset($_GET['name'])?($_GET['name']):'';
		
		$sql="SELECT * FROM `aliments` WHERE alim_nom_fr LIKE '%$name%'";
		try {
			$commande = $pdo->prepare($sql);
			$bool = $commande->execute();
			if ($bool) {
				$resultat = $commande->fetchAll(PDO::FETCH_ASSOC); //tableau d'enregistrements
				//var_dump($resultat); 
				//die();
				/*while ($ligne = $commande->fetch()) { // ligne par ligne
					print_r($ligne);
				}*/
			}
		}
		catch (PDOException $e) {
			echo "Echec de select";
			die(); // On arrête tout.
		}
		echo json_encode($resultat);
?>