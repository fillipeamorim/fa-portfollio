// Default JavaScript Functions and Initiations

// jQuery functions
(function(){
  jQuery(".navbar").click(function() {
    jQuery(".navbar").toggleClass('open');
  });
})();

// Load Custom Google Font
WebFont.load({ google: { families: ['Noticia+Text:400', 'Montserrat:400,700'] } });

// Setup WOW.js
var wow = new WOW({
  boxClass:     'animate',
  animateClass: 'active',
  offset:       1,
  mobile:       true,
  live:         true
});
// Initiate WOW.js
wow.init();