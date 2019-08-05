// 錨點連結
$(document).on('click', '.js-nav', function (event) {
    event.preventDefault();
    let delay = $(this).data('delay') ? $(this).data('delay') : 0;
    let target = $(this).attr('href') || $(this).attr('xlink:href') || $(this).data('target');
    setTimeout(function () {
        let offset = $('.page-submenu').outerHeight();
        let targetPos = $(target).offset().top;
        let finalPos = offset ? targetPos - offset : targetPos;
        $('html, body').animate({ scrollTop: finalPos });
    }, delay);
});