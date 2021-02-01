<?php
$title = "inscription";

echo "<title>
 $title
</title>";


$chemin1 = __DIR__."/../../modele/inscription_modele/inscription_modele.php";

$chemin2 = __DIR__."/../../view/inscription_view/inscription_view.php";


require_once $chemin1;  


require_once $chemin2;