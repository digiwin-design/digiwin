// =============================================================================
// event
// =============================================================================
$(window).on(
    'scroll',
    _.throttle(function() {
        // 改寫導覽列第一項樣式
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
    }, 100)
);

$(window).on('load resize', function() {
    // 取得第一區塊的位置
    let target = $('.js-fixedNav:visible')
        .find('a:first')
        .attr('href');
    targetPos = $(target).offset().top;
});

// =============================================================================
// init
// =============================================================================
let targetPos = 0;

// 導覽列
$('.js-fixedNav')
    .sticky()
    .navScroll({ scrollSpy: true });

$.preload('images/06/signup-entry-bg-hover.png');
