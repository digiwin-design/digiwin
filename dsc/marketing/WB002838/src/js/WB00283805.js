// "智慧因應"滑鼠移入/出效果
$('.js-problemList').hover(
    function() {
        $(this)
            .children('.outline02')
            .stop()
            .animate({
                top: '0'
            });
        $(this)
            .find('.more')
            .stop()
            .animate({
                bottom: '-60px'
            });
    },
    function() {
        $(this)
            .children('.outline02')
            .stop()
            .animate({
                top: '100%'
            });
        $(this)
            .find('.more')
            .stop()
            .animate({
                bottom: '0'
            });
    }
);

// hover debug
// $('.js-problemList').children('.outline02').stop().animate({
//     'top': '0'
// });
// $('.js-problemList').find('.more').stop().animate({
//     'bottom': '-60px'
// });

// "成功案例"選單開合
$(document).on('click', '.js-case-header', function() {
    // 收起其它選單
    $(this)
        .parents('li')
        .siblings()
        .find('.js-case-content')
        .removeClass('active')
        .siblings()
        .removeClass('active');

    // 開合目前點擊選單
    $(this)
        .toggleClass('active')
        .siblings()
        .toggleClass('active');
});

// 點擊解決方案
$(document).on('click', '.js-goContact', function() {
    let targetPos = $('#contact').position().top;
    $('html, body').animate({ scrollTop: targetPos - navHeight });
});

$(window).on(
    'scroll',
    _.throttle(function() {
        // 改寫導覽列第一項樣式
        let pos = $(this).scrollTop();
        if (pos + offset >= targetPos) {
            $('.js-fixedNav:visible')
                .find('li:first a')
                .addClass('is-active');
        } else {
            $('.js-fixedNav:visible')
                .find('li:first a')
                .removeClass('is-active');
        }
    }, 100)
);

$(window).on('load resize', function() {
    let target = $('.js-fixedNav:visible')
        .find('li:first a')
        .attr('href');
    targetPos = $(target).offset().top;
});

// =============================================================================
// init
// =============================================================================
let targetPos = 0;
let offset = 510;
let navHeight = $('#nav-dtp').outerHeight();

// 導覽列
$('.js-fixedNav')
    .sticky()
    .navScroll({ scrollSpy: true });
