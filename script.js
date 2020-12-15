  $(document).ready(function() {
      $(window).scroll(function () {
          let wh = $(window).height() - 100;
          if ($(window).scrollTop() > $('.projectOne').offset().top - wh) {
              $('.projectOne').addClass('onScroll');
          }
          if ($(window).scrollTop() > $('.projectTwo').offset().top - wh) {
              $('.projectTwo').addClass('onScroll');
          }
          if ($(window).scrollTop() > $('.projectThree').offset().top - wh) {
              $('.projectThree').addClass('onScroll');
          }
          if ($(window).scrollTop() > $('.projectFour').offset().top - wh) {
              $('.projectFour').addClass('onScroll');
          }
      })
  });
// Adding animation for the images to show on scroll
;