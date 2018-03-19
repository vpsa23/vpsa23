$(document).ready(() => {
  
  // init controller
  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      triggerElement: '#me'
    })
    .setClassToggle('#me', 'show')
    .addTo(controller);

});


// Evento del menú
$('a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 500, function(){
      window.location.hash = hash;
    });
  }
});







