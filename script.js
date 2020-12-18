$(document).ready(function() {

    // declaring a function to change top positiong for the sliding menu in mobile
    const slidingBar = function (slideTop) {
        console.log('function');
        $('.slidingMenu').css({
            'top': slideTop
        })
    }    

    // calling the sliding bar function when clicked on the icon to slide down
    $('.hamburger').on('click', function(){
        slidingBar(0);
    })

    // calling the sliding bar function to slide up the menu when an option is selected
    $('.slidingMenu').on('click', function(){
        slidingBar('-100%')
        $('a').css({
            'color': '#e3e5d2'
        })
    })


    // scroll down animation for the mouse scroll on the header
    $('.scrollDown').on('click', function(e){
    e.preventDefault();
    $('html').animate({
        scrollTop: $('#about').offset().top
    }, 1000);
    })

    // scroll animation for the projects to appear
    $(window).scroll(function () {
        const topContainer = $('.topContainer'),
        scroll = $(window).scrollTop();
        const wh = $(window).height() - 10;
        const wv = $(window).width();

        // for sticky header to appear in white anchor tags! and when on home page then in darker anchors
        if (scroll >= 500 && wv >= 1024){
            topContainer.addClass('sticky'); 
            $('a').css({
                'color':'#e3e5d2'
            })
        } else if (scroll < 500 && wv >= 1024){
            topContainer.removeClass('sticky');
            $('a').css({
                'color': 'rgba(52, 53, 57, 0.9)'
            })
        }
        else{ 
            topContainer.removeClass('sticky');
        }

        // animation for the projects to appear...
        if (scroll > $('.projectOne').offset().top - wh) {
            $('.projectOne').addClass('onScrollLeft');
        }
        if (scroll > $('.projectTwo').offset().top - wh) {
            $('.projectTwo').addClass('onScrollRight');
        }
        if (scroll > $('.projectThree').offset().top - wh) {
            $('.projectThree').addClass('onScrollLeft');
        }
        if (scroll > $('.projectFour').offset().top - wh) {
            $('.projectFour').addClass('onScrollRight');
        }
    })

});
