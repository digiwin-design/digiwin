<template>
    <main>
        <div class="hero">
            <div class="hero__container">
                <h1>
                    <picture>
                        <source srcset="~/assets/images/03/hero-title.png" media="(min-width: 769px)">
                        <img src="~/assets/images/03/hero-title-s.png" alt="MES 打造透明生產現場 整合IT與OT 實現精實管理 降本增效提質">
                    </picture>
                </h1>
                <div class="hero__btn">
                    <a href="">立即諮詢</a>
                    <a href="">
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
                <div class="section1__boxs">
                    <div class="section1__box" v-for="box in result.hoverBox" :key="box.title">
                        <HoverBox :box="box"></HoverBox>
                    </div>
                </div>
            </div>
        </article>

        <article class="section2">
            <SectionTitle title="客戶實證"></SectionTitle>
            <CarouselAndAccordion :cases="result.case"></CarouselAndAccordion>
        </article>

        <Contact></Contact>
    </main>
</template>

<script>
import Contact from '~/components/03/Contact';
import SectionTitle from '~/components/03/SectionTitle';
import HoverBox from '~/components/03/HoverBox';
import CarouselAndAccordion from '~/components/03/CarouselAndAccordion';

export default {
    head: {
        title: '鼎新MES-將過程經驗數據化，打造人機協作透明製造現場',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: '台灣製造業的智慧製造轉型路徑─人機協作鋼鐵人，透過MES智能現場執行系統，連結人腦與數據大腦，打造高效、精益、透明化現場管理，只有通過精益製造和數字化管理等先進的生產，管理方式優化工廠底層資源，改善數據採集品質，提高生產透明度與效益。'
            }
        ],
    },
    components: {
        Contact,
        SectionTitle,
        HoverBox,
        CarouselAndAccordion,
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        result() {
            return this.$store.state.result['03'];
        },
    },
};
</script>

<style lang="scss">
@import url('https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css');
@import '~assets/sass/common';

.fancybox-bg {
    background-color: rgba(#000, .35);
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
    @media (min-width: $tablet-width + 1) {
        padding-top: 507px;
    }
}
.hero {
    @include bg('~assets/images/03/hero-bg-s.png');
    height: 696px;
    @media (min-width: $tablet-width + 1) {
        position: absolute;
        top: 35px;
        width: 100%;
        height: 745px;
        background-image: url('~assets/images/03/hero-bg.png');
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
    &__boxs {
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
    }
    &__box {
        margin: 15px;
        width: 270px;
        @media (min-width: $content-width) {
            margin: 5px;
            width: 265px;
        }
    }
}
</style>