<?php
function envoyer10alim(){

    $id = isset($_SESSION['id'])?($_SESSION['id']):NULL;
    $tabAlimCode = isset($_POST["array"])?($_POST["array"]):NULL;
    echo($tabAlimCode);
    if($id == NULL) { // si l'utilisateur n'est pas connecter on le renvoit sur la page de connexion
        $url = "./?controle=connexion&action=ident";
       header("Location:". $url);
    }
    else if ($tabAlimCode == NULL){ // si le formulaire n'est pas saisit on renvoit sur la page de saisis
       require("./modele/recupAlim.php");
        recupAlim();
}
    else{
    $tabAlim = array();
    foreach($tabAlimCode as $code){
        require("./modele/envoyerAlim.php");
        Recup10Alim($code,$tabAlim);
    }
    $_SESSION["tabAlim"]=$tabAlim;
    require("./modele/envoyerAlim.php");
    insertSondage(); // on insert la ligne dans sondage 
    require("./vue/Aliments/alimChoisis.tpl");
}
}

function accueil(){
    require("./modele/recupAlim.php");
    $resultat=recupAlim();
    require("./vue/Aliments/Aliment.tpl");
}


?>