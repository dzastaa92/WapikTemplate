$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll < 50) {
        $('#navigation').removeClass("navBackground");
    }
    else {
        $('#navigation').addClass("navBackground")
    }
});

$(document).on('click', 'a[href^="#"]', function (e) {
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

$(function () {
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').on('click touchstart', function () {
        $('.navbar-toggle:visible').click();
    });
});

$(window).on("load", function () {
    $(window).scroll(function () {
        $("#aboutus .section-header, #pricing .section-header, .aboutus-features__element, .aboutus-others__element, .pricing-tabs__element, .pricing-plans, .pricing-help").each(function () {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)

               if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(500, 1);
                }

            } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity") == 1) {
                    $(this).fadeTo(500, 0);
                }

            }
        });
    });
    $(window).scroll(); //invoke scroll-handler on page-load
});
