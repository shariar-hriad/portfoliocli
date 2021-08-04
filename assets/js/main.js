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
    responsiveClass: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1140: {
        items: 5,
      },
    },
  });

  // Team Carousel

  $(".testimonial_slider").owlCarousel({
    loop: true,
    responsiveClass: true,
    autoplay: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1140: {
        items: 4,
      },
    },
  });
});
