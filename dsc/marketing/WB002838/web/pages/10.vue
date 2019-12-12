<template>
    <main>
        <div :style="getBgStyle('main-bg')" v-if="result">
            <div class="section1">
                <div class="section1-1 container">
                    <h1><img src="public/images/10/main-title.png" alt="新零售數據賦能 做對的事"></h1>
                    <div class="links">
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
                    <Carousel :carousel="result.carousel"></Carousel>
                    <div class="links">
                        <a href="/tw/dsc/solution/WB002972/case" target="_blank">新零售完整方案</a>
                        <a href="/tw/zlsq.html?id=2059" target="_blank"><div>線上觀看<strong>【鼎新新零售發佈會】</strong><br>立即預約</div></a>
                    </div>
                </div>
            </div>

            <article class="section2">
                <div class="container">
                    <section-title
                        title="面對新零售挑戰，業者的經營轉型"
                        desc="以消費者體驗為中心的零售型態，無時無刻為了消費者提供超出期望的內容，<br>以人為主就是以消費者體驗為中心；<br>以心為本，掌握數據(人心)就是掌握消費者需求！"
                        padding-top="6em"
                    ></section-title>
                    <div class="items">
                        <div class="item" v-for="(item, idx) in result.section2" :key="item.title">
                            <img :src="require(`@/assets/images/10/case${idx + 1}-logo.png`)" alt="">
                            <h2 v-html="item.title"></h2>
                            <img src="@/assets/images/10/icon-arrow.png" alt="">
                            <figure>
                                <img :src="require(`@/assets/images/10/section2-illust${idx + 1}.png`)" alt="">
                                <figcaption v-html="item.figcaption"></figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </article>

            <article class="section3">
                <section-title
                    title="鼎新新零售四大價值，提升流通管理新價值"
                    padding-top="8em"
                    class="container"
                ></section-title>
                <div class="intro">
                    <div class="container">
                        <div class="intro__text">
                            <p>善用科技、強化服務、提升效率。<br>服務不再是負擔，而是一種體驗；<br>而科技更不能只是噱頭，確保效率提升。</p>
                            <p>—鼎新電腦<br>張進聰 資深副總裁</p>
                        </div>
                        <div class="intro__video">
                            <div class="video-container">
                                <iframe src="https://www.youtube.com/embed/1GfHtDT0vaw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chart">
                    <picture>
                        <source media="(min-width: 1101px)" srcset="@/assets/images/10/section3-chart.png">
                        <img src="@/assets/images/10/section3-chart-s.png" alt="新零售價值">
                    </picture>
                </div>
                <div class="items container">
                    <div class="item" v-for="(item, idx) in result.section3" :key="item.title">
                        <img :src="require(`@/assets/images/10/section3-itemtitle${idx + 1}.jpg`)" alt="">
                        <div class="item__content">
                            <h2>{{item.title}}</h2>
                            <p>{{item.desc}}</p>
                        </div>
                    </div>
                </div>
                <a href="/tw/dsc/solution/WB002972/case" target="_blank" class="link">
                    了解新零售完整方案
                    <i class="material-icons">keyboard_arrow_right</i>
                </a>
            </article>
            <Contact></Contact>
        </div>
    </main>
</template>

<script>
import Contact from '~/components/10/Contact';
import Carousel from '~/components/10/Carousel';
import SectionTitle from '~/components/10/SectionTitle';

export default {
    head: {
        title: '新零售‧服務新價值 | 新零售數據賦能，做對的事！',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: '串聯實體與虛擬通路，整合線上、線下消費者資訊，在對的時間、向對的人提供對的服務，提升顧客忠誠度、降低營銷成本'
            }
        ],
        link: [
            { rel: 'preload', href: 'public/images/10/main-bg.jpg', as: 'image' },
            { rel: 'preload', href: 'public/images/10/main-bg-s.jpg', as: 'image' },
            { rel: 'preload', href: 'public/images/10/main-title.png', as: 'image' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
        ]
    },
    components: {
        Contact,
        Carousel,
        SectionTitle,
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
            console.log(url);
            return { 'background-image': `url(${url})` };
        }
    },
};
</script>

<style lang="scss">
@import '~assets/sass/common';
$content-width: 1100px;

@mixin btn($maxWidth) {
    display: flex;
    max-width: $maxWidth;
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
}

