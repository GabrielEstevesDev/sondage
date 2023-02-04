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
        <nav id="navbar" style="position: fixed; top: 0px; left: 50%; transform: translateX(-50%);">
            <div id="logo">
                <img src="./img/logo beauvaisis.png" alt="Logo Beauvaisis">
            </div>
            <div class="menu">
                <ul class="left">
                    <li><a href="">accueil</a></li>
                    <li><a href=""> actualités</a></li>
                    <li><a href="../tourisme/Tourisme.html">tourisme &amp; culture</a></li>
                    <li><a href="">logement &amp; études</a></li>
                </ul>
                <ul class="right">
                    <li><a href="https://fr-fr.facebook.com/beauvaisis/"><i class="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li><a href="https://twitter.com/agglobeauvaisis"><i class="fa-brands fa-twitter"></i></a></li>
                </ul>

            </div>
            <ul class="toogle">
                <li class="ouvrir"><i class="fa-solid fa-bars"></i></li>
                <li class="fermer"><i class="fa-solid fa-circle-xmark"></i></li>
            </ul>
        </nav>
    </header>
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

</body>

</html>