<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sondage Beuvaisis</title>
    <script src="./js/script.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body>
    <form action="/action_page.php">
        <label for="fname">Prenom</label>
        <input type="text" id="fname" name="fname"><br><br>
        <label for="lname">Nom</label>
        <input type="text" id="lname" name="lname"><br><br>
        <label for="lname">Aliment1</label>
        <input type="text" id="alim" name="lname"><br><br>
        <h1 class="Titre">Amis</h1>

        <br><?php
            if (count($amis) != 0) {
                echo ("<h2>Voici la liste de vos amis :</h2><br>");
                echo ('<table id="TableAmis">');
                echo ('<tr><th> PSEUDO </th> <th> MAIL </th> <th> SCORE TOTAL </th> <th> MEILLEUR      
                SCORE             
                </th> <th> SUPPRIMER </th></tr>');
                foreach ($amis as $u) {
                    $fid = $u[0]['id'];
                    echo "<tr class='contact' id='ami$fid'>";
                    echo ("<td> <div class='td'>" . utf8_encode($u[0]['login']) . "</div></td>");
                    echo ("<td> <div class='td'>" . utf8_encode($u[0]['email']) . "</div></td>");
                    echo ("<td> <div class='td'>" . utf8_encode($u[0]['scoreTotal']) . "</div></td>");
                    echo ("<td> <div class='td'>" . utf8_encode($u[0]['meilleurScore']) . "</div></td>");
                    echo ("<td><div class='supprimer' name='$fid'>Supprimer</div></td>");
                    echo "</tr>";
                }
                echo ('</table>');
            } else echo ("Vous n'avez pas encore ajouté d'amis");
        ?>
        <input type="submit" value="Submit">
    </form>
</body>

</html>