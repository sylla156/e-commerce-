<?php

use aps\redirection;

session_start();


// si utlisateur veut se deconnecter la session qui contient tout c'est informationn sera detruite 
if(isset($_GET['status'])){
    if ($_GET['status'] == "yes"){
        session_destroy();
        unset($_SESSION);
    }
}
if(isset($_GET['status'])){
    if($_GET['status'] == "quit"){
        session_destroy();
        unset($_SESSION);
        echo "<script>windown.location.reload()</script>";

    }
}
use aps\router;

require "../vendor/autoload.php";
require_once "layout/layout.php";

//mon router il suffir que mais le lien
$voir = new router("/connexion","/","/panier","/inscription","/admin");
$voir->execute();

$title = "Accueil";
echo "<title>
 $title
</title>";


 ?>
 