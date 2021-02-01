<?php
$title = "connexion";

echo "<title>
 $title
</title>";


$chemin1 = __DIR__."/../../modele/connexion_modele/connexion_modele.php";

$chemin2 = __DIR__."/../../view/connexion_view/connexion_view.php";

require_once $chemin1;  

require_once $chemin2;