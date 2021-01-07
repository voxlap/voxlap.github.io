$(document).ready(function () {
    $(window).scroll(function () {
        $('.grow').each(function () {
            if ($(this).isOnScreen()) {
                // The element is visible, do something
                $(this).css("height", 10 + "em");
                $(this).css("padding", "0.5em 3em 0em 3em");
                console.log("henlo");
            } else {
                // The element is NOT visible, do something else
                $(this).css("height", 2 + "em");
                $(this).css("padding", "0.1em 3em 0.5em 3em");

            }
        });
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

    viewport.top = viewport.top + (win.height() / 3);
    viewport.bottom = viewport.bottom - (win.height() / 3);


    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};