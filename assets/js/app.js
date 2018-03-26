$(document).ready(() => {
  
  // init controller
  var controller = new ScrollMagic.Controller();

//Imagen de aboutMe
  new ScrollMagic.Scene({
      triggerElement: '#me'
    })
    .setClassToggle('#me', 'fade-in')
    .addTo(controller);


  new ScrollMagic.Scene({
      triggerElement: '#list1'
    })
    .setClassToggle('#list1', 'show')
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '#list2'
    })
    .setClassToggle('#list2', 'show')
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '#cardSection'
    })
    .setClassToggle('#cardSection', 'fade-in')
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '#cardSection1'
    })
    .setClassToggle('#cardSection1', 'fade-in')
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '#listContact'
    })
    .setClassToggle('#listContact', 'fade-in')
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '#listImg'
    })
    .setClassToggle('#listImg', 'fade-in')
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '#listImg2'
    })
    .setClassToggle('#listImg2', 'fade-in')
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







