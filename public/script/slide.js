let slider = document.querySelector('.slider');
let menu = document.querySelector('#menu');

menu.addEventListener('click', () => {
    if (slider.attributes.class.textContent != "slider") {
        menu.style.transform = "rotate(90deg)";
        slider.attributes.class.textContent = "slider";
        let op = 0;
        stop = setInterval(() => {
            op += 0.1;
            slider.style.opacity = op;
        }, 0.2);

        clearInterval(stop);
        setTimeout(() => {
        }, 100);
    } else {
        menu.style.transform = "rotate(180deg)";
        let op = 2;
        stop = setInterval(() => {
            op -= 0.1;
            slider.style.opacity = op;
        }, 0.2);

        clearInterval(stop);
        setTimeout(() => {
            slider.attributes.class.textContent += " no-click";
        }, 100);
    }
})

window.addEventListener('resize', faire(menu));

menu.style.opacity = 1;
function faire(menu) {
    if (innerWidth > 1024) {
        menu.click();
    } 
}


let sign = document.querySelector('.sign');
let sign_up = document.querySelector('#sign');

sign_up.addEventListener('click', () => {
    if (sign.attributes.class.textContent != "sign") {
        sign.attributes.class.textContent = "sign";
        let opa = 0;
        stop = setInterval(() => {
            opa += 0.1;
            sign.style.opacity = opa;
        }, 0.2);

        clearInterval(stop);
        setTimeout(() => {
        }, 100);
    } else {
        let opo = 2;
        stop = setInterval(() => {
            opo -= 0.1;
            sign.style.opacity = opo;
        }, 0.2);

        clearInterval(stop);
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