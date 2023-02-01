<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sondage Beuvaisis</title>
    <link rel="stylesheet" href="../datalist.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="../js/script.js"></script>
</head>

<body>
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
       		<table >
			<thead>
				<tr>
					<th>Numéro</th>
					<th>Nom</th>
				</tr>
			</thead>
			<tbody id="insert">
			</tbody>
		</table>

    </div>
</body>
<script src="../js/datalist.js"></script>

</html>