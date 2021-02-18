// for les bouble click de menu ou de slide de sign
(function () {
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
  };
})();

// for les info u compte
let btn_account = document.querySelector(".btn_account");
let main_account = document.querySelector(".account");
let quit_account = document.querySelector(".accountQuit");
clicker(btn_account, main_account,"yes");
quit(quit_account, main_account);

// for administrtation
// administrattion fonctionnaliter
let btn_upgrade = document.querySelectorAll(".btn_upgrade");
let btn_delete = document.querySelectorAll(".btn_delete");
let child_upgrade_count = undefined;
let child_upgradeALL = undefined;
let reset = 0;

// for visible or invisible admin
let btn_admin = document.querySelector('.slider_admin');
let main_admin = document.querySelector('.admin');
let quit_admin = document.querySelector('.quitte');
clicker(btn_admin,main_admin);
quit(quit_admin,main_admin);


btn_upgrade.forEach((element) => {
  element.addEventListener("click", input);

  function input() {
    (function () {
      element.outerHTML = "<td><button class ='submit'>envoyer</button></td>";
      child_upgrade_count = element.attributes.id.value;
      if (child_upgrade_count != undefined) {
        child_upgradeALL = document.querySelectorAll(
          ".btn" + child_upgrade_count
        );
      }

      if (child_upgradeALL != undefined) {
        child_upgradeALL.forEach((element) => {
          element.outerHTML = `<td><input type='text' value='${element.innerText}' class='upgrade'></input></td>`;
          reset = 1;
        });
      }

      document.querySelector(".submit").addEventListener("click", () => {
        let input_all = document.querySelectorAll("input");
        let envoie = document.querySelectorAll(".autre");
        let click_envoi = document.querySelector(".finalSubmit");

        envoie[0].value = input_all[0].value;
        envoie[1].value = input_all[1].value; 
        envoie[2].value = input_all[2].value; 
        envoie[3].value = input_all[3].value; 
        envoie[4].value = input_all[4].value; 
        click_envoi.click();
      });
    })();
  }
});

function clicker(elementClickView, domHtml,avis = "no") {
  elementClickView.addEventListener("click", () => {
    if(avis == "no"){
      menu.click();
    }else{
      sign_up.click();
    }
    domHtml.style.display = "block";
  });
}

function quit(elementClickQuit, domHml) {
  elementClickQuit.addEventListener("click", logout);

  function logout() {
    domHml.style.display = "none";
  }
}
