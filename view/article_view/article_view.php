<section class='article'>
    <main class='article_main'>

        <?php


        for ($i = 0; $i < 10; $i++) {
            echo " <a class='article_main--child element1' href=''>

            <p class='article_main--child--img'>
                <img src='picture/carousel/pc".$i.".jpg' alt='image'>
            </p>

            <p class='article_main--child--price'>
                <strong>".$i."123cfa</strong>
                <del>30000cfa</del>
            </p>

            <p class='article_main--child--text'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero 
            </p>

        </a>";
        } ?>
       
    </main>
</section>