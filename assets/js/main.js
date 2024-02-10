(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.main').toggleClass('siteBar');   
  }); 
  
  // menu 
  $('#nvBtn,.nav_btn').click( function (){ 
  $('.menus').toggleClass('active');   
}); 


  
 // menu 
  $('.siteBar-btn-footer').click( function (event){ 
    event.preventDefault()
    $('#footermenu').toggleClass('footermenu');   
  }); 


  $(".research_slider").owlCarousel({
    items: 1,
    loop: true,
    // margin: 38,
    nav: true,
    dot: false,
    autoHeight:true,
    navText: ['<img src="assets/img/left_angle.svg" alt="">','<img src="assets/img/angle_right.svg" alt="">']
  });

  $(".analysis_slider").owlCarousel({
    items: 1,
    loop: true,
    // margin: 38,
    autoHeight:true,
    nav: true,
    dot: false,
    navText: ['<img src="assets/img/left_angle.svg" alt="">','<img src="assets/img/angle_right.svg" alt="">']
  });

  $(".comp-slider").owlCarousel({
    items: 1,
    loop: true,
    // margin: 38,
    autoHeight:true,
    nav: true,
    dot: false,
    navText: ['<img src="assets/img/left_angle.svg" alt="">','<img src="assets/img/angle_right.svg" alt="">']
  });

  $('.popUp').magnificPopup({
    type: 'image'
    // other options
});

  $('.graphic_img a').magnificPopup({
    type: 'image',
    gallery:{
			enabled:true
		},
});

})(jQuery);
