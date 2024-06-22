
// Custom JavaScript code for sticky navigation

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('navbar-scrolled');
        } else {
            $('header').removeClass('navbar-scrolled');
        }
    });
});
