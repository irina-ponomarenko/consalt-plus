$(document).ready(function(){
    $('.b-carousel-button-right').click(function () {
        var selectedItem = $('.h-carousel-items').find('.active-img');
        selectedItem.removeClass('active-img');
        selectedItem.next().addClass('active-img');
    });
    $('.b-carousel-button-left').click(function () {
        var selectedItem = $('.h-carousel-items').find('.active-img');
        selectedItem.removeClass('active-img');
        selectedItem.prev().addClass('active-img');
    });

});
