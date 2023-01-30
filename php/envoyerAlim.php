<?php

    $tabAlimCode = isset($_POST["array"])?($_POST["array"]):NULL;
    $tabAlim = array();
    foreach($tabAlimCode as $code){
        Recup10Alim($code,$tabAlim);
    }
    $_SESSION["tabAlim"]=$tabAlim;
    require("./alimChoisis.tpl");



    function Recup10Alim($code,&$tabAlim){
        require("../connectSQL.php");
        $sql="SELECT * FROM `aliments` where alim_code=:code";
		try {
			$commande = $pdo->prepare($sql);
            $commande->bindParam(':code', $code);
			$bool = $commande->execute();
			if ($bool) {
				$resultat = $commande->fetchAll(PDO::FETCH_ASSOC); //tableau d'enregistrements
			}
		}
		catch (PDOException $e) {
			echo "Echec de select";
			die(); // On arrête tout.
		}
        array_push($tabAlim,$resultat[0]);
    }
?>