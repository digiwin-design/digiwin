// =============================================================================
// function
// =============================================================================
function initSwiper() {
    mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.cast_popup-pagination',
            clickable: true,
            bulletClass: 'cast_popup-pagination-bullet',
            bulletActiveClass: 'cast_popup-pagination-bullet-active'
        },
        navigation: {
            prevEl: '.cast_popup-button-prev',
            nextEl: '.cast_popup-button-next'
        },
        initialSlide: mySwiper_index - 1
    });
}

// =============================================================================
// event
// =============================================================================
$('.js-cast_popup_open').on('click', function () {
    mySwiper_index = this.dataset.index;
});

// =============================================================================
// init
// =============================================================================
let mySwiper;
let mySwiper_index;

// 導覽列
$('.js-fixedNav').sticky();

$('#cast_popup').popup({
    opacity: 0.3,
    transition: 'all 0.3s',
    onopen() {
        initSwiper();
    },
    closetransitionend() {
        mySwiper.destroy();
    }
});

new Vue({
    el: '#cast_popup-app',
    data: {
        results: []
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            fetch('data.json')
                .then(res => res.json())
                .then(res => {
                    this.results = res;
                });
        }
    }
});
