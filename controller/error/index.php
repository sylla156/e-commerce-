<?php

$title = "error";

echo "<title>
 $title
</title>";

if(isset($_POST['connexion'])){
    if($_POST['connexion'] == "yes"){
        $_SESSION['email'] = $_POST['email'];
        $_SESSION['password'] =$_POST['password'];
         echo "ok";
    }
}
