<?php
use aps\database\modifier;
use aps\database\verifier;
use aps\database\take;
use aps\redirection;

if (isset($_POST['nom']) and isset($_POST['password']) and isset($_POST['prenom']) and  isset($_POST['email']) and isset($_POST['reference'])){

    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $reference = $_POST['reference'];
    $db = new modifier();
    $db->modifier_admin($nom,$prenom,$email,$password,$reference);
    $takeAll_admin  = new take();
    $_SESSION["admin_ALL"] = $takeAll_admin->take_element_ALL();
    

}
