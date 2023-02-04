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

    

    
?>