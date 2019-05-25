// =============================================================================
// function
// =============================================================================
/**
 * 解決方案區塊動畫
 */
function runAnimation() {
    let pos = $(window).scrollTop();
    let distance = $('#solution').offset().top - $(window).height(); // 解決方案區塊與視窗底部的距離
    if (pos >= distance) {
        let i = 0;
        let loop = function () {
            setTimeout(() => {
                $('.js-solution-item')
                    .eq(i)
                    .addClass('fadeInRight');
                i++;
                if (i < $('.js-solution-item').length) {
                    loop();
                } else {
                    // 全部動畫完成後展開第一項
                    setTimeout(() => {
                        $('.js-solution-title')
                            .first()
                            .addClass('active')
                            .next()
                            .slideDown();
                        animationEnd = true;
                    }, 1000);
                }
            }, 200);
        };
        loop();
    }
}

// =============================================================================
// event
// =============================================================================
$(window).on(
    'scroll.show',
    _.throttle(function () {
        if (!animationEnd) {
            runAnimation();
        }
    }, 100)
);

$(window).on(
    'scroll.nav',
    _.throttle(function () {
        // 改寫導覽列第一項樣式
        if ($('.js-fixedNav').is(':visible')) {
            let pos = $(this).scrollTop();
            if (pos + 510 >= targetPos) {
                $('.js-fixedNav:visible')
                    .find('a:first')
                    .addClass('is-active');
            } else {
                $('.js-fixedNav:visible')
                    .find('a:first')
                    .removeClass('is-active');
            }
        }
    }, 100)
);

$(window).on('load resize', function () {
    // 取得第一區塊的位置
    if ($('.js-fixedNav').is(':visible')) {
        let target = $('.js-fixedNav:visible')
            .find('a:first')
            .attr('href');
        targetPos = $(target).offset().top;
    }
});

// 解決方案列表開合
$(document).on('click', '.js-solution-title', function () {
    $(this)
        .toggleClass('active')
        .next()
        .slideToggle()
        .parent()
        .siblings()
        .find('.js-solution-title')
        .removeClass('active')
        .next()
        .slideUp();
});

// 錨點連結
$(document).on('click', '#product-link', function (event) {
    event.preventDefault();
    let target = $(this).attr('href');
    let targetPos = $(target).offset().top;
    let $nav = $('#pcnav-sticky-wrapper');
    if ($nav.is(':visible')) {
        targetPos -= $nav.height();
    }
    $('html, body').animate({ scrollTop: targetPos });
});

// =============================================================================
// init
// =============================================================================
let targetPos = 0;
let animationEnd = false; // 動畫是否完成

// 電腦版導覽列
$('#pcnav')
    .sticky()
    .navScroll({ scrollSpy: true });

runAnimation();
