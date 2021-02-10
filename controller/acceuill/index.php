<?php

// pour le carousel
$chemin_carousel_1 = __DIR__ . "/../../modele/carousel_modele/carousel_modele.php";

$chemin_carousel_2 = __DIR__ . "/../../view/carousel_view/carousel_view.php";


// pour les articles 
$chemin_article_1 = __DIR__ . "/../../modele/article_modele/article_modele.php";

$chemin_article_2 = __DIR__ . "/../../view/article_view/article_view.php";


require_once $chemin_carousel_1;
require_once $chemin_article_1;

?>
<div class="resize-bloc">
    <div>
        <?php require_once $chemin_carousel_2; ?>
        <?php require_once $chemin_article_2; ?>
       
    </div>
    
</div>