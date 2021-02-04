<?php
if (isset($alert)){
    echo $alert;
}

use aps\redirection;
?>

<div class="signUP">


    <p class="signUP_title">
    <h1>inscription</h1>
    <span style="transition:all 0.2s" class="span"></span>
    </p>


    <div class="signUP_main">

        <form action="/inscription" method="POST">

            <input type="text" placeholder="  nom" name="nom">
            <br><br>

            <input type="text" placeholder="  prenom" name="prenom">

            <br><br>

            <input type="tel" placeholder="  telephone" name="tel">

            <br><br>

            <input type="email" placeholder="  email" name="email">

            <br><br>

            <input type="password" placeholder=" password" ><span class="spanS1">👁</span>

            <br><br>

            <input type="password" placeholder=" verifiez password" name="password"><span class="spanS2">👁</span>

            <br><br>

            <p>
                <button type="submit" name="connexion" value="yes">envoyer</button>
            </p>



            <div class="signUP_main--link">
                <a href="<?=redirection::redirect()?>/connexion">connection</a>
            </div>

        </form>


    </div>



</div>