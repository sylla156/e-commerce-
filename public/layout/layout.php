<!--   ici j'ai fait un simple code qui affiche deux code different en fonction d'une session qui contient les information de utilisateur -->
<?php
use aps\redirection;
?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="design/style/style.css">
</head>

<body>
    <header class="head">
        <div class="head_main">
            <div class="first">
                <div class="head_main--menu element" id="menu">
                    <img src="picture/icone/list.png" alt="menu">
                </div>

                <div class="head_main--title  element">
                    <p><a href="/">logo</a></p>
                </div>
            </div>

            <div class="head_main--searchI element iconeS">
                <img src="picture/icone/search.png" alt="recherche">
            </div>
            <div class="head_main--search search">
                <form action="" method="GET²">
                    <input type="text" class="head_main--search--1" placeholder="    RECHERCHE" name="q">
                    <input type="submit" value="RECHERCHE" class="head_main--search--2">
                </form>
            </div>


            <div class="first">

                <div class="head_main--basket element">
                    <a href="<?=redirection::redirect()?>/panier" class="panier_self"><img
                            src="picture/icone/basket.png" alt="panier"></a>
                </div>

                <div class="head_main--user element" id="sign">
                    <img src="picture/icone/user.png" alt="sign up">
                </div>
            </div>
        </div>


        <div class="head_second ">

            <button>
                <img src="  picture/icone/direction.png" alt="sortir" srcset="" class="first_back">
            </button>
            <div class="head_second--search">

                <div class="head_second--search--1">

                    <form action="" method="GET">
                        <input type="text" placeholder="    RECHERCHE" name="q">
                </div>
                <div class="head_second--search--2">

                    <button type="submit"><img src="picture/icone/search.png" alt="recherche"></button>
                </div>
                </form>
            </div>
        </div>
    </header>


    <div class="slider no-click" >
        <?php


for ($i=0; $i <10 ; $i++) { 
              echo "<p>categorie$i</p>";
           } ?>
    </div>

    <!-- le debut du code est le desig  principale avec les scss et javascript et htm  et ensuite j'ai fait la condition en function de a session qui contient les information de utlisateur-->
    <?php  if(!empty($_SESSION['user_info'])){
$user_info_all= $_SESSION['user_info'][0];
    ?>
    <div class="sign no-click">


        <div class="sign_element--first sign_element">
            <a href="/
account info">
                <p><img src="picture/icone/user.png" alt=""></p>
                <p><?=$user_info_all[1]?></p>
            </a>
        </div>
        <hr>
        <div class="sign_element--second sign_element">
            <a href="/?status=yes">
                <p><img style="transform:rotate(180deg)" src="picture/icone/sign_out.png" alt=""></p>
                <p style="text-indent:2px">deconection</p>
            </a>
        </div>
        <hr>

        <div class="sign_element--thrid sign_element">
            <a href="/commande">
                <p><img src="/picture/icone/order.png" alt=""></p>
                <p> vos commande</p>
            </a>
        </div>

        <div class="sign_element--fourth sign_element">
            <a href="/favoris">
                <p><img src="picture/icone/heart.png" alt=""></p>
                <p> vos favoris</p>
            </a>
        </div>
    </div>

    <!-- ici je vais une redirection via javascript pour rediriger use an cas si il veut aller sur le lien de connecton avec un methode static qui se trouve dans modele-->
    <script>
        let all_error_number = 0;
        if (location.href == "<?=redirection::redirect() ?>/inscription" || location.href ==
            "<?=redirection::redirect() ?>/connexion") {

            location.href = "<?=redirection::redirect() ?>/error";
        }
    </script>

    <?php
    
}else{
    
    ?>
    <div class="sign no-click">


        <div class="sign_element--first sign_element">
            <a href="/connexion">
                <p><img src="picture/icone/user.png" alt=""></p>
                <p>connexion</p>
            </a>
        </div>
        <hr>
        <div class="sign_element--second sign_element">
            <a href="/inscription">
                <p><img src="picture/icone/sign_out.png" alt=""></p>
                <p>inscription</p>
            </a>
        </div>
        <hr>

        <div class="sign_element--thrid sign_element">
            <a href="/connexion">
                <p><img src="/picture/icone/order.png" alt=""></p>
                <p> vos commande</p>
            </a>
        </div>

        <div class="sign_element--fourth sign_element">
            <a href="/favoris">
                <p><img src="picture/icone/heart.png" alt=""></p>
                <p> vos favoris</p>
            </a>
        </div>
    </div>
    <?php
}
?>

<br><br><br>


</body>

<script src="script/slide.js" async></script>
</html>