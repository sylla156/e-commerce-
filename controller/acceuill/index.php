<?php


$chemin1 = __DIR__."/../../modele/carousel_modele/carousel_modele.php";

$chemin2 = __DIR__."/../../view/carousel_view/carousel_view.php";


require_once $chemin1;  

?>
<div class="resize-bloc">
    <div>
        <?php  require_once $chemin2; ?>
        
    </div>

</div>