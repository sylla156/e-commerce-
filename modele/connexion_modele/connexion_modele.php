<?php

use aps\connexion;
use aps\filters;


if (isset($_POST['email']) and isset($_POST['password'])){
    $email = $_POST['email'];
    $password = $_POST['password'];

    $db = new connexion();
    $user_info = $db->verifie_p(filters::filters_email($email),(string)$password);

    if($user_info != false || $user_info != null){
        $_SESSION["user_info"] = $user_info;
        header("location:/");
    }else{
        $alert ="<div class=\"shit\">
        <p>
           email ou password incorrect
        </p>
    </div>";
    }
 

}