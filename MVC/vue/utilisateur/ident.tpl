<!DOCTYPE HTML>
<html lang="fr">
<meta charset="UTF-8">

<head>
    <title>PROJET WEB</title>
    <link rel="stylesheet" href="./Css/ident.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script src="./js/srcipt.js"></script>
</head>

<body>
    <header>
        <?php require("./vue/navbar/navbar.tpl"); ?>
    </header>
    <div class="page">
        <div class="form">
            <h1 class="Titre">Se connecter</h1>
            <form action="./index.php?controle=connexion&action=ident" method="post">
                <label for="cologin">Login/email</label><br>
                <input type="text" id="cologin" name="cologin" value="" required><br>
                <label for="comdp">Mot de passe</label><br>
                <input type="password" id="comdp" name="comdp" value="" required><br><br>
                <input class="BtnInput" type="submit" value="Connexion">
            </form>
            <div><?php if(isset($msg)) echo $msg;?></div>
        </div>

        <div class="form" id="inscription">
            <h1 class="Titre">S'inscrire</h1>
            <form action="./index.php?controle=inscription&action=inscription" method="post">
                <label for="silogin">Login</label><br>
                <input type="text" id="silogin" name="silogin" value="" required><br>
                <label for="siemail">Email</label><br>
                <input type="email" id="siemail" name="siemail" value="" required><br>
                <label for="simdp">Mot de passe</label><br>
                <input type="password" id="simdp" name="simdp" value="" required><br><br>
                <input class="BtnInput" type="submit" value="Inscription">
            </form>
            <div><?php echo $msgAcc;?></div>
        </div>
    </div>

</body>

</html>