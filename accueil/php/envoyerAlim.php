<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
    $id = isset($_SESSION['id'])?($_SESSION['id']):NULL;
    $tabAlimCode = isset($_POST["array"])?($_POST["array"]):NULL;
    if($id == NULL) { // si l'utilisateur n'est pas connecter on le renvoit sur la page de connexion
        $url = "../../connexion/ident.php";
       header("Location:". $url);
    }
    else if ($tabAlimCode == NULL){ // si le formulaire n'est pas saisit on renvoit sur la page de saisis
        $url = "./recupAlim.php";
        header("Location:". $url);
    }
    else{
        $tabAlim = array(); //initialisation du tableau contenant les aliments
        foreach($tabAlimCode as $code){
            Recup10Alim($code,$tabAlim); // on recupère chaque aliment avec son code
        }
        $_SESSION["tabAlim"]=$tabAlim;
        insertSondage(); // on insert la ligne dans sondage 
        require("./alimChoisis.tpl");
    }

    function Recup10Alim($code,&$tabAlim){
        require("../../connectSQL.php");
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

    function insertSondage(){
        $id= $_SESSION['id'];
        $nom=	$_SESSION['login'];
        $tabAlim =$_SESSION["tabAlim"];
        require("../../connectSQL.php");
        $sql="INSERT INTO `sondage` (`Administre`, `Nom`, `Aliment1`, `Aliment2`, `Aliment3`, `Aliment4`,  `Aliment5`, `Aliment6`, `Aliment7`, `Aliment8`, `Aliment9`, `Aliment10`) VALUES
            ($id, '$nom', :aliment1,:aliment2,:aliment3,:aliment4,:aliment5,:aliment6,:aliment7,:aliment8,:aliment9,:aliment10); ";
		try {
			$commande = $pdo->prepare($sql);
            $commande->bindParam(':aliment1', $tabAlim[0]["alim_code"]);
            $commande->bindParam(':aliment2', $tabAlim[1]["alim_code"]);
            $commande->bindParam(':aliment3', $tabAlim[2]["alim_code"]);
            $commande->bindParam(':aliment4', $tabAlim[3]["alim_code"]);
            $commande->bindParam(':aliment5', $tabAlim[4]["alim_code"]);
            $commande->bindParam(':aliment6', $tabAlim[5]["alim_code"]);
            $commande->bindParam(':aliment7', $tabAlim[6]["alim_code"]);
            $commande->bindParam(':aliment8', $tabAlim[7]["alim_code"]);
            $commande->bindParam(':aliment9', $tabAlim[8]["alim_code"]);
            $commande->bindParam(':aliment10', $tabAlim[9]["alim_code"]);
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