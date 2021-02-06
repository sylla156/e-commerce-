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

menu.addEventListener('click', move);
window.addEventListener('resize', resize(menu));

sign_up.addEventListener('click', sig);

icone.addEventListener('click', icon);
icone_back.addEventListener('click', icon_back);



window.onclick = () => {
    setTimeout(() => {      
        if (global_click.length == 2) {
            if (global_click[1] == "menu") {
                sign_up.click();
            } else if (global_click[1] == "sign") {
                menu.click();
            }
        }
    },50);

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
        slider.style.opacity = 1;

        setTimeout(() => {
            slider.style.width = "50vh";
        }, 100);
        setTimeout(() => {
            if(innerWidth > 1024){
                main_bloc.style.width = (innerWidth - slider.clientWidth-20) + "px";
            }
        },600);


    } else {
        global_click.pop();
        main_bloc.style.width = 100 + "%";
        click_slider = false;
        menu.style.transform = "rotate(180deg)";
        slider.style.width = "0.2%";

        setTimeout(() => {
            slider.attributes.class.textContent += " no-click";
            slider.style.opacity = 0;
        }, 400);
    }
}




function resize(menu) {
    if (innerWidth > 1024 && location.pathname == "/") {
        menu.click();
    }
}


function sig() {
    if (sign.attributes.class.textContent != "sign") {
        global_click.push("sign")

        sign.attributes.class.textContent = "sign";
        sign.style.opacity = 1;


        setTimeout(() => {
            sign.style.width = "50vh";
        }, 100);
    } else {
        global_click.pop();
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