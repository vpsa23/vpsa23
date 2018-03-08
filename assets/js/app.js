$(document).ready( => () {

});


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

$('.fa-arrow-down').on('click', function(event) {

})