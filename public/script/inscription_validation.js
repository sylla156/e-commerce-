// je selection pour mes input d a page

let all_input = document.querySelectorAll('input');
let alert_danger = document.querySelector('span');
let compt_danger = false;

// pour le nom et rien que pour le nom
all_input[3].addEventListener('change', faire1);
// pour le prenom et rien que pour le prenom
all_input[4].addEventListener('change', faire1);
//pour le telephone et rien que pour le telephone
all_input[5].addEventListener('change', faire2);




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

        }



    } else if (contenue.length < 8 || contenue.length > 10 || contenue.length == 9) {

        reset(e);

        if (e.target.value != "") {

            danger("le numero telephone doit etre 8 ou 10 chiffre ☎️");
            error(e);

        }
    }
}