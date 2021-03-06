var $ = jQuery;
jQuery(document).ready(function ($) {
  // Smooth Scrool

  $(".navbar-nav a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800
      );
    }
  });

  // Owl Carousel Banner Slider

  $(document).ready(function () {
    $(".banner_slider").owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      loop: true
    });
  });

  // Counter Js

  $(".counter").counterUp({
    delay: 10,
    time: 1000
  });

  // Team Carousel

  $(".team_slider").owlCarousel({
    loop: true,
    responsiveClass: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        dots: false
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      },
      1140: {
        items: 5
      }
    }
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
        dots: false
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      },
      1140: {
        items: 4
      }
    }
  });

  // WoW js

  new WOW().init();

  // Sticky Menu

  window.addEventListener("scroll", function () {
    let header = document.querySelector("#header");
    let topBar = document.querySelector(".header_top");
    header.classList.toggle("header-fixed", window.scrollY > 0);
  });
});
