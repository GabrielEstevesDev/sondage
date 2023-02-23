<!DOCTYPE html>
<html>

<head>
    <title>PDF</title>
    <meta charset="UTF-8">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="./vue/utilisateur/js/print.js"></script>
        <style>
        .titre {
            color: black;
            padding-top: 10px;
        }

        .div-choix {
            background: none;
            width: fit-content;
        }

        .choix {
            color: black;
            display: block;
        }

        .wrapper {
            min-height: 90vh;
        }

        .scoresPdf {
            min-height: 50vh;
        }

        .holder {
            margin-left: auto;
            margin-right: auto;
        }

        .title {
            font-size: 3.5rem;
            border-bottom: none;
        }

        .soustitre {
            font-size: 2rem;
        }

        @media print {
            * {
                -webkit-print-color-adjust: exact !important;
                /* Chrome, Safari 6 – 15.3, Edge */
                color-adjust: exact !important;
                /* Firefox 48 – 96 */
                print-color-adjust: exact !important;
                /* Firefox 97+, Safari 15.4+ */
            }
        }
    </style>
    
</head>

<body>
    <h1 class="Titre" id="nom"></h1>
    <h1 class="Titre" >Revlevé de vos choix</h1>
    <?php require("./vue/utilisateur/page.tpl"); ?>
</body>

</html>