
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll<100){
        $('#navigation').css('background-color', 'transparent');
    }
    else{
        $('#navigation').css('background-color', '#3c7778');
    }
});

$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});