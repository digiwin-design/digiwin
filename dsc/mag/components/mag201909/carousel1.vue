<template>
    <div v-if="slides" class="carousel1">
        <div class="carousel1-carousel">
            <div class="container">
                <swiper
                    ref="awesomeSwiperA"
                    :options="swiperOptionA"
                    @slide-change="onSlideChange"
                    @slide-change-transition-end="onSlideChangeTransitionEnd"
                >
                    <swiper-slide v-for="slide in slides" :key="slide.imgSrc">
                        <div class="slideItem">
                            <div class="slideItem-img">
                                <img :src="slide.imgSrc" alt>
                            </div>
                            <div class="slideItem-text">
                                <p>{{slide.speaker}}</p>
                                <p>{{slide.content}}</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'carousel1',
    props: {
        content: {
            type: Array,
            required: true
        }
    },
    data: function () {
        return {
            swiperOptionA: {
                loop: true,
                slidesPerView: 3,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    1300: {
                        slidesPerView: 1
                    }
                }
            },
            currentSlide: 0,
            loaded: false,
            slideReady: true,
            deviceChanged: false,
            slides: null,
        }
    },
    computed: {
        swiperA: function () {
            return this.$refs.awesomeSwiperA.swiper;
        },
        isCarousel1MobileWidth: function () {
            return store.state.isCarousel1MobileWidth;
        },
        mobileSlides: function () {
            return this.content;
        },
        desktopSlides: function () {
            let tempArr = _.cloneDeep(this.content);
            let lastItem = tempArr[tempArr.length - 1];
            tempArr.pop();
            tempArr.unshift(lastItem);
            return tempArr;
        },
    },
    watch: {
        isCarousel1MobileWidth: function (val, oldVal) {
            this.deviceChanged = true;
            this.setSlide();
        }
    },
    methods: {
        onSlideChange: function () {
            let _this = this;
            setTimeout(function () {
                if (!_this.deviceChanged) {
                    _this.loaded = false;
                    _this.slideReady = false;
                    _this.currentSlide = _this.swiperA.realIndex;
                }
                _this.deviceChanged = false;
            }, 100);
        },
        onSlideChangeTransitionEnd: function () {
            this.slideReady = true;
            this.clickHandler();
        },
        clickHandler: function () {
            let _this = this;
            $('.swiper-slide').off('click');
            $('.swiper-slide-next')
                .prev()
                .on('click', function () {
                    _this.swiperA.slidePrev();
                });
            $('.swiper-slide-next')
                .next()
                .on('click', function () {
                    _this.swiperA.slideNext();
                });
        },
        setSlide: function () {
            this.slides = this.isCarousel1MobileWidth ? this.mobileSlides : this.desktopSlides;
        },
    },
    mounted: function () {
        this.setSlide();
    },
    updated: function () {
        this.clickHandler();
    },
}
</script>