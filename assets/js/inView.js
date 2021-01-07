$(document).ready(function () {
    $(window).scroll(function () {
        $('.inner').each(function () {
            var play_button = $(this).find('.image.zoom');
            var grow = $(this).find('.grow');
            var icon = $(this).find('.play.icon');


            if ($(this).isOnScreen()) {
                // The element is visible, do something
                play_button.css("border", "1em solid white");
                play_button.css("animation-play-state", "paused");
                play_button.css("transform", "scale(0.9)");

                grow.css("height", 10 + "em");
                grow.css("padding", "0.5em 3em 0em 3em");

                icon.css("opacity", "1");

            } else {
                // The element is NOT visible, do something else
                play_button.css("border", "none");
                play_button.css("animation-play-state", "running");
                play_button.css("transform", "scale(1)");

                grow.css("height", 2 + "em");
                grow.css("padding", "0.1em 3em 0.5em 3em");

                icon.css("opacity", "0");

            }
        });
        /*
        $('.image.zoom').each(function () {
            if ($(this).isOnScreen()) {
                $(this).css("border", "1em solid white");
                $(this).css("animation-play-state", "paused");
                $(this).css("transform", "scale(0.9)");

            } else {
                $(this).css("border", "none");
                $(this).css("animation-play-state", "running");
                $(this).css("transform", "scale(1)");
            }
        });

        $('.play.icon').each(function () {
            if ($(this).isOnScreen()) {
                $(this).css("opacity", "1");

            } else {
                $(this).css("opacity", "0");
            }
        });
        */

    });
});

$.fn.isOnScreen = function () {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    viewport.top = viewport.top + (win.height() / 2);
    viewport.bottom = viewport.bottom - (win.height() / 2);


    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};