


$(document).ready(function() {

    // Initialize the typing plug-in
    const typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 65,
        backSpeed: 30,
        loop: true,
        backDelay: 2000,
        startDelay: 100,
    });

    // Initilalize AOS plug-in
    AOS.init({
        disable: window.innerWidth < 768
    });

   
    // toggle class to slide up the menu when an option is selected or clicked on the hamburger menu
    // When clicked on hamburger icon, close icon will be displayed and vice versa
    // when clicked on any menu items on the sliding menu same effect will be achieved

    $('.hamburger').on('click', function(){
        $('.slidingMenu').toggleClass('slideDown');
        $('.hamburger').css({
            'display': 'none'
        })
        $('.hamburgerClose').css({
            'display': 'inherit'
        })
    })

    $('.hamburgerClose').on('click', function () {
        $('.slidingMenu').toggleClass('slideDown');
        $('.hamburger').css({
            'display': 'inherit'
        })
        $('.hamburgerClose').css({
            'display': 'none'
        })
    })


    $('.slidingMenu').on('click', function(){
        $('.slidingMenu').toggleClass('slideDown');
        $('.hamburger').css({
            'display': 'inherit'
        })
        $('.hamburgerClose').css({
            'display': 'none'
        })
    })


    // scroll down animation for the mouse scroll on the header
    $('.scrollDown').on('click', function(e){
    e.preventDefault();
    $('html').animate({
        scrollTop: $('#about').offset().top
    }, 500);
    })


    
    // FUTURE: Try to get a function to change the sticky nav back to opaque when scrolled up
    
    // // Adding scroll function to change the background of sticky nav to have an opaque color when page scrolled up

    // const scroll = $(window).scrollTop()
    // $(window).scroll(function(){
    //     const top = $('.top');
    //     const wh = $(window).height() - 100;

    //     if (scroll > $('header').offset().top - wh){
    //         console.log('scrolled');
    //         top.css({
    //             'background-color': 'rgba(249, 245, 240, 1)'
    //         })
    //     }else{
    //         top.css({
    //             'background-color': 'rgba(249, 245, 240, 0.6)'
    //         })
    //     }
    // });
});
