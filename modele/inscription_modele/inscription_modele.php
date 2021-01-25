<?php

use aps\connexion;
use aps\filters;


if (isset($_POST['nom']) and isset($_POST['password']) and isset($_POST['prenom']) and  isset($_POST['email']) ){
    $email = $_POST['email'];
    $password = $_POST['password'];
    $prenom = $_POST['prenom'];
    $nom = $_POST['nom'];

    $db = new connexion();
    
    if(preg_match("/^[a-z ,.'-]+$/i",$nom)   and preg_match("/^[a-z ,.'-]+$/i",$prenom) and preg_match("/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/",$email)  and preg_match("/(?=.*[0-9])/",$password) ){
        
        $db->insere_p($nom,$prenom,$email,$password);

        $alert ="<div class=\"best\">
        <p>
            inscription perfect
        </p>
    </div>
    <script> 
    location.href = \"http://localhost:8800/connexion\";
    alert('en plein dedans');
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