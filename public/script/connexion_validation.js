
let all_input = document.querySelectorAll('.input');
let alert_danger = document.querySelector('.span');




// pour l'email et rien que pour email
all_input[0].addEventListener('change', faire1);

//pour le password et rien que pour le password
all_input[1].addEventListener('change', faire2);




function valid(element) {
    element.target.style.background = '#caf0f8';
    element.target.style.borderBottom = "2px solid #0096c7";
}

function reset(element) {
    element.target.style.background = 'white';
    element.target.style.borderBottom = "2px solid #ade8f4";
    reset_danger();
}

function error(element) {
    element.target.style.background = '#f97b68f7';
    element.target.style.borderBottom = "2px solid red";
}

function danger(contenue) {
    alert_danger.innerText = contenue;
    alert_danger.style.padding = "0 10px";

}

function reset_danger() {
    alert_danger.innerText = "";
    alert_danger.style.padding = "0";
}







function faire1(e) {

    let reg = /^([a-zA-Z0-9_\-\.]+)@(gmail|yahoo|Outlook|Posteo|AOL|GMX+)\.(com|net{2,5})$/;
    let contenue = e.target.value.toLocaleLowerCase();


    if (contenue.match(reg) != null) {
        reset(e);

        if (e.target.value != "") {
            valid(e);
        }

    } else {
        danger("verfier votre email qui doit etre exemple@gmail.com");
        error(e);
    }
}


function faire2(e) {
    let contenue = e.target.value;
    let taille = e.target.value.length;

    if (contenue != ""){
        if (taille < 8) {
            danger("le password doit etre plus de 8 elements");
            error(e);
    
        }else if (taille >= 8){
            reset(e);
            valid(e);
        }
    }else if (contenue == ""){
        reset(e);
    }
}
