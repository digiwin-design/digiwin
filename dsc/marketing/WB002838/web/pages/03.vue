<template>
    <main>
        <transition name="fade">
            <div v-if="isReady">
                <div class="hero" :style="heroBgStyle">
                    <div class="hero__container">
                        <h1>
                            <picture>
                                <source
                                    srcset="~/assets/images/03/hero-title.png"
                                    media="(min-width: 769px)"
                                />
                                <img
                                    src="~/assets/images/03/hero-title-s.png"
                                    alt="MES 打造透明生產現場 整合IT與OT 實現精實管理 降本增效提質"
                                />
                            </picture>
                        </h1>
                        <div class="hero__btn">
                            <a href="#contact" class="js-nav">立即諮詢</a>
                            <a href="/tw/zlsq.html?id=1937" target="_blank">
                                <strong>【線上研討會】</strong>
                                從《工業3.5》看台灣產業發展
                            </a>
                        </div>
                    </div>
                </div>

                <article class="section1">
                    <div class="container">
                        <SectionTitle
                            title="鼎新MES，完整掌握生產現場即時訊息"
                            desc="鼎新MES，與ERP無縫整合，隨需搭建智慧化工廠，實現從入庫、派工、報工、出場及設備狀態全程追溯，滿足企業在製品管理(WIP)、品質控管(SPC)、設備整合與管理(EMS)、問題追溯分析、生產現場的即時數據採集等關鍵需求，為企業做出更準確的生產管理決策。"
                        ></SectionTitle>
                        <div class="boxs">
                            <div class="boxs__item" v-for="box in result.hoverBox" :key="box.title">
                                <HoverBox :box="box"></HoverBox>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="section2">
                    <SectionTitle title="客戶實證"></SectionTitle>
                    <CarouselAndAccordion :cases="result.case"></CarouselAndAccordion>
                </article>

                <article class="section3">
                    <div class="container">
                        <section-title
                            title="鼎新MES為智能製造創造三大核心價值"
                            desc="打造高效、精益、透明化現場管理，只有通過精益製造和數字化管理等先進的生產<br>管理方式優化工廠底層資源，改善數據採集品質，提高生產透明度與效益。"
                        ></section-title>
                        <div class="grid">
                            <div
                                class="grid__item"
                                v-for="(item, idx) in result.section3"
                                :key="item.title"
                            >
                                <figure>
                                    <img
                                        :src="require(`~/assets/images/03/section3-item${idx + 1}.png`)"
                                        alt
                                    />
                                    <figcaption>{{item.title}}</figcaption>
                                </figure>
                                <p>{{item.content}}</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="section4">
                    <div class="container">
                        <section-title
                            title="MES四大中心  打通生產現場資訊壁壘"
                            desc="透過四大中心形成以工藝路線為依據，以生產計畫為主體，打通生產管理部門和生產執行部門的資訊壁壘，提供準確、完善的可以指導生產組織的決策資訊"
                        ></section-title>
                        <div class="grid">
                            <div class="grid__item" v-for="item in result.section4" :key="item.title">
                                <h2>{{item.title}}</h2>
                                <p>{{item.content}}</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="section5">
                    <div class="container">
                        <section-title
                            title="鼎新 值得您選擇"
                            desc="在地深耕超過30年，累積超過50,000多家企業成功案例，服務橫跨東南亞與中國，每個產業我們都是專家，跟得上國際趨勢，隨時因應在地法規，鼎新最懂您！"
                        ></section-title>
                        <div class="grid">
                            <div class="grid__item" v-for="(item, idx) in result.section5" :key="item[0]">
                                <div class="grid__text">
                                    <p v-html="text" v-for="text in item" :key="text"></p>
                                </div>
                                <img :src="require(`~/assets/images/03/section5-item${idx + 1}.png`)" alt />
                            </div>
                        </div>
                        <a href="/tw/software/1832.html" target="_blank" class="readmore">了解更多產品訊息</a>
                    </div>
                </article>

                <Contact></Contact>
            </div>
            <Loading v-else></Loading>
        </transition>
    </main>
</template>

<script>
import Contact from '~/components/03/Contact';
import SectionTitle from '~/components/03/SectionTitle';
import HoverBox from '~/components/03/HoverBox';
import CarouselAndAccordion from '~/components/03/CarouselAndAccordion';
import Loading from '~/components/03/Loading.vue';

