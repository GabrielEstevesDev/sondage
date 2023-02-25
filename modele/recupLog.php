<?php
/*$id = $_GET['id'];
require('./connectSQL.php'); //$pdo est défini dans ce fichier
		$sql="SELECT email FROM  `utilisateur` WHERE id=:id";
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

//$nom=$_SESSION['msgAcc'];
//var_dump($_SESSION['msgAcc']);*/
echo ($_SESSION['msgAcc']);
?>