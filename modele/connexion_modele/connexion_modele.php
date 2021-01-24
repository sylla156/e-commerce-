<?php

use aps\connexion;
use aps\filters;

if (isset( $_SESSION["email"]) and isset($_SESSION["password"])){
    $email = $_SESSION["email"];
    $password = $_SESSION["password"];
}

/*
if (isset($email) and isset($password )){
    $db = new connexion();
    $user = $db->verifie_p(filters::filters_email($email),(string)$password);
    if ($user != false){
        $_SESSION["user"]  =  $user;
    }

};


dump($_SESSION);*/