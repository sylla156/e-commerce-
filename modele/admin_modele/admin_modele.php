<?php

use aps\database\insere;
use aps\database\modifier;
use aps\database\suprimer;
use aps\database\take;
use aps\database\verifier;
use aps\redirection;

if (isset($_POST['nom']) and isset($_POST['password']) and isset($_POST['prenom']) and  isset($_POST['email']) and isset($_POST['reference'])){
    
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $reference = (int) $_POST['reference'];
    isset($_POST['type'])?$type = $_POST['type']:$type=null;

    if($type == 'envoyer'){

        $db = new modifier();
        $db->modifier_admin($nom,$prenom,$email,$password,$reference);
       
    }

    else if ($type == "suprimer"){
        $db = new suprimer();
        $db->suprimer_admin($reference);
        
    }
    
    else {

        if(verifier::reference($reference) and verifier::nom($nom) and  verifier::nom($prenom)  and verifier::email($email)  and verifier::password($password)){
            $db = new insere();
            $db->insere_admin($reference,$nom,$prenom,$email,$password);           
        }
    
        else{
            $alert ="<div class='shit'>
            <p>
                vos donnees sont incorrectes
            </p>
        </div>";
        echo $alert;
        }
    }

    $takeAll_admin  = new take();
    $_SESSION["admin_ALL"] = $takeAll_admin->take_element_ALL();

}
