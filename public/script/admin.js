// for les bouble click de menu ou de slide de sign
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

// for les info u compte
let btn_account = document.querySelector(".btn_account");
let main_account = document.querySelector(".account");
let quit_account = document.querySelector(".accountQuit");
clicker(btn_account, main_account);
quit(quit_account, main_account);

// for administrtation
// administrattion fonctionnaliter
let btn_upgrade = document.querySelectorAll(".btn_upgrade");
let btn_delete = document.querySelectorAll(".btn_delete");
let child_upgrade_count = undefined;
let child_upgradeALL = undefined;
let reset = 1;


btn_upgrade.forEach((element) => {
  element.addEventListener("click", input);

  function input() {
    (function () {
      child_upgrade_count = element.attributes.id.value;
      // element.innerHTML ="<button>annuler</button>";
      // element.classList.toggle('good')
      // element.classList.toggle('annuler')
      if (child_upgrade_count != undefined) {
        child_upgradeALL = document.querySelectorAll(
          ".btn" + child_upgrade_count
        );
      }btn_upgrade.forEach((element) => {btn_upgrade.forEach((element) => {
        element.addEventListener("click", input);
      
        function input() {
          (function () {
            child_upgrade_count = element.attributes.id.value;
            // element.innerHTML ="<button>annuler</button>";
            // element.classList.toggle('good')
            // element.classList.toggle('annuler')
            if (child_upgrade_count != undefined) {
              child_upgradeALL = document.querySelectorAll(
                ".btn" + child_upgrade_count
              );
            }
      
      
            child_upgradeALL.forEach(element => {
                element.outerHTML = "<td><input type='text' value='" + element.innerText + "'></input></td>";
            });
      
      
          })();
        }
      
      });
        element.addEventListener("click", input);
      
        function input() {
          (function () {
            child_upgrade_count = element.attributes.id.value;
            // element.innerHTML ="<button>annuler</button>";
            // element.classList.toggle('good')
            // element.classList.toggle('annuler')
            if (child_upgrade_count != undefined) {
              child_upgradeALL = document.querySelectorAll(
                ".btn" + child_upgrade_count
              );
            }
      
      
            child_upgradeALL.forEach(element => {
                element.outerHTML = "<td><input type='text' value='" + element.innerText + "'></input></td>";
            });
      
      
          })();
        }
      
      });


      child_upgradeALL.forEach(element => {
          element.outerHTML = "<td><input type='text' value='" + element.innerText + "'></input></td>";
      });


    })();
  }

});


function clicker(elementClickView, domHtml) {
  elementClickView.addEventListener("click", () => {
    sign_up.click();
    console.log((domHtml.style.display = "block"));
    domHtml.style.display = "block";
  });
}

function quit(elementClickQuit, domHml) {
  elementClickQuit.addEventListener("click", logout);

  function logout() {
    domHml.style.display = "none";
  }
}