// je selection pour mes input d a page
let all_input = document.querySelectorAll('.input');
let alert_danger = document.querySelector('.span');
let compt_danger = false;



// pour le nom et rien que pour le nom
all_input[0].addEventListener('change', faire1);

// pour le prenom et rien que pour le prenom
all_input[1].addEventListener('change', faire1);

//pour le telephone et rien que pour le telephone
all_input[2].addEventListener('change', faire2);

//pour email et rien que pour email
all_input[3].addEventListener('change', faire3);

//le premier password pour le test 
all_input[4].addEventListener('change', faire4)

//le derniere password celui qui sera envoyer a la base de donnee
all_input[5].addEventListener('change', faire5);


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

    let reg = /\d|\s|\n|\t|[,?.;:/!§<>µ*ù%$£^¨¤=)àç_è\-\(\)'"&+}\]@\^\\`\|\[\{\}\#\~]/g;
    let contenue = e.target.value.toLocaleLowerCase();


    if (contenue.match(reg) != null) {
        if (compt_danger == true) {
            danger("NOM ET PRENOM: n'utlisez pas des caractères speciaux et chiffres et pas d'espace blanc ❤️");
        } else if (compt_danger == false) {
            danger("NOM : n'utlisez pas des caractères speciaux et chiffres et pas d'espace blanc ❤️");
        }
        error(e);
        compt_danger = true;

    } else {
        reset(e);
        compt_danger = false;

        if (e.target.value != "") {
            compt_danger = false;
            valid(e);
        }
    }
}




function faire2(e) {

    let reg = /[A-z]|\s|\n|\t|[,?.;:/!§<>µ*ù%$£^¨¤=)àç_è\-\(\)'"&+}\]@\^\\`\|\[\{\}\#\~]/g;
    let contenue = e.target.value;

    if (contenue.length == 8 || contenue.length == 10) {
        reset(e);

        let avis_use = (contenue.match(reg) != null);
        if (avis_use) {

            danger("le numero telephone doit etre que des chiffre et pas d'espace ☎️");
            error(e);

        }else{
            reset(e);
            valid(e);
        }

    } else if (contenue.length < 8 || contenue.length > 10 || contenue.length == 9) {

        reset(e);

        if (e.target.value != "") {

            danger("le numero telephone doit etre 8 ou 10 chiffre ☎️");
            error(e);

        }
    }
}




function faire3(e) {

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



function faire5(e) {
    let first_password = all_input[4].value
    let second_password = e.target.value;
    if (second_password != "") {
        if (first_password != second_password) {
            danger('votre mote de passe ne sont pas pariel')
            error(e);
        } else {
            if (first_password == second_password) {
                reset(e);
                valid(e);
            }
        }
    } else if (second_password == "") {
        reset(e);
    }

}


function faire4(e) {
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


/////////////////////////////////////////////////////////

let first_view = document.querySelector(".spanS1");
let second_view = document.querySelector(".spanS2");


first_view.addEventListener('click',view);
second_view.addEventListener('click',view2);

let nombre1 = false;
let nombre2 = false;


function view(){
    if (nombre1 == false){
        all_input[4].type = "text";
        nombre1 = true;
        first_view.style.background = "#0de640cd"
    }else if(nombre1 == true){
        all_input[4].type = "password";
        nombre1 = false;
        first_view.style.background = "#ffffff"
    }
}



function view2(){
    if (nombre2 == false){
        all_input[5].type = "text";
        nombre2 = true;
        second_view.style.background = "#0de640cd";
        
    }else if(nombre2 == true){
        all_input[5].type = "password";
        nombre2 = false;
        second_view.style.background = "#ffffff"
    }
}
