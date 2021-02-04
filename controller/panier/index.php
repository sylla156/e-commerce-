<?php
$title = "panier";

echo "<title>
 $title
</title>";



$chemin1 =  __DIR__."/../../modele/panier_modele/panier_modele.php";
$chemin2 = __DIR__."/../../view/panier_view/panier_view.php";

require_once $chemin1;

require_once $chemin2;
?>