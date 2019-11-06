<template>
    <div class="case" :class="type">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide js-slide" v-for="(item, idx) in cases" :key="item.industry">
                    <div>
                        <h2
                            @click="accordionSlideToggle"
                            class="container"
                            :data-mobile="item.title"
                            :data-desktop="item.industry"
                        ></h2>
                        <div>
                            <div class="case__row container">
                                <h3 :data-industry="item.industry">{{item.subtitle}}</h3>
                                <p>{{item.desc}}</p>
                            </div>
                            <div class="case__row container" :class="`case${idx + 1}`">
                                <img
                                    :src="require(`~/assets/images/03/case-avatar${idx + 1}.png`)"
                                    alt
                                    class="case__avatar"
                                />
                                <div class="case__subtitle">{{item.title}}</div>
                                <div class="case__quote">
                                    <h3 v-html="item.quote[0]"></h3>
                                    <p>{{item.quote[1]}}</p>
                                </div>
                                <a
                                    :href="item.video"
                                    class="case__video-poster"
                                    data-fancybox
                                >
                                    <img :src="require(`~/assets/images/03/case-screenshot${idx + 1}.jpg`)" alt />
                                </a>
                                <a :href="item.link" target="_blank" class="case__readmore">完整案例</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    props: {
        cases: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            mySwiper: null,
        }
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        type() {
            return this.isMobile ? 'accordion' : 'carousel';
        },
    },
    watch: {
        isMobile: {
            handler(val) {
                if (val) {
                    this.destroySwiper();
                }
                else {
                    this.removeAccordionSlideHeight();
                    this.initSwiper();
                }
            },
            immediate: true
        }
    },
    methods: {
        initSwiper() {
            this.$nextTick(() => {
                this.mySwiper = new Swiper(".swiper-container", {
                    loop: true,
                    // autoplay: {
                    //     disableOnInteraction: false,
                    //     delay: 5000
                    // },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    }
                });
            });
        },
        destroySwiper() {
            this.mySwiper && this.mySwiper.destroy();
        },
        initPopup() {
            $('[data-fancybox]').fancybox({
                toolbar: false,
                smallBtn: true,
            });
        },
        accordionSlideToggle() {
            if (!this.isMobile) return;
            let target = event.target;
            let titleHeight = target.offsetHeight;
            let contentHeight = target.nextElementSibling.offsetHeight;
            let slide = target.parentElement.parentElement;

            if (slide.style.height === 'auto') {
                slide.style.height = `${contentHeight + titleHeight}px`;
                setTimeout(() => {
                    slide.style.height = `${titleHeight}px`;
                }, 1);
            }
            else {
                slide.style.height = `${contentHeight + titleHeight}px`;
                setTimeout(() => {
                    slide.style.height = 'auto';
                }, 500);
            }
        },
        removeAccordionSlideHeight() {
            document.querySelectorAll('.js-slide').forEach(el => {
                el.style.height = '';
            });
        },
    },
    mounted() {
        this.initPopup();
    },
}
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css");
@import '~assets/sass/common/variable';
@import '~assets/sass/common/helpers';

