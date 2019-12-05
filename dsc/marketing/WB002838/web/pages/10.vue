<template>
    <main :style="getBgStyle('main-bg')">
        <div class="section1">
            <div class="section1-1 container">
                <h1><img src="public/images/10/main-title.png" alt="新零售數據賦能 做對的事"></h1>
                <div class="link">
                    <a href="#contact" class="js-nav">預約專人諮詢</a>
                    <a href="/tw/zlsq.html?id=2059" target="_blank"><div>線上觀看<strong>【鼎新新零售發佈會】</strong><br>立即預約</div></a>
                </div>
            </div>
            <div class="section1-2 container">
                <div class="section1-2__img">
                    <img src="@/assets/images/10/section1-illust.png" alt="">
                </div>
                <div class="section1-2__text">
                    <p>渠道多、行銷多、競爭多，但顧客的忠誠度卻低，面對新零售挑戰，台灣流通業者，如何向對的人在對的時間提供對的服務，透過精準行銷，提升顧客的忠誠度，也有效降低營銷成本？</p>
                    <p>您還在找答案的同時，台灣已經有3家老品牌，透過新零售方案應用，成功提升營運效能：</p>
                    <ul>
                        <li>有效整合線上線下會員，分眾推送專屬的優惠內容。</li>
                        <li>虛實通路結合會員經營，提升銷售額，並透過系統管理讓料帳一致。</li>
                        <li>透過工具去中間化，直接接觸終端消費者，提供獨特優惠，吸引消費者回購、轉介。</li>
                    </ul>
                </div>
            </div>
            <div class="section1-3">
                <p class="section1-3__title container">到底，這些企業如何<strong>成功應用新零售方案</strong>，提升<strong>營運效能</strong>?</p>
                <i class="arrow"></i>
                <Carousel></Carousel>
            </div>
        </div>

        <article class="section2">
            <div class="container"></div>
        </article>

        <article class="section3">
            <div class="container"></div>
        </article>
        <!-- <Contact></Contact> -->
    </main>
</template>

<script>
import Contact from '~/components/10/Contact';
import Carousel from '~/components/10/Carousel';

export default {
    head: {
        title: '標題',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: '描述'
            }
        ],
    },
    components: {
        Contact,
        Carousel,
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        isMediumWidth() {
            return this.$store.state.isMediumWidth;
        },
        result() {
            return this.$store.state.result && this.$store.state.result['10'];
        },
    },
    methods: {
        getBgStyle(fileName) {
            let url = this.isMediumWidth ? `public/images/10/${fileName}-s.jpg` : `public/images/10/${fileName}.jpg`;
            return { 'background-image': `url(${url})` };
        }
    },
};
</script>

<style lang="scss">
@import '~assets/sass/common';
$content-width: 1100px;

body {
    line-height: 1;
}
main {
    background-position: 50% 0;
    background-repeat: no-repeat;
}
.container {
    padding-right: 10px;
    padding-left: 10px;
    // outline: 1px solid #f00;
    @media (min-width: $content-width) {
        padding-right: 0;
        padding-left: 0;
    }
}
.arrow {
    @include imgBg('~@/assets/images/10/icon-arrow.png');
    display: block;
    margin: 0 auto;
    width: 26px;
    height: 35px;
}

// debug
// .section1 {
//     height: 2400px;
//     @media (min-width: $content-width + 1) {
//         height: 1700px;
//     }
// }
// .section2 {
//     height: 2409px;
//     @media (min-width: $content-width + 1) {
//         height: 1137px;
//     }
// }
// .section3 {
//     height: 3087px;
//     @media (min-width: $content-width + 1) {
//         height: 2260px;
//     }
// }

.section1 {
    padding-top: 170px;
    .link {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        @media (min-width: $content-width + 1) {
            flex-direction: row;
            justify-content: center;
        }
        a {
            display: flex;
            max-width: 370px;
            width: 100%;
            height: 86px;
            border: 2px solid #fff;
            border-radius: 5px;
            color: #fff;
            text-align: center;
            font-weight: bold;
            font-size: 26px;
            justify-content: center;
            align-items: center;
            &:nth-of-type(1) {
                background-color: #5d51cb;
            }
            &:nth-of-type(2) {
                margin-top: 20px;
                background-color: #ad0a89;
                line-height: 1.3;
                @media (min-width: $content-width + 1) {
                    margin-top: 0;
                    margin-left: 42px;
                }
                > div {
                    position: relative;
                    top: 2px;
                    &::first-line {
                        font-size: 22px;
                    }
                }
                strong {
                    color: #ffeb9e;
                }
            }
        }
    }
    &-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        > h1 {
            margin-bottom: 32px;
            @media (min-width: $content-width + 1) {
                margin-bottom: 44px;
            }
        }
    }
    &-2 {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
        padding-top: 50px;
        align-items: center;
        @media (min-width: $content-width + 1) {
            flex-direction: row;
            padding-top: 78px;
            padding-right: 55px;
            align-items: flex-start;
        }
        &__img {
            margin-bottom: 30px;
            flex-shrink: 0;
            @media (min-width: $content-width + 1) {
                margin-right: 37px;
                margin-bottom: 0;
            }
        }
        &__text {
            font-size: 20px;
            line-height: 30px;
            > p {
                &:nth-of-type(1) {
                    margin-bottom: 1em;
                    &::first-letter {
                        font-size: 48px;
                    }
                }
                &:nth-of-type(2) {
                    margin-bottom: .5em;
                }
            }
            li {
                display: flex;
                align-items: baseline;
                &::before {
                    @include imgBg('~@/assets/images/10/icon-star.png');
                    margin-right: 5px;
                    width: 15px;
                    height: 15px;
                    content: '';
                    flex-shrink: 0;
                }
            }
        }
    }
    &-3 {
        &__title {
            margin-bottom: 1em;
            text-align: center;
            font-weight: bold;
            font-size: 28px;
            line-height: 34px;
            strong {
                color: #f55a00;
            }
        }
        .arrow {
            margin-bottom: 50px;
            @media (min-width: $content-width + 1) {
                margin-bottom: 18px;
            }
        }
    }
}
.section2 {
    background-image: url('~@/assets/images/10/section2-bg-s.png'), linear-gradient(transparent 50%, #e86f1e 0);
    background-position: 50% 0;
    background-repeat: no-repeat;
    @media (min-width: $content-width + 1) {
        background-image: url('~@/assets/images/10/section2-bg.png'), linear-gradient(transparent 50%, #e86f1e 0);
    }
}
.section3 {
    @include bg('~@/assets/images/10/section3-bg-s.jpg');
    background-color: #ffdfb8;
    @media (min-width: $content-width + 1) {
        @include bg('~@/assets/images/10/section3-bg.jpg');
    }
}
</style>