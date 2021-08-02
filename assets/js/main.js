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
});
