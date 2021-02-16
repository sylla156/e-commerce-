<?php

use aps\redirection;

if (isset($_SESSION['admin_info'])) {
    
    // pour le carousel
    $chemin_modele_admin = __DIR__ . "/../../modele/admin_modele/admin_modele.php";

    $chemin_view_admin = __DIR__ . "/../../view/admin_view/admin_view.php";


    
    require_once $chemin_modele_admin;
    require_once $chemin_view_admin;
} else {
    echo "<script>location.href='".redirection::redirect()."'</script>";
}
