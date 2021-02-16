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
  let account = document.querySelector(".btn_account");
  clicker(account);

function clicker(dom_html){
    dom_html.addEventListener('click',faire);
    function faire (){
        sign_up.click();
        
    }
}
