<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
    integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="./vue/navbar/navbar.css">
<nav id="navbar">
    <div id="logo">
        <img src="./assets/img/logo beauvaisis.png" alt="Logo Beauvaisis">
    </div>
    <div class="menu">
        <ul class="left">
            <li><a href="./index.php?action=accueil&controle=pages/accueil">accueil</a></li>
            <li><a href="./index.php?action=actualites&controle=pages/actualites">actualités</a></li>
            <li><a href="./index.php?action=tourisme&controle=pages/tourisme">tourisme & culture</a></li>
            <li><a href="./index.php?action=logement&controle=pages/logement">logement & études</a></li>
            <li><a href="./index.php?action=accueil&controle=utilisateur">sondage</a></li>
            <?php 
            if(isset($_SESSION['login']) && isset($_SESSION['login'])!=NULL)
            echo("<li id='connected'>
                    <a href='./index.php'>
                        <i class='fa-regular fa-user'></i>
                        ".$_SESSION['login']."
                    </a>
                    <ul>
                        <li id='deconnexion'>
                            <a href='./index.php?action=deconnexion&controle=logout'>déconnexion</a>
                        </li>
                    </ul>
                </li>"); 
            else 
            echo("<li><a href='./index.php'>connexion</a></li>");
             ?>
        </ul>
        <ul class="right">
            <li><a href="https://fr-fr.facebook.com/beauvaisis/" target="_blank"><i
                        class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/agglobeauvaisis" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            </li>
            <li><a href="https://fr.linkedin.com/company/communaute-d-agglomeration-du-beauvaisis" target="_blank"><i
                        class="fa-brands fa-linkedin-in"></i></a></li>
        </ul>

    </div>
    <ul class="toogle">
        <li class="ouvrir"><i class="fa-solid fa-bars"></i></li>
        <li class="fermer"><i class="fa-solid fa-circle-xmark"></i></li>
    </ul>
</nav>