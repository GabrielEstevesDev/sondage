<?php 

function aRempliSondage(){
    $id = isset($_SESSION['id'])?($_SESSION['id']):NULL;
    require("./modele/utilisateurBD.php");
    return existSondage($id);
}

function accueil(){
    $id = isset($_SESSION['id'])?($_SESSION['id']):NULL;
    $veutResaisir = isset($_GET['resaisir'])?($_GET['resaisir']):NULL;
    $aSaisit = aRempliSondage();
    if($id==NULL){
        $url = "./?controle=connexion&action=ident";
        header("Location:". $url);
        
    }
    elseif($aSaisit==false || $veutResaisir==true) {
        $url = "./?controle=aliment&action=accueil";
        header("Location:". $url);
    }
    else {
        require("./vue/utilisateur/resultat.tpl");

}

}

?>