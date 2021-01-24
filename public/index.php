 <?php
 session_start();
use aps\router;

require "../vendor/autoload.php";
require_once "layout/layout.php";

dump($_SESSION);

$voir = new router("/connexion","/","/panier","/menu");
$voir->execute();

$title = "Accueil";

echo "<title>
 $title
</title>";




 ?>