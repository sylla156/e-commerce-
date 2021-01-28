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