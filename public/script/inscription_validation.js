// je selection pour mes input d a page

let all_input = document.querySelectorAll('input');
let alert_danger = document.querySelector('span');


// pour le nom et rien que pour le nom
all_input[3].addEventListener('change', (e) => {

    let reg = /\d|\s|\n|\t|[,?.;:/!§<>µ*ù%$£^¨¤=)àç_è\-\(\)'"&+}\]@\^\\`\|\[\{\}\#\~]/g;
    let contenue = e.target.value.toLocaleLowerCase();


    if (contenue.match(reg) != null) {
        alert_danger.innerText = "NOM : n'utlisez pas des caractères speciaux et des chiffres ❤️";
        alert_danger.style.padding = 10+"px";
        e.target.style.background = '#f97b68f7';
        e.target.style.borderBottom = "2px solid red";

    } else {
        e.target.style.background = 'white';
        e.target.style.borderBottom = "2px solid #ade8f4";
        if (e.target.value != "") {
            e.target.style.background = '#caf0f8';
            e.target.style.borderBottom = "2px solid #0096c7";
        }

        // console.log("perfect ou shit");
    }
});