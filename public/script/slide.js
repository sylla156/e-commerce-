let header = document.querySelector("header");
header.style.width = innerWidth + "px";
window.onresize = () => {
  header.style.width = innerWidth + "px";
};

// pour les articles
let article = document.querySelector(".article");
let article_main = document.querySelector(".article_main");
let article_main_chlid = document.querySelectorAll(".article_main--child");

//pour le carousel
let carousel = document.querySelector(".carousel");
let carousel_main = document.querySelector(".carousel_main");
let carousel_main_first = document.querySelector(".carousel_main--first");
let carousel_main_first__chlidAll = document.querySelectorAll(".child");

// pour venir en arriere
let prev_carousel = document.querySelector(".btn1");
// pour partir en avant
let next_carousel = document.querySelector(".btn2");
// les element qui vont nous permettre de partie sur un element precise
let btn_element_carousel = document.querySelector(".element_carousel");

//pour le menu pour les categories
let slider = document.querySelector(".slider");
let menu = document.querySelector("#menu");

// la partie connection pour dire se connection inscription
let sign = document.querySelector(".sign");
let sign_up = document.querySelector("#sign");

// la patir resize d bloc de text quand on click sur un button
let main_bloc = document.querySelector(".resize-bloc");
//  les icone du header pour le resize
let head_main = document.querySelector(".head_main");
let head_second = document.querySelector(".head_second");
let icone = document.querySelector(".iconeS");
let icone_back = document.querySelector(".first_back");

// la variabe qui va servir de count gobale de click for gerer les click
let global_click = [];
let click_slider = 0;

// les variable qui font bouge le carousel

let taille = 0;

menu.addEventListener("click", move);
window.addEventListener("resize", resize(menu));

sign_up.addEventListener("click", sig);

icone.addEventListener("click", icon);
icone_back.addEventListener("click", icon_back);

