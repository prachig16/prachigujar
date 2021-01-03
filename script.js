


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

    // declaring a function to change top positiong for the sliding menu in mobile
    const slidingBar = function (slideTop) {
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
    })


    // scroll down animation for the mouse scroll on the header
    $('.scrollDown').on('click', function(e){
    e.preventDefault();
    $('html').animate({
        scrollTop: $('#about').offset().top
    }, 500);
    })

});
