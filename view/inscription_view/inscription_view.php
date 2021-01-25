<?php
if (isset($alert)){
    echo $alert;
}
?>

<div class="signUP">
    <p class="signUP_title"><h1>inscription</h1></p>
    <div class="signUP_main">
        <form action="/inscription" method="POST">
            <input type="text" placeholder="  nom" name="nom">
            <br><br> <input type="text" placeholder="  prenom" name="prenom">
            <br><br>
            <input type="email" placeholder="  email" name="email">
            <br><br>
            <input type="password" placeholder=" password" name="password">
            <br><br>
            <p>
                <button type="submit" name="connexion" value="yes">envoyer</button>
            </p>
        </form>
    </div>
</div>