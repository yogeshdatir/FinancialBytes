$(function () {
  
  "use strict";
  
  var topoffset = 50; //variable for menu  height
  var doc = $(document);
  
  //Activate the scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });

  $(document).scroll(function () {
    if (doc.scrollTop() > 200) {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
  });
  
});