<?php
if (isset($alert)){
    echo $alert;
}
use aps\redirection;
?>

<div class="signUP">


    <p class="signUP_title">
    <h1>connection</h1>
    <span class="span"  style="transition:all 0.2s"></span>
    </p>


    <div class="signUP_main">

        <form action="/connexion" method="POST">
            <input type="email" placeholder="  email" name="email" class="input">
            <br><br>
            <input type="password" placeholder=" password" name="password" class="input">
            <br><br>
            <p>
                <button type="submit" name="connexion" value="yes">envoyer</button>
            </p>


            <div class="signUP_main--link">
                <a href="<?=redirection::redirect()?>/inscription">inscription</a>
            </div>
        </form>


    </div>


</div>

<?php

?>