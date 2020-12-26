$(document).ready(function() {
    
    $('.burger-click').on('click', function () {
        console.log('click');
        $('.burger-click').empty();
        $('.burger-click').parent().addClass('text-center');
        $('.burger-click').removeClass('card').addClass('loader fas fa-hamburger fa-9x');
        setTimeout(() => {
            window.location = "https://polar-hamlet-57397.herokuapp.com/";
        }, 5000);
        
    })



});