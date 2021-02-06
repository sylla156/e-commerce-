<?php use aps\redirection; ?>

    <div class="panier">
        
    <div class="panier_main">
        <p class="first">panier 0</p>
        <p class="close">
            <span class="ok">⚔️</span>
        </p>

    </div>

    <!----------------------->

    <div class="book">
        <p class="panier_book--first">aucune commande n'a ete effectuée!!</p>
    </div>

    <!----------------------->

    <div class="panier_second">
        
        <img src="picture/icone/big_panier.png" alt="panier">
        
    </div>
</div>

<!------------------------------------------------------------------- -->

<script>

   let close = document.querySelector('.close');

   close.onclick = () => {    
    location.href = "<?=redirection::redirect()?>";
   }


</script>
