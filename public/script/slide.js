let slider = document.querySelector('.slider');
let menu = document.querySelector('#menu');

menu.addEventListener('click', () => {
    if (slider.attributes.class.textContent != "slider") {
        menu.style.transform = "rotate(90deg)";
        slider.attributes.class.textContent = "slider";
        slider.style.opacity = 1;


    } else {
        menu.style.transform = "rotate(180deg)";
        slider.style.opacity = 0;

        slider.attributes.class.textContent += " no-click";

    }
})

window.addEventListener('resize', faire(menu));

menu.style.opacity = 1;

function faire(menu) {
    if (innerWidth > 1024 && location.pathname == "/") {
        menu.click();
    }
}


let sign = document.querySelector('.sign');
let sign_up = document.querySelector('#sign');

sign_up.addEventListener('click', () => {
    if (sign.attributes.class.textContent != "sign") {
        sign.attributes.class.textContent = "sign";
        sign.style.opacity = 1;

    } else {
        sign.style.opacity = 0;

        sign.attributes.class.textContent += " no-click";
    }
})



let head_main = document.querySelector('.head_main');
let head_second = document.querySelector('.head_second');
let icone = document.querySelector('.iconeS');

icone.addEventListener('click', () => {
    let click = true;
    if (click) {
        head_main.attributes.class.textContent = "no-click";
        head_second.style.display = "block";
    }

})

let icone_back = document.querySelector('.first_back')

icone_back.addEventListener('click', () => {
    head_main.attributes.class.textContent = "head_main";
    head_second.style.display = "none";
})