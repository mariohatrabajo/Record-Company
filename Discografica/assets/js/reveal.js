$(document).ready(function() {
  // Función para manejar el evento de scroll
  
  $('.m-button-up').hide();
  $(window).scroll(function() {
      var alto = screen.height;
      // Verificar la posición de desplazamiento para el botón
      if ($(this).scrollTop() >= alto ) {
          $('.m-button-up').fadeIn();
      } else {
          $('.m-button-up').fadeOut(); 
      }

      // Verificar la posición de desplazamiento para el header
      if ($(this).scrollTop() >= 150) {
          $('header').removeClass('translucida').addClass('fija');
      } else {
          $('header').removeClass('fija').addClass('translucida');
      }
  });

  // Click event para desplazarse suavemente hacia arriba
  $('#m-button-up').click(function( e ) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 500);
      return false;
  });

});
