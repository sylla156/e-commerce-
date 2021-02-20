<?php

use aps\database\insere;
use aps\database\modifier;
use aps\database\suprimer;
use aps\database\take;
use aps\database\verifier;
use aps\redirection;

if (isset($_POST['nom']) and isset($_POST['password']) and isset($_POST['prenom']) and  isset($_POST['email']) and isset($_POST['reference'])) {

    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $reference = (int) $_POST['reference'];
    isset($_POST['type']) ? $type = $_POST['type'] : $type = null;

    if ($type == 'envoyer') {
        if (verifier::nom($nom) and  verifier::nom($prenom)  and verifier::email($email)  and verifier::password($password)) {

            $db = new modifier();
            $db->modifier_admin($nom, $prenom, $email, $password, $reference);
        } else {
            $alert = "<div class='shit'>
            <p>
                vos modification sont incorrect
            </p>
        </div>";
            echo $alert;
        }
    } else if ($type == "suprimer") {
        $db = new suprimer();
        $db->suprimer_admin($reference);
    } else if ($type == "envoyerUser") {
        if (isset($_POST['tel'])) {
            $tel = (int) $_POST['tel'];
            // dump(verifier::tel($tel),verifier::nom($nom),verifier::nom($prenom),verifier::email($email));
            if (verifier::nom($nom) and  verifier::nom($prenom)  and verifier::tel($tel) and verifier::email($email)) {
                $db = new modifier();
                $db->modifier_user($nom, $prenom, $email,$tel,$password,$reference);
            } else {
                $alert = "<div class='shit'>
                <p>
                    vos modification sont incorrect
                </p>
            </div>";
                echo $alert;
            }
        }
    } else if ($type == "ajouterUser") {
        if (isset($_POST['tel'])) {
            $tel = $_POST['tel'];
            dump(verifier::tel($tel));
            if ( verifier::reference($reference,"user") and verifier::nom($nom) and  verifier::nom($prenom)  and verifier::tel($tel)  and verifier::email($email)  and verifier::password($password)) {
                $db = new insere();
                $db->insereUser($reference,$nom,$prenom,$tel,$email,$password);
            }else {
                $alert = "<div class='shit'>
                <p>
                    vos modification sont incorrect
                </p>
            </div>";
                echo $alert;
            }
        }
    }else if ($type == "suprimerUser"){
        $db = new suprimer();
        $db->suprimer_user($reference);
    } 
    
    else {

        if (verifier::reference($reference,"admin") and verifier::nom($nom) and  verifier::nom($prenom)  and verifier::email($email)  and verifier::password($password)) {
            $db = new insere();
            $db->insere_admin($reference, $nom, $prenom, $email, $password);
        } else {
            $alert = "<div class='shit'>
            <p>
                vos donnees sont incorrectes
            </p>
        </div>";
            echo $alert;
        }
    }

    $takeAll_admin  = new take();
    $_SESSION["admin_ALL"] = $takeAll_admin->take_element_ALL();
    $takeAllUser = new take();
    $_SESSION['user'] = $takeAllUser->takeElementAllUser();
}
