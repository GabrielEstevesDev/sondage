<!DOCTYPE HTML>
<html lang="fr">
<meta charset="UTF-8">

<head>
    <title>accueil</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="./vue/utilisateur/css/settings.css">

</head>

<body>
    <header>
        <?php require("./vue/navbar/navbar.tpl"); ?>
    </header>
    <a href="./index.php?controle=utilisateur&action=accueil&resaisir=true">
        <button>Refaire le sondage</button></a>
    <a href="./index.php?action=pdf&controle=pages/pdf" target="_blank"><button id="pdf"> PDF</button></a>
    <?php require("./vue/utilisateur/page.tpl"); ?>

</body>

</html>