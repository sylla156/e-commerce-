<?php

use aps\connexion;
use aps\filters;
use aps\redirection;
if (isset($_POST['nom']) and isset($_POST['password']) and isset($_POST['prenom']) and  isset($_POST['email']) and isset($_POST['tel']) ){
    $email = $_POST['email'];
    $password = $_POST['password'];
    $prenom = $_POST['prenom'];
    $nom = $_POST['nom'];
    $tel = (int) $_POST['tel'];
    $db = new connexion();
    
    if(preg_match("/^[a-z ,.'-]+$/i",$nom)   and preg_match("/^[a-z ,.'-]+$/i",$prenom) and preg_match("/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/",$email)  and preg_match("/(?=.*[0-9])/",$password) ){
        
        $db->insere_p($nom,$prenom,$tel,$email,$password,);


        // c'est ici ma redirection vas se passe
        $redirect = redirection::redirect();
        $alert ="<div class=\"best\">
        <p>
            inscription perfect
        </p>
    </div>
    <script> 
    
    location.href = \"$redirect/connexion\";
    </script>";
    }

    else{
        $alert ="<div class=\"shit\">
        <p>
            vos donnees sont incorrectes
        </p>
    </div>";
    }
 

}