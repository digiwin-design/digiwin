<template>
    <div class="carousel">
        <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, idx) in 3" :key="item">
                    <div class="slide container">
                        <div class="slide__video">
                            <a data-fancybox href="https://youtu.be/uerKd6Cfqr0">
                                <img :src="require(`@/assets/images/10/slide${idx + 1}-poster.jpg`)">
                            </a>
                        </div>
                        <div class="slide__content">
                            <div class="slide__content--title">
                                <img :src="require(`@/assets/images/10/slide${idx + 1}-logo.png`)">
                                <ul>
                                    <li>35年老牌婦嬰百貨─安琪兒</li>
                                    <li>線下帶動線下，實際體驗帶動全域營銷</li>
                                </ul>
                            </div>
                            <p class="slide__content--desc">消費習慣的改變、少子化的衝擊，婦嬰市場要如何做到突圍？安琪兒以會員經營作為突破口，整合線上線下行銷，以會員經營滾動商機，更以即時營運報表做到快速反應、有效決策！</p>
                            <a href="">完整案例</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css';
import Vue from 'vue';
if (process.browser) {
    const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
    Vue.use(VueAwesomeSwiper)
}

export default {
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/common/variable';
@import '~assets/sass/common/helpers';
$content-width: 1100px;

.carousel {
    position: relative;
    &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 341px;
        background-color: rgba(#ffebcc, .6);
        content: '';
        @media (min-width: $tablet-width + 1) {
            left: 50%;
            max-width: 640px;
            transform: translateX(-50%);
        }
        @media (min-width: $content-width + 1) {
            bottom: 66px;
            max-width: 1100px;
            height: 306px;
            transform: translateX(-50%);
        }
    }
}
.slide {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 590px;
    @media (min-width: $content-width + 1) {
        flex-direction: row;
        max-width: 1000px;
    }
    &__video {
        @media (min-width: $content-width + 1) {
            transform: translateY(14px);
        }
        > a {
            display: block;
        }
    }
    &__content {
        padding: 20px;
        background-color: #f9711f;
        box-shadow: 0 0 10px 5px rgba(78,10,14,.2);
        color: #fff;
        @media (min-width: $content-width + 1) {
            width: 430px;
            height: 430px;
            order: -1;
        }
        &--title {
            display: flex;
            margin-bottom: 1em;
            align-items: flex-start;
            @media (min-width: $content-width + 1) {
                margin-bottom: 0;
                height: 151px;
            }
            img {
                margin-right: 1em;
                max-width: 66px;
                flex-shrink: 0;
                @media (min-width: $content-width + 1) {
                    max-width: 100%;
                }
            }
            li {
                &:nth-of-type(1) {
                    margin-bottom: .5em;
                    font-size: 20px;
                    line-height: 1.3;
                }
                &:nth-of-type(2) {
                    font-weight: bold;
                    font-size: 26px;
                    line-height: 36px;
                }
            }
        }
        &--desc {
            margin-bottom: 1em;
            font-size: 20px;
            line-height: 30px;
        }
        a {
            @include btn(100%, 60px, #fff, #313131, 5px);
            font-weight: bold;
            font-size: 26px;
        }
    }
}
/deep/ .swiper-container {
    padding-bottom: 40px;
    @media (min-width: $content-width + 1) {
        padding-top: 20px;
        padding-bottom: 20px;
    }
}
/deep/ .swiper-pagination {
    bottom: 13px;
    display: flex;
    justify-content: center;
    @media (min-width: $content-width + 1) {
        bottom: 82px;
        left: calc(50% + 432px);
        width: auto;
    }
    &-bullet {
        margin-right: 7.5px !important;
        margin-left: 7.5px !important;
        width: 10px;
        height: 10px;
        background-color: #fff;
        opacity: 1;
        &-active {
            background-color: #f55a00;
        }
    }
}
</style>