// =============================================================================
// function
// =============================================================================
/**
 * 取得不重複上次的隨機亂數
 */
function getRandom() {
    let rnum = _.random(1, 7);
    if (rnum !== coverNum) {
        coverNum = rnum;
    } else {
        getRandom();
    }
}

function setFixedElement() {
    let pos = $(window).scrollTop();
    let distance = $('#section2').offset().top - $(window).height();

    // 如有手機導覽列
    if ($('.mbnav').is(':visible')) {
        distance += $('.mbnav').height();
    }

    if (pos >= distance) {
        $('#section1-switch, #section1-next').addClass('no-fixed');
    } else {
        $('#section1-switch, #section1-next').removeClass('no-fixed');
    }
}

function initComponents(el) {
    // 輪播圖
    let initTotal = 0;
    let total = $(el + ' .swiper-container').length;
    let mySwiper = new Swiper(el + ' .swiper-container', {
        loop: true,
        pagination: {
            el: el + ' .swiper-pagination',
            clickable: true
        },
        on: {
            imagesReady() {
                initTotal++;
                // 輪播圖圖片載入完畢後執行
                if (initTotal === total) {
                    // tab
                    $(el + ' .js-tabs').tabs({
                        // 切換頁籤後更新輪播圖
                        activate() {
                            mySwiper.forEach(element => {
                                element.update();
                            });
                        }
                    });
                    // accordion
                    $(el + ' .js-accordion').accordion({
                        icons: false,
                        collapsible: true,
                        heightStyle: 'content'
                    });
                }
            }
        }
    });
}

// =============================================================================
// event
// =============================================================================
$(window).on(
    'scroll',
    _.throttle(function() {
        setFixedElement();
    }, 100)
);

$(window).on('resize', function() {
    setFixedElement();
    $('.js-accordion').accordion('refresh');
});

// section4 錨點連結
$(document).on('click', '.js-industry-nav', function(event) {
    event.preventDefault();
    let target = $(this).data('target');
    let offset = $(this).data('offset');
    let targetPos = $(`.js-${target}:visible`).offset().top;
    let finalPos = offset ? targetPos - offset : targetPos;
    $('html, body').animate({ scrollTop: finalPos });
});

// 開燈
$(document).on('click', '#section1-switch', function() {
    clearInterval(coverTimer);
    $('#section1').addClass('disabled');
    $('#section1-content, #section1-next').fadeIn();
});

$(document).on('mouseenter', '#section1-content li', function() {
    $('#section1-content li').removeClass('active');
    $(this).addClass('active');
});

// =============================================================================
// init
// =============================================================================
setFixedElement();

// section1 spotlight
let coverNum;
let coverTimer = setInterval(() => {
    getRandom();
    $('#section1')
        .removeClass()
        .addClass(`section1 cover${coverNum}`);
}, 1000);

// section4
fetch('db.json')
    .then(res => res.json())
    .then(res => {
        // pc
        new Vue({
            el: '#section4-industry',
            data: {
                results: []
            },
            mounted() {
                this.results = res.industry;
            },
            updated() {
                initComponents(`#${this.$el.id}`);
            },
            methods: {
                isDisabled(obj) {
                    return Object.keys(obj).length === 1;
                }
            }
        });

        // mobile
        new Vue({
            el: '#section4-industry-mb',
            data: {
                results: []
            },
            mounted() {
                this.results = res.industry;
            },
            updated() {
                initComponents(`#${this.$el.id}`);
            },
            methods: {
                isDisabled(obj) {
                    return Object.keys(obj).length === 1;
                }
            }
        });
    });
