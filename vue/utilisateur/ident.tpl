<!DOCTYPE HTML>
<html lang="fr">
<meta charset="UTF-8">

<head>
    <title>PROJET WEB</title>
    <link rel="stylesheet" href="./vue/utilisateur/css/ident.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="./vue/utilisateur/js/form.js"></script>
</head>

<body>
    <header>
        <?php require("./vue/navbar/navbar.tpl"); ?>
    </header>
    <div id="page">
        <div class="form">
            <h1 class="Titre">Se connecter</h1>
            <form action="./index.php?controle=connexion&action=ident" method="post">
                <label for="cologin">Login/email</label><br>
                <input type="text" id="cologin" name="cologin" value="" required><br>
                <label for="comdp">Mot de passe</label><br>
                <input type="password" id="comdp" name="comdp" value="" required><br><br>
                <input class="BtnInput" type="submit" value="Connexion">
            </form>
            <div class="msgImportant"><?php if(isset($msg)) echo $msg;?></div>
        </div>

        <div class="form" id="inscription">
            <h1 class="Titre">S'inscrire</h1>
            <form action="./index.php?controle=inscription&action=inscription" method="post">
                <label for="silogin"> <input type="text" id="silogin" name="silogin" placeholder="Login"><br></label>
                <p class="msg" id="msgLogin"></p>
                <label for="siemail"> <input type="email" id="siemail" name="siemail" value=""
                        placeholder="Email"><br></label>
                <p class="msg" id="emailmsg"></p>
                <div id="mdpvue">

                    <label class="labelmdp">
                        <input type="password" id="inputmdp" name="simdp" placeholder="Mot de passe">

                        <div class="password-icon">
                            <i class="fa-regular fa-eye"></i>
                            <i class="fa-regular fa-eye-slash"></i>
                        </div>
                    </label>
                    <p class="msg" id="msgPass"></p>
                    <label class="labelmdp">
                        <input type="password" id="confirmmdp" name="simdp" placeholder="Confirmez le mot de passe">
                        <div class="password-icon">
                            <i class="fa-regular fa-eye"></i>
                            <i class="fa-regular fa-eye-slash"></i>
                        </div>
                    </label>
                    <p class="msg" id="msgConfirmPass"></p>
                </div>


                <input id="btnInput" type="submit" value="Inscription">
            </form>
            <div class="msgImportant"><?php echo $msgAcc;?></div>
        </div>
    </div>
</body>



</html>