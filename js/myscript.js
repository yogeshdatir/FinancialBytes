$(function () {
  
  "use strict";
  
  var topoffset = 50; //variable for menu  height
  var doc = $(document);
  var wheight = $(window).height();//get the height of the window
  
  $('.fullheight').css('height', wheight);//set to window height
  
  //replace IMG inside carousel with background image
  $('#car .carousel-item img').each(function() {
    var imgsrc = $(this).attr('src');
    $(this).parent().css({'background-image' : 'url('+imgsrc+')' });
    $(this).remove();
  });
  
  //adjust height of carousel images when window is resized
  $(window).resize(function() {
    wheight = $(window).height();
    $('.fullheight').css('height', wheight);//set to window height
  });
  
  //Activate the scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });
  
  $(function() {
    $('header nav').onePageNav();
  });

  $(document).scroll(function () {
    if (doc.scrollTop() > 200) {
      $('header nav').addClass('animated rubberBand inbody');
    } else {
      $('header nav').removeClass('animated rubberBand inbody');
    }
  });
  
});