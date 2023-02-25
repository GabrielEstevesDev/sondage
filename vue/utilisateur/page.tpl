<link rel="stylesheet" href="./vue/utilisateur/css/resultat.css">
    <link rel="stylesheet" href="./vue/utilisateur/css/hist_chart.css">
    <script src="./vue/utilisateur/js/hist_chart.js"></script>
    <link rel="stylesheet" href="./vue/utilisateur/css/pie_chart.css">
    <script src="./vue/utilisateur/js/pie_chart.js"></script>
<div class="page">
        <div class="blur">
            <section>
                <div class="wrapper">
                <div class="pie-charts">
                    <div class="pieID--micro-skills pie-chart--wrapper">
                        <h2 class="titre">Vos préférences alimentaires</h2>
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
            </section>
            <section id="containchoix">
                <?php require("./vue/utilisateur/choix.tpl"); ?>
                <?php require("./vue/utilisateur/scores.tpl"); ?>
            </section>
            <section>
                <?php require("./vue/charts/hist_chart.tpl"); ?>
            </section>
        </div>
    </div>