$mobile-title-height: 97px;
.case {
    .container {
        @media (min-width: $tablet-width + 1) {
            padding-right: 0;
            padding-left: 0;
        }
    }
    h2 {
        height: $mobile-title-height;
        background-color: #0685ad;
        color: #fff;
        letter-spacing: getLetterSpacing(60);
        font-weight: bold;
        font-size: 26px;
        line-height: $mobile-title-height;
        &::before {
            content: attr(data-mobile);
        }
        @media (min-width: $tablet-width + 1) {
            position: absolute;
            width: 354px;
            height: 74px;
            border-radius: 0 0 20px 20px;
            text-align: center;
            font-size: 24px;
            line-height: 74px;
            &::before {
                content: attr(data-desktop);
            }
        }
    }
    &__row {
        &:nth-child(1) {
            padding-top: 1em;
            padding-bottom: 0.5em;
            @media (min-width: $tablet-width + 1) {
                padding: 0 0 0 408px;
                min-height: 150px;
            }
            h3 {
                margin-bottom: 0.2em;
                color: #0685ad;
                font-weight: bold;
                font-size: 30px;
                line-height: 36px;
                &::before {
                    display: block;
                    margin-bottom: 0.5em;
                    color: #000;
                    content: attr(data-industry);
                    letter-spacing: getLetterSpacing(60);
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 1;
                    @media (min-width: $tablet-width + 1) {
                        display: none;
                    }
                }
            }
        }
        &:nth-child(2) {
            $bg-color: #08acb2 #039196 #028388;
            @for $i from 1 through 3 {
                &.case#{$i} {
                    background-color: nth($bg-color, $i);
                }
            }
            display: flex;
            padding-top: 32px;
            padding-bottom: 40px;
            color: #fff;
            flex-wrap: wrap;
            @media (min-width: $tablet-width + 1) {
                position: relative;
                padding: 115px 50px 22px 50px;
                border-radius: 20px;
            }
            @media (min-width: 1200px) {
                padding-left: 368px;
            }
            h3 {
                font-weight: bold;
                font-size: 26px;
            }
        }
    }
    &__avatar {
        display: none;
        @media (min-width: 1200px) {
            position: absolute;
            bottom: 0;
            left: 0;
            display: block;
        }
    }
    &__subtitle {
        display: none;
        @media (min-width: $tablet-width + 1) {
            position: absolute;
            top: 0;
            left: 332px;
            display: block;
            width: 310px;
            height: 72px;
            background-color: #fff;
            color: #06346d;
            text-align: center;
            letter-spacing: getLetterSpacing(60);
            font-weight: bold;
            font-size: 26px;
            line-height: 72px;
            &::before,
            &::after {
                position: absolute;
                top: 0;
                width: 0;
                height: 0;
                border-style: solid;
                content: "";
            }
            &::before {
                right: 100%;
                border-width: 0 32px 72px 0;
                border-color: transparent #fff transparent transparent;
            }
            &::after {
                left: 100%;
                border-width: 72px 0 0 32px;
                border-color: transparent transparent transparent #fff;
            }
        }
    }
    &__quote {
        @media (min-width: $tablet-width + 1) {
            padding-top: 1em;
            padding-right: 30px;
            width: calc(100% - 427px);
        }
    }
    &__video-poster {
        margin-top: 1em;
        margin-bottom: 1.5em;
        width: 100%;
        text-align: center;
        @media (min-width: $tablet-width + 1) {
            margin-top: 0;
            margin-bottom: 0;
            width: 427px;
        }
    }
    &__readmore {
        width: 100%;
        height: 63px;
        background-color: #063970;
        color: #fff;
        text-align: center;
        letter-spacing: getLetterSpacing(60);
        font-weight: bold;
        font-size: 24px;
        line-height: 63px;
        @media (min-width: $tablet-width + 1) {
            width: calc(100% - 457px);
        }
    }
    // for mobile
    &.accordion {
        .swiper-wrapper {
            flex-direction: column;
        }
        .swiper-slide {
            display: block;
            overflow: hidden;
            height: $mobile-title-height;
            transition: height 0.4s;
            & + .swiper-slide {
                margin-top: 2px;
            }
        }
    }
    // for desktop
    &.carousel {
        .swiper-container {
            padding-bottom: 3em;
        }
        .swiper-slide {
            position: relative;
            > div {
                margin: 0 auto;
                max-width: 1200px;
            }
        }
        .swiper-pagination {
            display: flex;
            justify-content: center;
        }
        /deep/ .swiper-pagination-bullet {
            margin: 0 5px !important;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: #b1b1b1;
            &-active {
                background-color: #14a7a9;
            }
        }
    }
}
</style>