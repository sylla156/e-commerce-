let header = document.querySelector('header');
header.style.width = innerWidth + "px";
window.onresize = () => {
    header.style.width = innerWidth + "px";
}
//pour le carousel
let carousel = document.querySelector('.carousel');
let carousel_main = document.querySelector('.carousel_main');
let carousel_main_first = document.querySelector('.carousel_main--first');
let carousel_main_first__chlidAll = document.querySelectorAll('.child');

//pour le menu pour les categories
let slider = document.querySelector('.slider');
let menu = document.querySelector('#menu');

// la partie connection pour dire se connection inscription
let sign = document.querySelector('.sign');
let sign_up = document.querySelector('#sign');

// la patir resize d bloc de text quand on click sur un button
let main_bloc = document.querySelector('.resize-bloc');
//  les icone du header pour le resize
let head_main = document.querySelector('.head_main');
let head_second = document.querySelector('.head_second');
let icone = document.querySelector('.iconeS');
let icone_back = document.querySelector('.first_back')


// la variabe qui va servir de count gobale de click for gerer les click
let global_click = [];
let click_slider = 0;

// les variable qui font bouge le carousel
let compt = carousel.scrollWidth / carousel_main_first__chlidAll.length;
let taille = 0;

menu.addEventListener('click', move);
window.addEventListener('resize', resize(menu));

sign_up.addEventListener('click', sig);

icone.addEventListener('click', icon);
icone_back.addEventListener('click', icon_back);




window.onclick = () => {
    setTimeout(() => {
        if (global_click.length == 1) {
            if (global_click[0] == "sign") {}
        }
        if (global_click.length == 2) {
            if (global_click[1] == "menu") {
                sign_up.click();
            } else if (global_click[1] == "sign") {
                menu.click();
            }
        }
    }, 50);

    // if (click_slider == true){
    //     console.log(slider.clientWidth);
    // }

}

function move() {
    if (slider.attributes.class.textContent != "slider") {
        global_click.push("menu");
        click_slider = true;
        menu.style.transform = "rotate(90deg)";
        slider.attributes.class.textContent = "slider";
        slider.style.opacity = 0;
        carousel.style.overflow = "hidden";
        setTimeout(() => {
            slider.style.width = "45vh";
            slider.style.opacity = 1;
        }, 100);
        setTimeout(() => {
            if (innerWidth > 1024) {
                main_bloc.style.width = (innerWidth - slider.clientWidth - 20) + "px";
                carousel_main.style.width = (innerWidth - slider.clientWidth + 10) + "px";

            }
        }, 600);


    } else {
        document.querySelector('.btn2').style.left = innerWidth + "px"
        global_click.pop();
        if (innerWidth < 1024) {
            carousel.style.overflowX = "scroll";
        }
        main_bloc.style.width = 100 + "%";
        click_slider = false;
        menu.style.transform = "rotate(180deg)";
        slider.style.width = "0.2%";
        slider.style.opacity = 0;
        setTimeout(() => {
            slider.attributes.class.textContent += " no-click";
            slider.style.opacity = 0;
        }, 400);
    }
}




function resize(menu) {
    setTimeout(() => {
        //pour le click au grand ecran 
        if (innerWidth >= 1024 && location.pathname == "/" && (global_click != null)) {
            menu.click();
        }
    }, 1000);

    //pour le carousel des petit ecran
    if (innerWidth < 1024) {

        (function caeousel_move() {
            setInterval(() => {
                carousel.scrollLeft = taille;
                taille += compt;

                if (taille >= carousel.scrollWidth) {
                    taille = 0;
                }
            }, 4000);

        })();
    }
    // pour les tablettee

    if (innerWidth >= 1024 && screen.orientation.type == "landscape-primary") {
        carousel_main.style.width = innerWidth - 100 + "px";
    }

    if(innerWidth >= 1024){
        carousel.style.width = carousel_main_first__chlidAll[0].lastElementChild.clientWidth + "px";
        document.querySelector('.btn').style.top = innerHeight / 2.5 + "px";
        document.querySelector('.bt').style.top = innerHeight / 2.5 + "px";
    }
}
if(innerWidth >= 1024){
    carousel.style.width = carousel_main_first__chlidAll[0].lastElementChild.clientWidth + "px";
}


function sig() {
    if (sign.attributes.class.textContent != "sign") {
        global_click.push("sign")

        sign.attributes.class.textContent = "sign";
        sign.style.opacity = 1;
        carousel.style.overflow = "hidden"



        setTimeout(() => {
            sign.style.width = "50vh";
        }, 100);
    } else {
        global_click.pop();
        carousel.style.overflow = "scroll";
        sign.style.width = "0%";
        setTimeout(() => {
            sign.attributes.class.textContent += " no-click";
            sign.style.opacity = 0;
        }, 400);
    }
}


function icon() {
    let click = true;
    if (click) {
        head_main.attributes.class.textContent = "no-click";
        head_second.style.display = "block";
    }
}

function icon_back() {
    head_main.attributes.class.textContent = "head_main";
    head_second.style.display = "none";
}
window.onresize = () => {

    (function carousel_big() {
        if(innerWidth > 1024){
            setInterval(() => {
                carousel_main.lastElementChild.style.transform = "translateX("+-300+"vh)";
            }, 1000);
        }
    })()
}

if(innerWidth > 1024){
    let avance = 0;
    let time = carousel_main_first__chlidAll.length;
    setInterval(() => {
        time--;
        carousel_main.lastElementChild.style.transform = "translateX("+avance+"vh)";
        avance+=150;
        if(!time){
            avance = 0;
            time = carousel_main_first__chlidAll.length;
        }
    }, 1000);
}