body {
    line-height: 1;
}
main > div {
    margin: 0 auto;
    max-width: 1920px;
    background-position: 50% 0;
    background-repeat: no-repeat;
}
.container {
    padding-right: 10px;
    padding-left: 10px;
    max-width: 1100px;
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
.sectionTitle::before {
    margin-bottom: 1em;
    width: 70px;
    height: 70px;
    content: '';
}

.section1 {
    padding-top: 170px;
    padding-bottom: 20px;
    .links {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        @media (min-width: $content-width + 1) {
            flex-direction: row;
            justify-content: center;
        }
        a {
            @include btn(370px);
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
        .carousel {
            margin-bottom: 33px;
        }
        .link {
            margin-top: 33px;
        }
    }
}
.section2 {
    background-image: url('~@/assets/images/10/section2-bg-s.png'), linear-gradient(transparent 15%, #e86f1e 0);
    background-position: 50% 0;
    background-repeat: no-repeat;
    @media (min-width: $content-width + 1) {
        background-image: url('~@/assets/images/10/section2-bg.png'), linear-gradient(transparent 15%, #e86f1e 0);
    }
    .container {
        @media (min-width: $content-width + 1) {
            padding-right: 50px;
            padding-left: 50px;
        }
    }
    .sectionTitle {
        color: #fff;
        &::before {
            @include imgBg('~@/assets/images/10/section2-titleicon.png');
        }
    }
    .items {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: $content-width + 1) {
            flex-direction: row;
            align-items: stretch;
            justify-content: space-between;
        }
    }
    .item {
        display: flex;
        flex-direction: column;
        width: 300px;
        color: #fff;
        font-weight: bold;
        align-items: center;
        h2 {
            position: relative;
            margin-top: 24px;
            margin-bottom: 16px;
            width: 100%;
            height: 80px;
            background-color: #000;
            text-align: center;
            font-size: 32px;
            line-height: 80px;
            &::before {
                position: absolute;
                bottom: 100%;
                left: 50%;
                width: 0;
                height: 0;
                border-width: 0 5.5px 9px 5.5px;
                border-style: solid;
                border-color: transparent transparent #000 transparent;
                content: '';
                transform: translateX(-50%);
            }
            strong {
                color: #fff154;
            }
        }
        figure {
            margin-top: 15px;
            max-width: 100%;
            text-align: center;
            @media (min-width: $content-width + 1) {
                display: flex;
                flex-direction: column;
                height: 210px;
                align-items: center;
                flex-grow: 1;
            }
        }
        figcaption {
            margin-top: 20px;
            max-width: 100%;
            font-size: 22px;
            line-height: 30px;
            @media (min-width: $content-width + 1) {
                margin-top: auto;
            }
        }
        + .item {
            margin-top: 90px;
            @media (min-width: $content-width + 1) {
                margin-top: 0;
            }
        }
    }
}
.section3 {
    @include bg('~@/assets/images/10/section3-bg-s.jpg');
    padding-bottom: 47px;
    background-color: #ffdfb8;
    @media (min-width: $content-width + 1) {
        @include bg('~@/assets/images/10/section3-bg.jpg');
    }
    .sectionTitle {
        color: #f55a00;
        @media (min-width: $content-width + 1) {
            padding-top: 14em !important;
        }
        &::before {
            @include imgBg('~@/assets/images/10/section3-titleicon.png');
        }
    }
    .intro {
        @include bg('~@/assets/images/10/section3-bg-s.png', calc(50% + 85px) 0);
        margin-bottom: 42px;
        @media (min-width: $content-width + 1) {
            @include bg('~@/assets/images/10/section3-bg.png', 50% 0);
            margin-bottom: 25px;
        }
        .container {
            position: relative;
            padding-top: 310px;
            padding-right: 0;
            padding-left: 0;
            @media (min-width: $content-width + 1) {
                padding-top: 678px;
            }
        }
        &__text {
            position: absolute;
            top: 95px;
            left: 50%;
            padding-right: 10px;
            @media (min-width: $content-width + 1) {
                top: 400px;
                right: 50px;
                left: auto;
                padding-right: 0;
                width: 600px;
                text-align: center;
            }
            p {
                color: #fff;
                line-height: 24px;
                &:nth-of-type(1) {
                    margin-bottom: .5em;
                    font-weight: bold;
                    @media (min-width: $content-width + 1) {
                        margin-bottom: .7em;
                        font-size: 26px;
                        line-height: 36px;
                    }
                }
                &:nth-of-type(2) {
                    padding-left: 1em;
                    text-indent: -1em;
                    @media (min-width: $content-width + 1) {
                        padding-left: 0;
                        text-indent: 0;
                        font-size: 22px;
                        br {
                            display: none;
                        }
                    }
                }
            }
        }
        &__video {
            margin: 0 auto;
            max-width: 570px;
            @media (min-width: $content-width + 1) {
                position: absolute;
                top: 38px;
                right: 50px;
                max-width: none;
                width: 600px;
            }
        }
        .video-container {
            @include youtubeIframe();
        }
    }
    .chart {
        margin-bottom: 50px;
        text-align: center;
    }
    .items {
        display: flex;
        flex-direction: column;
        margin-bottom: 54px;
        align-items: center;
        @media (min-width: $content-width + 1) {
            flex-direction: row;
            padding-right: 50px;
            padding-left: 50px;
            justify-content: space-between;
            align-items: stretch;
        }
    }
    .item {
        display: flex;
        flex-direction: column;
        width: 310px;
        box-shadow: 0 .8px 2.2px rgba(0, 0, 0, .02),
        0 2px 5.3px rgba(0, 0, 0, .028),
        0 3.8px 10px rgba(0, 0, 0, .035),
        0 6.7px 17.9px rgba(0, 0, 0, .042),
        0 12.5px 33.4px rgba(0, 0, 0, .05),
        0 30px 80px rgba(0, 0, 0, .07);
        &__title {
            height: 130px;
        }
        &__content {
            padding: 25px 25px 30px 25px;
            background-color: #fff;
            flex-grow: 1;
        }
        h2 {
            margin-bottom: .5em;
            color: #695ce0;
            font-weight: bold;
            font-size: 30px;
        }
        p {
            color: #1b1b1b;
            font-size: 22px;
            line-height: 30px;
        }
        + .item {
            margin-top: 30px;
            @media (min-width: $content-width + 1) {
                margin-top: 0;
            }
        }
    }
    .link {
        @include btn(710px);
        margin: 0 auto;
        background-color: #5d51cb;
        i {
            font-size: 1.5em;
        }
    }
}
</style>