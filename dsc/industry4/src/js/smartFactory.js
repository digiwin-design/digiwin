/*sixProcess tooltip*/
$('#sixProcess').tooltip({
    position: { my: 'center top', at: 'center top+63px' }
});

var $win = $(window);
var $htmlBody = $('html,body');
var winWidth = $win.outerWidth();
var processNum = 0;
var threePointNum = 0;
var move, prevProcessName, nextProcessName;
var moveDistance = 445;
var $sixProcessTxtOuter = $('.sixProcessTxtOuter');
var $sixProcessNext = $('.sixProcessList .next');
var $sixProcessPrev = $('.sixProcessList .prev');
var $sixProcessListInner = $('.sixProcessListInner');
var $sixProcessBtn = $('.sixProcessBtn');
var $threePointListInner = $('.threePointListInner');
var $threePointIcon = $('.threePointIcon');
var $threePointOrder = $('.threePointList .order li');
var isPrevClose = true;

$win.resize(function () {
    winWidth = $win.outerWidth();
});

/*scrollDown*/
var scrollDownNum;
$('#mainVisual .scrollDown').click(function () {
    scrollDownNum = $('#sixProcess').offset().top;
    scrollDown();
});

$('#sixProcess .scrollDown').click(function () {
    scrollDownNum = $('#wrapper').offset().top;
    scrollDown();
});

function scrollDown() {
    $htmlBody.stop().animate({ scrollTop: scrollDownNum });
}

/*六階段場景*/
$sixProcessBtn.mouseover(function () {
    var $this = $(this);
    $sixProcessBtn.removeClass('active');
    $this.addClass('active');
});

/*三大關鍵*/
$threePointIcon.click(function () {
    threePointNum = $threePointIcon.index(this);
    moveThreePoint();
});

function moveThreePoint() {
    move = threePointNum * moveDistance;
    $threePointListInner.stop().animate({ left: -move });
    if (threePointNum !== 0) {
        $threePointIcon.removeClass('active').eq(threePointNum).addClass('active');
    } else {
        $threePointIcon.removeClass('active');
    }
}

// 輪播
new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        delay: 5000
    },
    pagination: {
        el: '.case-pagination',
        clickable: true,
        bulletClass: 'case-pagination-bullet',
        bulletActiveClass: 'case-pagination-bullet-active'
    }
});

$('.solFigure01, .solFigure02').fancybox({
    openEffect: 'fade',
    closeEffect: 'fade',
    helpers: {
        overlay: { locked: false }
    }
});

// =============================================================================
// vue
// =============================================================================
const store = new Vuex.Store({
    state: {
        isMobile: false,
        showMask: true,
        showAd: true,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
        toggleMask(state, payload) {
            state.showMask = payload;
        },
        toggleAd(state, payload) {
            state.showAd = payload;
        },
    }
});

// new Vue({
//     el: '#ad',
//     components: {
//         'ad': httpVueLoader('components/Ad.vue'),
//         'menu-mask': httpVueLoader('components/MenuMask.vue'),
//     },
//     methods: {
//         mediaSensor() {
//             let mm = window.matchMedia('(min-width: 769px)');
//             mm.addListener(this.resizeWidth);
//             this.resizeWidth(mm);
//         }, 
//         resizeWidth(pMatchMedia) {
//             let isMobile = pMatchMedia.matches ? false : true;
//             store.commit('updateDevice', isMobile);
//         },
//     },
//     mounted() {
//         this.mediaSensor();
//     },
// });