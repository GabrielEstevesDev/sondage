<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sondage Beuvaisis</title>
    <link rel="stylesheet" href="./vue/Aliments/datalist.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
    integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/pdfmake@0.1.67/build/pdfmake.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/pdfmake@0.1.67/build/vfs_fonts.js"></script>
    <script src="./vue/Aliments/js/script.js"></script>
</head>

<body id="body">
    <?php require("./vue/navbar/navbar.tpl"); ?>
    <div id="page">
        <div class="blur">
            <div class="listealim">
                <form>
                    <fieldset>
                        <label>Aliments</label>
                        <input autocomplete="off" role="combobox" list="" id="input" name="browsers"
                        placeholder="Choisissez vos aliments">

                        <datalist id="browsers" role="listbox">
                            <?php 
                                foreach($resultat as $value){
                                    echo ("<option id=$value[alim_code] value=$value[alim_nom_fr]>$value[alim_nom_fr]</option>");
                                }
                            ?>
                        </datalist>
                    </fieldset>
                    <input id="submit" type="submit" value="">
                </form>
                <button id="choisir" class="button ajout">Ajouter</button>
                <div id="aliments">
                    <table>
                        <thead id="names">
                            <tr>
                                <th>N°</th>
                                <th>Nom</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        <tbody id="insert">
                        </tbody>
                    </table>
                </div>
            </div>
            <section>
                <?php require("./vue/charts/hist_chart.tpl"); ?>
            </section>
        </div>
    </div>
</body>
<script src="./vue/Aliments/js/datalist.js"></script>
</html>