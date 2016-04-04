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

$(document).ready(function () {

    $(window).scroll(startCounter);
    function startCounter() {
        $('.count').each(function () {
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            if (objectBottom < windowBottom) {
                $(window).off("scroll", startCounter);
                var $this = $(this);
                $({Counter: 0}).animate({Counter: $this.text()}, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            }
        });
    }


    $(window).scroll(function () {
        $("#aboutus .section-header, .aboutus-features__element, .aboutus-others__element").each(function () {
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

    //window and animation items
    var animation_elements = $('.quotation-container, .world-container, .contact-container');
    var web_window = $(window);

    //check to see if any animation containers are currently in view
    function check_if_in_view() {
        //get current window information
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);


        //iterate through elements to see if its in view
        $.each(animation_elements, function () {

            //get the elements information
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                element.addClass('in-view');
            } else {
                element.removeClass('in-view');
            }
        });

    }

    //on or scroll, detect elements in view
    $(window).on('scroll resize', function () {
        check_if_in_view()
    })
    //trigger our scroll event on initial load
    $(window).trigger('scroll');


});

