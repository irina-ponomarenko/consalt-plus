$(document).ready(function () {
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 83) {
            $('.nav-header').addClass('fixed');
        } else {
            $('.nav-header').removeClass('fixed');
        }
    });
});
$(document).ready(function () {
    $(".nav-blog-page li").click(function () {
        $('.nav-blog-page ul li').removeClass('active_border');
        $(this).addClass('active_border');
        return false;
    });
});
$(document).ready(function () {
    $('.share-card').click(function () {
        $('.social-block').toggle(500)
    });
});




