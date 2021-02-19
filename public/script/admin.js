// for les bouble click de menu ou de slide de sign

// for les info u compte
let btn_account = document.querySelector(".btn_account");
let main_account = document.querySelector(".account");
let quit_account = document.querySelector(".accountQuit");
clicker(btn_account, main_account, "yes");
quit(quit_account, main_account);

// for administrtation
// administrattion fonctionnaliter
let btn_upgrade = document.querySelectorAll(".btn_upgrade");
let btn_delete = document.querySelectorAll(".btn_delete");
let envoie = document.querySelectorAll(".autre");
let click_envoi = document.querySelector(".finalSubmit");
let child_upgrade_count = undefined;
let child_upgradeALL = undefined;
let reset = [];

// for visible or invisible admin
let btn_admin = document.querySelector(".slider_admin");
let main_admin = document.querySelector(".admin");
let quit_admin = document.querySelector(".quitte");
clicker(btn_admin, main_admin);
quit(quit_admin, main_admin);

btn_upgrade.forEach((element) => {
  element.addEventListener("click", input);
  function input() {
    (function () {
      child_upgrade_count = element.attributes.id.value;
      element.innerHTML = "<td><button class ='submit'>envoyer</button></td>";
      btn_admin_annuler = btn_delete[child_upgrade_count - 1];
      if (child_upgrade_count != undefined) {
        btn_admin_annuler.outerHTML =
          "<td><button class ='annuler'>annuler</button></td>";
        btn_admin_annuler_S = document.querySelector(".annuler");

        child_upgradeALL = document.querySelectorAll(
          ".btn" + child_upgrade_count
        );
      }

      if (child_upgradeALL != undefined) {
        child_upgradeALL.forEach((element) => {
          element.outerHTML = `<td><input type='text' value='${element.innerText}' class='upgrade adminReset'></input></td>`;
          reset.push(element.innerText);
        });
      }

      document.querySelector(".submit").addEventListener("click", () => {
        let input_all = document.querySelectorAll("input");

        envoie[0].value = input_all[0].value;
        envoie[1].value = input_all[1].value;
        envoie[2].value = input_all[2].value;
        envoie[3].value = input_all[3].value;
        envoie[4].value = input_all[4].value;
        envoie[5].value = "envoyer";
        click_envoi.click();
      });

      if (child_upgradeALL != undefined) {
        btn_admin_annuler_S.addEventListener("click", () => {
          document.querySelector(".reload").click();
        });
      }
    })();
  }
});

btn_delete.forEach((element) => {

  element.addEventListener("click", () => {

    if (confirm("etre vous sur de vouloir suprimer")) {

      child_delete_count = element.attributes.id.value;
      if (child_delete_count != undefined) {

        child_deleteALL = document.querySelectorAll(
          ".btn" + child_delete_count
        );
          
        envoie[0].value = child_deleteALL[0].innerText;
        envoie[1].value = child_deleteALL[1].innerText;
        envoie[2].value = child_deleteALL[2].innerText;
        envoie[3].value = child_deleteALL[3].innerText;
        envoie[4].value = child_deleteALL[4].innerText;
        envoie[5].value = "suprimer";
        click_envoi.click();

      }
    }
  });
});

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

function clicker(elementClickView, domHtml, avis = "no") {
  elementClickView.addEventListener("click", () => {
    if (avis == "no") {
      menu.click();
    } else {
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