export default {
    head: {
        title: 'MES 打造透明生產現場，整合IT與OT，實現精實管理、降本增效提質',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: '鼎新MES，與ERP無縫整合，隨需搭建智慧化工廠，實現從入庫、派工、報工、出場及設備狀態全程追溯，滿足企業在製品管理(WIP)、品質控管(SPC)、設備整合與管理(EMS)、問題追溯分析、生產現場的即時數據採集等關鍵需求，為企業做出更準確的生產管理決策。'
            }
        ],
    },
    components: {
        Contact,
        SectionTitle,
        HoverBox,
        CarouselAndAccordion,
        Loading,
    },
    asyncData({ $axios }) {
        return $axios.$get(`${process.env.API_URL}public/db.json`)
            .then(res => {
                return {
                    result: res['03'],
                };
            });
    },
    data() {
        return {
            isReady: false,
        }
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        heroBgStyle() {
            let url = this.isMobile ? 'public/images/03/hero-bg-s.png' : 'public/images/03/hero-bg.png';
            return { 'background-image': `url(${url})` };
        },
    },
    methods: {
        preloadImg() {
            let loaded = 0;
            let images = [
                'public/images/03/hero-bg.png',
                'public/images/03/hero-bg-s.png',
            ];
            images.forEach(img => {
                let image = new Image();
                image.src = img;
                image.onload = () => {
                    loaded++;
                    if (loaded === images.length) {
                        setTimeout(() => this.isReady = true, 500);
                    }
                };
            });
        },
    },
    mounted() {
        this.preloadImg();
    },
};
</script>

<style lang="scss">
@import "~/node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css";
@import "~assets/sass/common";

