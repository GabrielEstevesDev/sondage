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
function getScore(){
    require("./modele/recupScoresSQL.php");
}
function recupSondage(){
    require("./modele/recupSondageSQL.php");
}
function getId(){
    echo $_SESSION['id'];
}
function recupChoix(){
    require("./modele/recupChoixSQL.php");
}
?>