<template>
    <div class="hoverBoxs">
        <div class="swiper-box">
            <swiper
                ref="awesomeSwiperA"
                v-bind:options="swiperOptionA"
                v-on:slide-change="onSlideChange"
            >
                <!-- slides -->
                <swiper-slide v-for="box in boxs" v-bind:key="box.imgSrc">
                    <hover-box :color="box.color">
                        <template slot="content">
                            <img v-bind:src="box.imgSrc" alt>
                            <p class="hoverBox-title">{{box.title}}</p>
                        </template>
                        <template slot="hover">
                            <p v-html="box.hoverText"></p>
                        </template>
                    </hover-box>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
function touchendHandler(evt) {
    if (evt.target.className.search('js-hoverBox') !== -1) {
        $(evt.target).find('.js-hoverBox-hover').animate({ top: 0 });
    }
    else {
        $(evt.target).parents('.js-hoverBox').find('.js-hoverBox-hover').animate({ top: 0 });
    }
}
module.exports = {
    props: ['boxs'],
    data: function () {
        return {
            swiperOptionA: {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                on: {
                    init: function () {
                        $('.js-hoverBox').swipe({
                            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                                if (direction === null && event.target.className !== 'swiper-button-prev' && event.target.className !== 'swiper-button-next') {
                                    touchendHandler(event);
                                }
                            },
                            threshold: 0,
                            allowPageScroll: 'vertical',
                        });
                    },
                }
            },
        }
    },
    computed: {
        swiperA: function () {
            return this.$refs.awesomeSwiperA.swiper;
        },
    },
    methods: {
        onSlideChange: function () {
            $('.js-hoverBox-hover').css({ top: '100%' });
        }
    },
}
</script>