.fancybox-bg {
    background-color: rgba(#000, 0.35);
}
.fancybox-slide {
    overflow: hidden;
    padding: 30px;
}
.fancybox-close-small {
    top: -20px;
    right: -20px;
    padding: 0;
    width: 44px;
    height: 44px;
    border: 5px solid #e2e2e2;
    border-radius: 50%;
    background-color: #000;
    color: #96d7e4;
    @media (min-width: $tablet-width + 1) {
        top: -30px;
        right: -30px;
        width: 66px;
        height: 66px;
    }
}
main {
    position: relative;
    overflow: hidden;
    @media (min-width: $tablet-width + 1) {
        padding-top: 507px;
    }
    &::before,
    &::after {
        position: absolute;
        content: url("~assets/images/03/square-green.png");
    }
    &::before {
        top: 1420px;
        left: calc(50% - 1500px);
    }
    &::after {
        top: 660px;
        left: calc(50% + 620px);
        transform: rotate(70deg);
    }
}
.hero {
    background-position: 50% 0;
    background-repeat: no-repeat;
    height: 696px;
    @media (min-width: $tablet-width + 1) {
        position: absolute;
        top: 0;
        width: 100%;
        height: 745px;
    }
    &__container {
        margin: 0 auto;
        padding-top: 270px;
        max-width: 300px;
        height: 100%;
        @media (min-width: $tablet-width + 1) {
            padding-top: 150px;
            max-width: $content-width;
        }
    }
    &__btn {
        display: flex;
        flex-direction: column;
        margin-top: 25px;
        @media (min-width: $tablet-width + 1) {
            flex-direction: row;
            margin-top: 20px;
        }
        > a {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 68px;
            justify-content: center;
            align-items: center;
            @media (min-width: $tablet-width + 1) {
                width: 280px;
                height: 74px;
            }
            &:nth-child(1) {
                background-color: #fac613;
                color: #063780;
                letter-spacing: getLetterSpacing(10);
                font-size: 22px;
            }
            &:nth-child(2) {
                margin-top: 12px;
                background-color: #0656a0;
                color: #fff;
                text-align: center;
                line-height: 21px;
                @media (min-width: $tablet-width + 1) {
                    margin-top: 0;
                    margin-left: 15px;
                }
            }
        }
        strong {
            font-weight: bold;
        }
    }
}
.section1 {
    position: relative;
    .container {
        border-radius: 20px 20px 0 0;
        background-color: #fff;
    }
    .boxs {
        display: flex;
        margin: -15px auto;
        width: 300px;
        flex-wrap: wrap;
        @media (min-width: $tablet-width + 1) {
            width: 600px;
        }
        @media (min-width: $content-width) {
            margin: -5px;
            width: 1120px;
        }
        &__item {
            margin: 15px;
            width: 270px;
            @media (min-width: $content-width) {
                margin: 5px;
                width: 265px;
            }
        }
    }
}
.section3 {
    padding-bottom: 55px;
    @media (min-width: $tablet-width + 1) {
        padding-bottom: 75px;
    }
    .grid {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        gap: 2em;
        @media (min-width: $tablet-width + 1) {
            grid-template-rows: none;
            grid-template-columns: repeat(3, 1fr);
            gap: 70px;
        }
        &__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            figcaption {
                margin-top: 20px;
                margin-bottom: 12px;
                color: #434343;
                text-align: center;
                font-weight: bold;
                font-size: 30px;
                line-height: 1;
            }
            p {
                color: #090909;
            }
        }
    }
}
.section4 {
    position: relative;
    padding-bottom: 55px;
    background-image: linear-gradient(to bottom, #00b4ba, #165cbc);
    color: #fff;
    @media (min-width: $content-width) {
        padding-bottom: 90px;
    }
    &::before,
    &::after {
        position: absolute;
        content: url("~assets/images/03/square-white.png");
    }
    &::before {
        top: 510px;
        left: calc(50% - 1146px);
        opacity: 0.28;
    }
    &::after {
        top: -27px;
        left: calc(50% + 690px);
    }
    .sectionTitle {
        @media (min-width: $content-width) {
            padding-top: 5em !important;
            padding-bottom: 4.5em !important;
        }
    }
    .grid {
        display: grid;
        grid-template-rows: repeat(4, 340px);
        grid-template-columns: 263px;
        gap: 20px;
        justify-content: center;
        @media (min-width: $tablet-width + 1) {
            grid-template-rows: repeat(2, 340px);
            grid-template-columns: repeat(2, 263px);
        }
        @media (min-width: $content-width) {
            grid-template-rows: 340px;
            grid-template-columns: repeat(4, 1fr);
        }
        &__item {
            padding: 25px 20px;
            border: 2px solid #fff;
            border-radius: 20px;
            h2 {
                margin-bottom: 0.5em;
                text-align: center;
                font-weight: bold;
                font-size: 30px;
            }
            p {
                line-height: 24px;
            }
        }
    }
}
.section5 {
    padding-bottom: 55px;
    background-color: #e5f4f5;
    @media (min-width: $tablet-width + 1) {
        padding-bottom: 40px;
    }
    .sectionTitle {
        @media (min-width: $content-width) {
            padding-top: 5em !important;
        }
    }
    .grid {
        display: grid;
        grid-template-rows: repeat(3, auto);
        @media (min-width: $tablet-width + 1) {
            grid-template-rows: none;
            grid-template-columns: repeat(3, 1fr);
        }
        &__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            @media (min-width: $tablet-width) {
                @at-root .section5 .grid__item:last-child img {
                    margin-top: auto;
                }
            }
        }
        &__text {
            position: relative;
            margin-bottom: 40px;
            padding-top: 40px;
            padding-left: 40px;
            width: 220px;
            height: 220px;
            border: 3px solid #afafaf;
            border-radius: 50%;
            background-color: #fff;
            font-weight: bold;
            line-height: 1.2;
            justify-content: center;
            @at-root .section5 .grid__item:last-child .grid__text {
                padding-left: 30px;
            }
            p {
                &:nth-child(1) {
                    margin-bottom: 0.7em;
                    font-size: 21px;
                    &::first-line {
                        font-size: 27.5px;
                    }
                    strong {
                        position: absolute;
                        color: #e45b24;
                        font-size: 36.5px;
                        line-height: 1;
                        transform: translateX(2px);
                    }
                }
                &:nth-child(2) {
                    color: #5b5b5b;
                    font-size: 14px;
                }
            }
            &::after {
                position: absolute;
                top: calc(100% - 15px);
                left: calc(50% - 1px);
                width: 2px;
                height: 30px;
                background-color: #aba8a8;
                content: "";
            }
            @media (min-width: $tablet-width) {
                margin-bottom: 20px;
            }
        }
    }
    .readmore {
        @include btn(100%, 78px, #fff, #08acb2, 0, 348px);
        margin: 0 auto;
        font-size: 24px;
        @media (min-width: $tablet-width + 1) {
            transform: translateY(-40px);
        }
    }
}
</style>