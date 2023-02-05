<?php
    function insertSondage($tabAlim){
        $id = isset($_SESSION['id'])?($_SESSION['id']):NULL;
        $nom = isset($_SESSION['login'])?($_SESSION['login']):NULL;
        require('./modele/connectSQL.php'); //$pdo est défini dans ce fichier
        $sql="INSERT INTO `sondage` (`Administre`, `Nom`, `Aliment1`, `Aliment2`, `Aliment3`, `Aliment4`,  `Aliment5`, `Aliment6`, `Aliment7`, `Aliment8`, `Aliment9`, `Aliment10`) VALUES
            (:id, :nom, :aliment1,:aliment2,:aliment3,:aliment4,:aliment5,:aliment6,:aliment7,:aliment8,:aliment9,:aliment10); ";
		try {
			$commande = $pdo->prepare($sql);
            $commande->bindParam(':id', $id);
            $commande->bindParam(':nom', $nom);
            $commande->bindParam(':aliment1', $tabAlim[0]["code"]);
            $commande->bindParam(':aliment1', $tabAlim[0]["code"]);
            $commande->bindParam(':aliment2', $tabAlim[1]["code"]);
            $commande->bindParam(':aliment3', $tabAlim[2]["code"]);
            $commande->bindParam(':aliment4', $tabAlim[3]["code"]);
            $commande->bindParam(':aliment5', $tabAlim[4]["code"]);
            $commande->bindParam(':aliment6', $tabAlim[5]["code"]);
            $commande->bindParam(':aliment7', $tabAlim[6]["code"]);
            $commande->bindParam(':aliment8', $tabAlim[7]["code"]);
            $commande->bindParam(':aliment9', $tabAlim[8]["code"]);
            $commande->bindParam(':aliment10', $tabAlim[9]["code"]);
			$bool = $commande->execute();
            if ($bool) {
				$resultat = $commande->fetchAll(PDO::FETCH_ASSOC); //tableau d'enregistrements
			}
		}
		catch (PDOException $e) {
			echo "Vous avez déja rempli le sondage";
			die(); // On arrête tout.
		}
    }
?>