window.onclick = () => {
  setTimeout(() => {
    if (global_click.length == 1) {
      if (global_click[0] == "sign") {
      }
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
};

function move() {
  if (slider.attributes.class.textContent != "slider") {
    global_click.push("menu");
    click_slider = true;
    menu.style.transform = "rotate(90deg)";
    slider.attributes.class.textContent = "slider";
    slider.style.opacity = 0;
    if (carousel != null) {
      carousel.style.overflow = "hidden";
    }
    setTimeout(() => {
      slider.style.width = "45vh";
      slider.style.opacity = 1;
    }, 100);
    setTimeout(() => {
      if (innerWidth >= 1024) {
        if (main_bloc != null) {
          main_bloc.style.width = innerWidth - slider.clientWidth - 20 + "px";
          article.style.width = innerWidth - slider.clientWidth - 20 + "px";
          article_main.style.gridTemplateColumns = "1fr 1fr 1fr";
        }
        if (carousel != null) {
          btn_element_carousel.style.left =
            carousel_main_first__chlidAll[0].clientWidth / 2.2 + "px";
          carousel_main.style.width =
            innerWidth - slider.clientWidth + 10 + "px";
        }
      }
    }, 600);
  } else {
    global_click.pop();
    if (carousel != null) {
      if (innerWidth < 1024) {
        carousel.style.overflowX = "scroll";
      }
      if (main_bloc != null && innerWidth >= 1024) {
        main_bloc.style.width = 100 + "vw";
        article.style.width = 100 + "vw";
        article_main.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
      }
    }
    click_slider = false;
    menu.style.transform = "rotate(180deg)";
    slider.style.width = "0.2%";
    slider.style.opacity = 0;
    setTimeout(() => {
      slider.attributes.class.textContent += " no-click";
      slider.style.opacity = 0;
      btn_element_carousel.style.left = innerWidth / 2.5 + "px";
    }, 400);
  }
}

function resize(menu) {
  setTimeout(() => {
    //pour le click au grand ecran
    if (
      innerWidth >= 1024 &&
      location.pathname == "/" &&
      global_click != null
    ) {
      menu.click();
    }
  }, 1000);

  //pour le carousel des petit ecran
  if (carousel != null) {
    if (innerWidth < 1024) {
      let compt = carousel.scrollWidth / carousel_main_first__chlidAll.length;

      (function () {
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

    if (innerWidth >= 1024 || innerWidth == 1024) {
      carousel.style.width =
        carousel_main_first__chlidAll[0].lastElementChild.clientWidth + "px";
      prev_carousel.style.top = innerHeight / 2.5 + "px";
      next_carousel.style.top = innerHeight / 2.5 + "px";
      btn_element_carousel.style.top = innerHeight / 1.5 + "px";
    }
  }
}

// btn_element_carousel.style.left = carousel_main_first__chlidAll[0].clientWidth/2.2 + 'px';
if (carousel != null) {
  if (innerWidth >= 1024) {
    carousel.style.width =
      carousel_main_first__chlidAll[0].lastElementChild.clientWidth + "px";
  }
}

function sig() {
  if (sign.attributes.class.textContent != "sign") {
    global_click.push("sign");

    sign.attributes.class.textContent = "sign";
    sign.style.opacity = 1;
    if (carousel != null) {
      carousel.style.overflow = "hidden";
    }

    setTimeout(() => {
      sign.style.width = "50vh";
    }, 100);
  } else {
    global_click.pop();
    if (innerWidth < 1024) {
      if (carousel != null) {
        carousel.style.overflowX = "scroll";
      }
    }
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

if (carousel != null) {
  window.onresize = () => {
    (function carousel_big() {
      if (innerWidth >= 1024) {
        setInterval(() => {
          carousel_main.lastElementChild.style.transform =
            "translateX(" + -300 + "px)";
        }, 3000);
      }
    })();
  };
}

let time = carousel_main_first__chlidAll.length;
if (carousel != null) {
  if (innerWidth >= 1024) {
    let avance = 0;
    setInterval(() => {
      time--;
      carousel_main.lastElementChild.style.transform =
        "translateX(" + avance + "px)";
      avance += carousel_main_first__chlidAll[0].clientWidth;
      if (!time) {
        avance = 0;
        time = carousel_main_first__chlidAll.length;
      }
    }, 5000);

    prev_carousel.onclick = () => {
      if (time <= 1) {
        next_carousel.style.display = "block";
        prev_carousel.style.display = "none";
      } else {
        next_carousel.style.display = "block";
        time--;
        avance += carousel_main_first__chlidAll[0].clientWidth;
        carousel_main.lastElementChild.style.transform =
          "translateX(" + avance + "px)";
      }
    };

    next_carousel.onclick = () => {
      if (time >= carousel_main_first__chlidAll.length) {
        prev_carousel.style.display = "block";
        next_carousel.style.display = "none";
      } else {
        prev_carousel.style.display = "block";
        time++;
        avance -= carousel_main_first__chlidAll[0].clientWidth;
        carousel_main.lastElementChild.style.transform =
          "translateX(" + avance + "px)";
      }
    };
  }
}

if (carousel != null) {
  if (innerWidth >= 1024) {
    (function () {
      for (let i = 0; i < carousel_main_first__chlidAll.length; i++) {
        btn_element_carousel.innerHTML += "<p class=" + i + " id='ok'><p>";
      }
      for (let i = 0; i < carousel_main_first__chlidAll.length; i++) {
        document.getElementsByClassName(i)[0].onclick = (e) => {
          for (
            let index = 0;
            index < carousel_main_first__chlidAll.length;
            index++
          ) {
            document.getElementsByClassName(index)[0].style.background =
              "#b1d0efda";
          }
          document.getElementsByClassName(i)[0].style.background = "#0096c7";

          time = carousel_main_first__chlidAll.length - i;

          avance = i * 150;
          carousel_main.lastElementChild.style.transform =
            "translateX(" + avance + "vh)";
        };
      }
    })();
  }
}
