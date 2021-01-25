<?php
if (isset($alert)){
    echo $alert;
}
?>

<div class="signUP">
    <p class="signUP_title"><h1>connection</h1></p>
    <div class="signUP_main">
        <form action="/connexion" method="POST">
            <input type="email" placeholder="  email"  name="email">
            <br><br>
            <input type="password"  placeholder=" password" name="password">
            <br><br>
            <p>
                <button type="submit" name="connexion" value="yes">envoyer</button>
            </p>
        </form>
    </div>
</div>

<?php

?>