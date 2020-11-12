$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }

        $(this).toggleClass('active2');
 
        if ($(this).hasClass('active2')) {
            $('.drower-bg').addClass('active2');
        } else {
            $('.drower-bg').removeClass('active2');
        }

    });

});