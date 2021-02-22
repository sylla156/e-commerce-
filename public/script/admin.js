// for les bouble click de menu ou de slide de sign

// for les info du compte
let btn_account = document.querySelector(".btn_account");
let main_account = document.querySelector(".account");
let quit_account = document.querySelector(".accountQuit");
clicker(btn_account, main_account, "yes");
quit(quit_account, main_account);

// for administrtation
// administrattion fonctionnaliter
let btn_upgrade = document.querySelectorAll(".btn_upgrade");
let btn_delete = document.querySelectorAll(".btn_delete");
AllBtnUpgrade(btn_upgrade, btn_delete,"admin");
ALLBtnDelete(btn_delete,"admin");


// administration for user
let btnUpgradeUser = document.querySelectorAll('.btn_upgrade_user');
let btnDeleteUser = document.querySelectorAll('.btn_delete_user');
AllBtnUpgrade(btnUpgradeUser, btnDeleteUser, "user");
ALLBtnDelete(btnDeleteUser,"user");

// for visible or invisible admin
let btn_admin = document.querySelector(".slider_admin");
let main_admin = document.querySelector(".admin");
let quit_admin = document.querySelector(".quitte");
clicker(btn_admin, main_admin); 
quit(quit_admin, main_admin);


// for visible or invisible user;
let btn_user = document.querySelector('.slider_user');
let main_user = document.querySelector('.user');
let quit_user = document.querySelector('.out');
clicker(btn_user,main_user);
quit(quit_user,main_user);

function AllBtnUpgrade(upgrade, delet, mytype) {
  let child_upgrade_count = undefined;
  let child_upgradeALL = undefined;
  let btn_admin_annuler = undefined;
  let btn_admin_annuler_S = undefined;

  // d'ici les information vont etre envoyer
  let envoie = document.querySelectorAll(".autre");
  let click_envoi = document.querySelector(".finalSubmit");

  let reset = [];
  upgrade.forEach((element) => {
    element.addEventListener("click", input);

    function input() {
      (function () {
        child_upgrade_count = element.attributes.id.value;
        element.innerHTML = "<td><button class ='submit'>envoyer</button></td>";
        btn_admin_annuler = delet[child_upgrade_count - 1];
        if (child_upgrade_count != undefined) {
          btn_admin_annuler.outerHTML =
            "<td><button class ='annuler'>annuler</button></td>";
          btn_admin_annuler_S = document.querySelector(".annuler");
          if (mytype == "user") {
            child_upgradeALL = document.querySelectorAll(
              `.btnU${child_upgrade_count}`
            );
          } else {
            child_upgradeALL = document.querySelectorAll(
              `.btn${child_upgrade_count}`
            );
          }
        }

        if (child_upgradeALL != undefined) {
          child_upgradeALL.forEach((element) => {
            element.outerHTML = `<td><input type='text' value='${element.innerText}' class='upgrade adminReset inputUser'></input></td>`;
            reset.push(element.innerText);
          });
        }

        document.querySelector(".submit").addEventListener("click", () => {
          if (mytype == "user"){
            
          let input_all = document.querySelectorAll(".inputUser");
            
            envoie[0].value = input_all[0].value;
            envoie[1].value = input_all[1].value;
            envoie[2].value = input_all[2].value;
            envoie[3].value = input_all[4].value;
            envoie[4].value = input_all[5].value;
            envoie[5].value = "envoyerUser";
            envoie[6].value = input_all[3].value;
            click_envoi.click();
          }else{

          let input_all = document.querySelectorAll("input");
            
            envoie[0].value = input_all[0].value;
            envoie[1].value = input_all[1].value;
            envoie[2].value = input_all[2].value;
            envoie[3].value = input_all[3].value;
            envoie[4].value = input_all[4].value;
            envoie[5].value = "envoyer";
            click_envoi.click();
          }
          });

        if (child_upgradeALL != undefined) {
          btn_admin_annuler_S.addEventListener("click", () => {
            document.querySelector(".reload").click();
          });
        }
      })();
    }
  });
}

function ALLBtnDelete(delet,mytype) {
  let child_delete_count = undefined;
  let child_deleteALL = undefined;

  // d'ici les information vont etre envoyer
  let envoie = document.querySelectorAll(".autre");
  let click_envoi = document.querySelector(".finalSubmit");

  delet.forEach((element) => {
    element.addEventListener("click", () => {
      if (confirm("etre vous sur de vouloir suprimer")) {
        child_delete_count = element.attributes.id.value;
        if (child_delete_count != undefined) {
          if (mytype == "user") {
            child_deleteALL = document.querySelectorAll(
              `.btnU${child_delete_count}`
            );
          } else if (mytype == "admin") {
            child_deleteALL = document.querySelectorAll(
              `.btn${child_delete_count}`
            );
          }
          // console.log(envoie);
          // console.log(child_deleteALL);
          envoie[0].value = child_deleteALL[0].innerText;
          envoie[1].value = child_deleteALL[1].innerText;
          envoie[2].value = child_deleteALL[2].innerText;
          envoie[3].value = child_deleteALL[3].innerText;
          envoie[4].value = child_deleteALL[4].innerText;
          if (mytype == "user"){
            envoie[5].value = "suprimerUser";
          
          }else if (mytype == "admin"){
            envoie[5].value = "suprimer";
          } 
          click_envoi.click();
        }
      }
    });
  });
}


(function () {
  window.onclick = () => {
    setTimeout(() => {
      if (global_click.length == 1) {
        if (global_click[0] == "sign") {}
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