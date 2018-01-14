(function() {
  'use strict';

  /* PARAMETERS  */
    var offset   = 30; //int in %

  /* D'ONT TOUCH ANY FURTHER IF YOU DON'T KNOW WHAT YOU ARE DOING */
  var $targets = $('[data-easy-reveal]');

  var windowHeight = $(window).height(),
      offsetHeight = windowHeight * offset / 100,
      docHeight    = $(document).height();

  function reveal(){
    $targets.each(function(){
      var targetTop    = $(this).offset().top;
      var windowScroll = $(window).scrollTop();
      var animation    = $(this).data('easy-reveal');
      //default animation
      if (!animation) { animation = 'fade-in-up'; }

      // lunch animation if scroll is further the target + offset  OR at the end of the page
      if ( targetTop < ( windowScroll + offsetHeight) || (windowScroll + windowHeight) === docHeight) {
        $(this).addClass(animation);
      }
    });
  }

  // lunch animation on scroll and document ready
  $(document).ready(reveal);
  $(window).scroll(reveal);

}());
