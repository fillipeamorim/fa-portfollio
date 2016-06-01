// Default JavaScript Functions and Initiations

// jQuery functions
(function(){
  jQuery(".navbar-toggle").click(function() {
    jQuery(".navbar").toggleClass('open');
    //jQuery(".fa").toggleClass('open');
  });
})();

// Load Custom Google Font
WebFont.load({ google: { families: ['Montserrat:400', 'Merriweather:300,300italic,700,700italic'] } });

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