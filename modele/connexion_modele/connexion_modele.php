<?php

use aps\database\take;
use aps\database\verifier;
use aps\filters;
use aps\redirection;

if (isset($_POST['admin'])) {

    $db = new verifier();
    if ($_POST['admin'] == "user") {

        if (isset($_POST['email']) and isset($_POST['password'])) {
            $email = $_POST['email'];
            $password = $_POST['password'];

            $user_info = $db->verifie_p(filters::filters_email($email), (string)$password);

            if ($user_info != false || $user_info != null) {
                $_SESSION["user_info"] = $user_info;
                echo "<script>location.href='".redirection::redirect()."'</script>";
            } else {
                $alert = "<div class=\"shit\">
            <p>
               email ou password incorrect
            </p>
        </div>";
            }
        }
    } else if ($_POST['admin'] == "admin") {

        if (isset($_POST['email']) and isset($_POST['password'])) {
            $email = $_POST['email'];
            $password = $_POST['password'];
            $user_info = $db->verifie_a(filters::filters_email($email), (string)$password);
            if ($user_info != false || $user_info != null) {
                $_SESSION["admin_info"] = $user_info;
                $takeAll_admin  = new take();
                $_SESSION["admin_ALL"] = $takeAll_admin->take_element_ALL();
                $takeAllUser = new take();
                $_SESSION['user'] = $takeAllUser->takeElementAllUser();
                echo "<script>location.href='".redirection::redirect()."/admin'</script>";
            } else {
                $alert = "<div class=\"shit\">
            <p>
               email ou password incorrect
            </p>
        </div>";
            }

        }
        
    }
}
