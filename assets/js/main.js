var $ = jQuery;
jQuery(document).ready(function ($) {
  // Owl Carousel Banner Slider

  $(document).ready(function () {
    $(".banner_slider").owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      loop: true,
    });
  });

  // Counter Js

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // Team Carousel

  $(".team_slider").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
