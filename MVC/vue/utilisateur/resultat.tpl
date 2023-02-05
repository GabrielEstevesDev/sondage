<!DOCTYPE HTML>
<html lang="fr">
<meta charset="UTF-8">

<head>
    <title>accueil</title>
    <link rel="stylesheet" href="./Css/ident.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="./vue/utilisateur/css/hist_chart.css">
    <script src="./vue/utilisateur/js/hist_chart.js"></script>
    
    <link rel="stylesheet" href="./vue/utilisateur/css/pie_chart.css">
    <script src="./vue/utilisateur/js/pie_chart.js"></script>
</head>
<body>
    <header>
        <?php require("./vue/navbar/navbar.tpl"); ?>
    </header>
    <div class="page">
        <div class="wrapper">
            <div class="pie-charts">
                <div class="pieID--micro-skills pie-chart--wrapper">
                    <h2>Vos préférences alimentaires</h2>
                    <div class="pie-chart">
                        <div class="pie-chart__pie"></div>
                        <ul class="pie-chart__legend">
                            <li><em class="prefem bio">Bio</em><span class="prefspan bio">0</span></li>
                            <li><em class="prefem casher">Casher</em><span class="prefspan casher">0</span></li>
                            <li><em class="prefem halal">Halal</em><span class="prefspan halal">0</span></li>
                            <li><em class="prefem vegan">Vegan</em><span class="prefspan vegan">0</span></li>
                            <li><em class="prefem autres">Autres</em><span class="prefspan autres">0</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <?php require("./vue/charts/hist_chart.tpl"); ?>
    </div>
</body>
</html>