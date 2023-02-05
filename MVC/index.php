<?php
session_start();
$controle = isset($_GET['controle'])?($_GET['controle']):NULL;
$action = isset($_GET['action'])?($_GET['action']):NULL;
if($controle == NULL || $action == NULL){
    require(("./controle/connexion.php"));
    ident();
}
else {
    require ("./controle/" . $controle . ".php");
    $action();
}
?>