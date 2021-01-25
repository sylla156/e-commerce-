<?php
session_start();

if(isset($_GET['status'])){
    session_destroy();
    unset($_SESSION);
}
use aps\router;

require "../vendor/autoload.php";
require_once "layout/layout.php";


$voir = new router("/connexion","/","/panier","/menu","/inscription");
$voir->execute();

$title = "Accueil";

echo "<title>
 $title
</title>";


 ?>