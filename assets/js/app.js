$(document).ready(() => {

  $("#name").smoove({
    offset: '15%',
    moveY: '100px',
  });

});




// Evento del menú
$('a').on('click', function(event) {
  if (this.menu !== '') {
    event.preventDefault();
    var menu = this.menu;
    $('html, body').animate({
      scrollTop: $(menu).offset().top
    }, 500, function(){
      window.location.menu = menu;
    });
  }
});
