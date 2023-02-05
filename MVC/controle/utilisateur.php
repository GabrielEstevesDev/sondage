<?php 

function aRempliSondage(){
    $id = isset($_SESSION['id'])?($_SESSION['id']):NULL;
    require("./modele/utilisateurBD.php");
    return existSondage($id);
}

function accueil(){
  
    $bool = aRempliSondage();
    if($bool==false) {
        $url = "./?controle=aliment&action=accueil";
        header("Location:". $url);
    }
    else
        require("./vue/utilisateur/resultat.tpl");
    

}



?>