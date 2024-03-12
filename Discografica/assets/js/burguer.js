$(document).ready(function() {
    var McButton = $("[data=hamburger-menu]");
    var McBar1 = McButton.find("b:nth-child(1)");
    var McBar2 = McButton.find("b:nth-child(2)");
    var McBar3 = McButton.find("b:nth-child(3)");
    var menu = $("nav");
    var headerLogo = $(".header-logo");
    
    McButton.on ("click", abrirNav);

    function abrirNav() {
      
      $(this).toggleClass("active");
      menu.toggleClass("show");
      headerLogo.toggleClass("big");
      menu.addClass('with-before');

      if (McButton.hasClass("active")) {
        McBar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
        McBar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
              .velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
        McButton.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });
      } else {
        McButton.velocity("reverse");
        McBar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
              .velocity({ top: "100%" }, {duration: 200, easing: "swing"});
        McBar1.velocity("reverse", {delay: 800});

        // Quitamos el before del nav a los 500ms
        setTimeout(() => {
          menu.removeClass('with-before');
        }, 500);
      }
    }

});

