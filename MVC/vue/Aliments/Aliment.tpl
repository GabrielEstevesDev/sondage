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
    <form>
    <input type=button name=print value="Print" onClick="window.print()">
</form>
        <form>
            <fieldset>
                <legend>
                    Datalist Form
                </legend>
                <label>Select Browser</label>
                <input autocomplete="off" role="combobox" list="" id="input" name="browsers"
                    placeholder="Select your fav browser">
                <!-- Its important that you keep list attribute empty to hide the default dropdown icon and the browser's default datalist -->

                <datalist id="browsers" role="listbox">
                    <?php 
                        foreach($resultat as $value){
                        echo ("<option id=$value[alim_code] value=$value[alim_nom_fr]>$value[alim_nom_fr]</option>");
                        }
                    ?>
                </datalist>
                <!--     <br>
                <br>
                <label for="pwd"> Password </label>
                <input id="pwd" type="password">
                 -->
            </fieldset>
            <input id="submit" type="submit" value="">
        </form>
        <button id="choisir">Choisir</button>
        <div id="aliments">
            <table>
                <thead>
                    <tr>
                        <th>Numéro</th>
                        <th>Nom</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody id="insert">
                </tbody>
            </table>

        </div>
    </div>
</body>
<script src="./vue/Aliments/js/datalist.js"></script>
<!-- <script src="./vue/Aliments/js/pdf.js"></script> -->

</html>