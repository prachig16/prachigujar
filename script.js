  $(document).ready(function() {

    //   $(document).on('click', 'a[href^="#"]', function (e) {
    //       e.preventDefault();
    //       $('html, body').stop().animate({
    //           scrollTop: $($(this).attr('href')).offset().top
    //       }, 700, 'linear');
    //   });


      $(window).scroll(function () {
          let wh = $(window).height() - 100;
          if ($(window).scrollTop() > $('.projectOne').offset().top - wh) {
              $('.projectOne').addClass('onScrollLeft');
          }
          if ($(window).scrollTop() > $('.projectTwo').offset().top - wh) {
              $('.projectTwo').addClass('onScrollRight');
          }
          if ($(window).scrollTop() > $('.projectThree').offset().top - wh) {
              $('.projectThree').addClass('onScrollLeft');
          }
          if ($(window).scrollTop() > $('.projectFour').offset().top - wh) {
              $('.projectFour').addClass('onScrollRight');
          }
      })

  });
// Adding animation for the images to show on scroll
;