<?php

use aps\database\insere;
use aps\database\verifier;
use aps\database\take;
use aps\filters;
use aps\redirection;


if (isset($_POST['nom']) and isset($_POST['password']) and isset($_POST['password_test']) and isset($_POST['prenom']) and  isset($_POST['email']) and isset($_POST['tel']) ){
    
    
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password_test = $_POST['password_test'];
    $prenom = $_POST['prenom'];
    $nom = $_POST['nom'];
    $tel =  $_POST['tel'];
   
    $db = new insere();
    
    if(verifier::nom($nom) and  verifier::nom($prenom)  and verifier::tel($tel)  and verifier::email($email)  and verifier::passwordAll($password,$password_test)){
        $tel = (int)$tel;
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

    else if (verifier::email($email) == true){
        $alert ="<div class=\"shit\">
        <p>
            vos donnees sont incorrectes
        </p>
    </div>";
    }

    else if (verifier::email($email) == false){
        $alert ="<div class=\"shit\">
        <p>
            email deja utiliser ou incorrect
        </p>
        </div>";
        }

 

}