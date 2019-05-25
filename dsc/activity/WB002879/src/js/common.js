// =============================================================================
// function
// =============================================================================
// 電腦版導覽列置頂
$.fn.fixedNav = function() {
    return this.each(function() {
        let $nav = $(this);
        let navPos = $nav.offset().top;

        $(window).on(
            'scroll.nav',
            _.throttle(function() {
                // 定位導覽列
                let pos = $(this).scrollTop();
                if (pos >= navPos) {
                    $nav.addClass('fixed');
                } else {
                    $nav.removeClass('fixed');
                }
            }, 50)
        );

        $(window).on('resize.nav', function() {
            if (!$nav.hasClass('fixed')) {
                navPos = $nav.offset().top;
            }
        });
    });
};

// =============================================================================
// event
// =============================================================================
// 錨點連結
$(document).on('click', '.js-nav', function(event) {
    event.preventDefault();
    let target = $(this).attr('href');
    let targetPos = $(target).offset().top;
    $('html, body').animate({ scrollTop: targetPos });
});

// =============================================================================
// init
// =============================================================================
// 線上客服
(function(y, e, s, i, n, g) {
    i = y.createElement(e);
    i.async = 1;
    i.src = s;
    n = y.getElementsByTagName(e)[0];
    n.parentNode.insertBefore(i, n);
})(
    document,
    'script',
    '//p39.cami.yesing.com/patrol/elasticity_v2/department/default/digiwin'
);

// 設備偵測
let md = new MobileDetect(window.navigator.userAgent);
if (md.os() === 'AndroidOS') {
    $('html').addClass('androidOS');
}
