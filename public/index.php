<?php
session_start();


// si utlisateur veut se deconnecter la session qui contient tout c'est informationn sera detruite 
if(isset($_GET['status'])){
    session_destroy();
    unset($_SESSION);
}
use aps\router;

require "../vendor/autoload.php";
require_once "layout/layout.php";

//mon router il suffir que mais le lien
$voir = new router("/connexion","/","/panier","/inscription");
$voir->execute();

$title = "Accueil";

echo "<title>
 $title
</title>";


 ?>
 <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.2.6/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.2.6/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>