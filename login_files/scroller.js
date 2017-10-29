$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('body').append('<a id="scroller" class="b-top" style="display: none;"><span id="but" class="b-top-but">наверх</span></a>');
    $('#scroller').click(function () {
        $('body, html').animate({scrollTop: 0}, 400);
        return false;
    });
});