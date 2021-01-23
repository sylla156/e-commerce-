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
                <div class="head_main--menu element">
                    <img src="picture/list.png" alt="menu" id="menu">
                </div>

                <div class="head_main--title  element">
                    <p><a href="">logo</a></p>
                </div>
            </div>

            <div class="head_main--searchI element iconeS">
                <img src="picture/search.png" alt="recherche">
            </div>
            <div class="head_main--search search">
                <form action="" method="GET²">
                    <input type="text" class="head_main--search--1" placeholder="    RECHERCHE" name="q">
                    <input type="submit" value="RECHERCHE" class="head_main--search--2">
                </form>
            </div>

            <div class="first">

                <div class="head_main--basket element">
                    <img src="picture/basket.png" alt="panier">
                </div>

                <div class="head_main--user element" id="sign">
                    <img src="picture/user.png" alt="sign up">
                </div>
            </div>
        </div>


        <div class="head_second ">

            <button>
                <img src="  picture/direction.png" alt="sortir" srcset="" class="first_back">
            </button>
            <div class="head_second--search">

                <div class="head_second--search--1" >

                    <form action="" method="GET">
                        <input type="text" placeholder="    RECHERCHE" name="q">
                </div>
                <div class="head_second--search--2">

                    <button type="submit" ><img src="picture/search.png"
                            alt="recherche"></button>
                </div>
                </form>
            </div>
        </div>
    </header>


    <div class="slider no-click" >
        <?php for ($i=0; $i <15 ; $i++) { 
              echo "<p>categorie$i</p>";
           } ?>
    </div>
   

    
    <div class="sign no-click">
       di
    </div>

    

    <?php

if(isset($container)){
    echo $container;
}
?>



    <footer class="footer">
        <div class="footer_one">
            <p class="footer_one--element">mon footer</p>
        </div>
    </footer>
</body>
<script src="script/slide.js"></script>

</html>