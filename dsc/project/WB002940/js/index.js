
//3图上弹出
$(function () {
    $('.threeBox li').hover(function () {
        $(this).find('.fadein').stop().animate({ 'top': '0' });
        $(this).find('.fadeout');
    }, function () {
        $(this).find('.fadein').stop().animate({ 'top': '130%' });
        $(this).find('.fadeout');
    });
});

//5Icon切换
$(function () {
    $('.fivebox li').hover(function () {
        $('.tab .tabtxt').eq($(this).index()).show().siblings().hide();
        $(this).addClass('active').siblings().removeClass('active');
    });
});

//移动端5Icon折叠
$(function () {
    //菜单隐藏展开
    var tabs_i = 0;
    $('.icon1').click(function () {
        var _self = $(this);
        var j = $('.icon1').index(_self);
        if (tabs_i == j) return false; tabs_i = j;
        $('.mtabtxt').slideUp().eq(tabs_i).slideDown();
    });
});

(function () {
    new Vue({
        el: 'main',
        data: function () {
            return {
                activeIndex: 0,
                loaded: false,
                opened: false
            };
        },
        computed: {
            url: function () {
                return [
                    'https://www.youtube.com/embed/_w2VpMY3p0I',
                    'https://www.youtube.com/embed/1CR80-fK6RY',
                    'https://www.youtube.com/embed/8v8keEs5aEs',
                    'https://www.youtube.com/embed/AsFp9OekTBY',
                    'https://www.youtube.com/embed/BmSwoKhMR8s',
                    'https://www.youtube.com/embed/EMkvW80K1ug',
                    'https://www.youtube.com/embed/-JkFWTqb7js',
                ];
            }
        },
        methods: {
            clickHandler: function (idx) {
                if (idx) {
                    this.activeIndex = idx;
                }
                $('#case_popup').popup('show');
            },
            onLoaded: function () {
                this.loaded = true;
            }
        },
        mounted: function () {
            var _this = this;

            new Swiper('#swiper1', {
                centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    disabledClass: 'my-button-disabled'
                },
            });

            let swiper = new Swiper('#swiper2', {
                centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    disabledClass: 'my-button-disabled'
                },
                on: {
                    slideChange: function () {
                        _this.activeIndex = this.realIndex;
                    },
                },
            });

            $('#case_popup').popup({
                opacity: 0.3,
                transition: 'all 0.3s',
                scrolllock: true,
                beforeopen: function () {
                    swiper.autoplay.stop();
                    _this.opened = true;
                },
                closetransitionend: function () {
                    swiper.autoplay.start();
                    _this.opened = false;
                    _this.loaded = false;
                    _this.activeIndex = swiper.realIndex;
                }
            });
        },
    });
}());