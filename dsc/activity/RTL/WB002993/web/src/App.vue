<template>
    <transition name="fade">
        <div v-if="result && imgLoaded" class="wrapper">
            <Header></Header>
            <MenuMask></MenuMask>

            <div class="main">
                <StickyNav v-if="!isMobile" :links="result.links"></StickyNav>
                <StickyNavS v-if="isMobile" :links="result.links"></StickyNavS>

                <div class="main-content">
                    <header>
                        <h1>
                            <picture>
                                <source
                                    srcset="images/header-bg-s.png"
                                    media="(max-width:768px)"
                                />
                                <img src="images/header-bg.png" alt="鼎新新零售發佈會-開啟新零售，實現全域營銷" />
                            </picture>
                        </h1>
                    </header>

                    <article id="speaker" class="speaker">
                        <div class="container">
                            <SectionTitle title="∙ 講師陣容 ∙" paddingBottom="1em"></SectionTitle>
                            <div class="speaker-casts">
                                <Cast
                                    v-for="(cast,idx) in result.casts"
                                    :key="cast.id"
                                    :cast="cast"
                                    @click.native="popupShow(idx)"
                                ></Cast>
                            </div>

                            <h2 class="sectionTitle">
                                <span>
                                    <i class="highlight">產官學</i>新觀點
                                </span>
                                <span>
                                    <i class="material-icons">close</i>
                                </span>
                                <span>
                                    跨界攜手推進<strong><i class="highlight">新零售</i></strong>
                                </span>
                            </h2>
                            <div class="speaker-features">
                                <Feature
                                    v-for="feature in result.features"
                                    :key="feature.title"
                                    :feature="feature"
                                ></Feature>
                            </div>
                            <div class="speaker-detail">
                                <p>新零售翻轉產業生態<br />面對<strong>消費者思考模式的改變</strong><br />跨平台、多通路、多支付、碎片數據？</p>
                                <p>鼎新結合各領域產官學專家齊聚<br /><strong>串聯金流、物流、資訊流一體化</strong><br />實現<strong>全域營銷</strong>，打造更高效的<strong>新零售模式</strong><br />提升流通管理新價值！</p>
                            </div>
                        </div>
                    </article>

                    <article id="schedule" class="schedule">
                        <div class="container">
                            <SectionTitle title="∙ 活動場次 ∙"></SectionTitle>
                            <div class="schedule-events">
                                <Event
                                    v-for="event in result.events"
                                    :key="event.country"
                                    :event="event"
                                ></Event>
                            </div>
                            <dl>
                                <dt>活動時間</dt>
                                <dd>13:30-17:00 (13:00開放入場)</dd>
                                <dt>適合參加對象</dt>
                                <dd>流通業之企業主、高階決策層，率領各部中階主管報名</dd>
                            </dl>
                            <a
                                href="http://acpms.digiwin.com/WebRegACT/index.html?gNo=2019080007"
                                class="schedule-signup"
                                target="_blank"
                            >
                                立即報名
                                <i class="material-icons">keyboard_arrow_right</i>
                            </a>
                        </div>
                    </article>

                    <article id="session" class="session">
                        <div class="container">
                            <SectionTitle title="∙ 精彩議程 ∙"></SectionTitle>
                            <Tab :schedules="result.schedules"></Tab>
                            <p class="session-statement">主辦單位保留報名、講師及議程修改之權利</p>
                            <div class="session-social">
                                <a
                                    href="mailto:?subject=鼎新新零售發佈會-開啟新零售，實現全域營銷&body=我想要分享一個很棒且免費的研討會訊息給你！%0d%0a《鼎新新零售發佈會-開啟新零售，實現全域營銷》活動%0d%0a詳細議程：https://www.digiwin.com/tw/dsc/activity/RTL/WB002993/web/"
                                    target="_blank"
                                >
                                    <img src="~@/assets/images/icon_mail.png" alt />
                                </a>
                                <a
                                    href="javascript:void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href))))"
                                >
                                    <img src="~@/assets/images/icon_FB.png" alt />
                                </a>
                                <a
                                    href="http://line.naver.jp/R/msg/text/?歡迎蒞臨《鼎新新零售發佈會-開啟新零售，實現全域營銷》%0D%0A09/18台中場、09/24台北場。詳細議程：https://www.digiwin.com/tw/dsc/activity/RTL/WB002993/web/"
                                    target="_blank"
                                >
                                    <img src="~@/assets/images/icon_LINE.png" alt />
                                </a>
                                <a href="https://www.youtube.com/user/DSCTCE00" target="_blank">
                                    <img src="~@/assets/images/icon_YT.png" alt />
                                </a>
                            </div>
                        </div>
                    </article>

                    <div class="ad">
                        <div class="container">
                            <SectionTitle title="新零售時代<br> 如何面面俱到"></SectionTitle>
                            <a
                                href="https://www.digiwin.com/tw/dsc/solution/WB002972/index.html"
                                target="_blank"
                            >
                                <picture>
                                    <source srcset="@/assets/images/ad-s.jpg" media="(max-width:768px)" />
                                    <img src="@/assets/images/ad.jpg" alt />
                                </picture>
                            </a>
                        </div>
                    </div>

                    <div class="organizer">
                        <div class="container">
                            <ul>
                                <li>主辦單位</li>
                                <li>
                                    <img
                                        src="https://www.digiwin.com/tw/dsc/Library/images/DSClogo.png"
                                        width="107"
                                        alt
                                    />
                                </li>
                            </ul>
                            <ul>
                                <li>協辦單位</li>
                                <li>
                                    <img src="@/assets/images/co-organiser1.png" alt />
                                </li>
                                <li>
                                    <img src="@/assets/images/co-organiser2.png" alt />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

            <Popup :id="currentPopup"></Popup>
        </div>
    </transition>
</template>

<script>
import '@/assets/js/modernizr-custom';
import '@/assets/js/mobile-detect';
import '@/assets/js/mobile-detect-modernizr';
import '@/assets/js/stickyfill.min';
import Header from '@/components/Header.vue';
import MenuMask from '@/components/MenuMask.vue';
import Footer from '@/components/Footer.vue';
import StickyNav from '@/components/StickyNav.vue';
import StickyNavS from '@/components/StickyNavS.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import Cast from '@/components/Cast.vue';
import Popup from '@/components/Popup.vue';
import Feature from '@/components/Feature.vue';
import Event from '@/components/Event.vue';
import Tab from '@/components/Tab.vue';

export default {
    name: 'app',
    components: {
        Header,
        MenuMask,
        Footer,
        StickyNav,
        StickyNavS,
        SectionTitle,
        Cast,
        Popup,
        Feature,
        Event,
        Tab,
    },
    data() {
        return {
            currentPopup: 0,
            imgLoaded: false,
            publicPath: process.env.BASE_URL,
        }
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        result() {
            return this.$store.state.result;
        },
    },
    methods: {
        mediaSensor() {
            let mm = window.matchMedia("(min-width: 769px)");
            mm.addListener(this.resizeWidth);
            this.resizeWidth(mm);
        },
        resizeWidth(pMatchMedia) {
            let isMobile = pMatchMedia.matches ? false : true;
            this.$store.commit('updateDevice', isMobile);
            if (!isMobile) {
                this.$store.commit('toggleMask', false);
            }
        },
        popupShow(idx) {
            this.currentPopup = idx;
            $('#popup').popup('show');
        },
        preloadImg() {
            let loaded = 0;
            let images = [
                'images/header-bg.png',
                'images/header-bg-s.png',
                'img/bg1-s.5271e82c.png',
                'img/bg1.6a72b339.png',
            ];
            images.forEach(img => {
                let image = new Image();
                image.onload = () => {
                    loaded++;
                    if (loaded === images.length) {
                        this.imgLoaded = true;
                    }
                };
                image.src = img;
            });
        }
    },
    created() {
        this.preloadImg();
        this.$store.dispatch('getData');
    },
    mounted() {
        this.$store.commit('setDevice', new MobileDetect(window.navigator.userAgent).mobile());
        this.mediaSensor();
    },
}
</script>

<style lang="scss">
@import '@/assets/sass/reset.scss';
@import '@/assets/sass/common.scss';

// transition
.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

// fade image in after load
.lazyload,
.lazyloading {
    opacity: 0;
}
.lazyloaded {
    opacity: 1;
    transition: opacity 1s;
}

#dgwFooter {
    @media (max-width: $tablet-width) {
        margin-bottom: 70px;
    }
}
.wrapper {
    display: flex;
    flex-direction: column;
}
.main {
    min-width: 360px;
    background-image: url('~@/assets/images/bg1.png'), url('~@/assets/images/bg2.jpg');
    background-position: 50% 0;
    background-repeat: no-repeat, repeat-y;
    flex-grow: 1;
    @media (max-width: $tablet-width) {
        background-color: #eeeaea;
        background-image: url('~@/assets/images/bg1-s.png');
        background-repeat: no-repeat;
    }
    &-content {
        margin-top: -70px;
        @media (max-width: $tablet-width) {
            margin-top: 0;
        }
    }
}
.container {
    margin: 0 auto;
    padding: 0 50px;
    max-width: 1200px;
    @media (max-width: $content-width) {
        padding-right: 10px;
        padding-left: 10px;
    }
}
header h1 {
    text-align: center;
}
.sectionTitle {
    display: flex;
    flex-direction: column;
    padding-top: 52px;
    padding-bottom: 2em;
    align-items: center;
    @media (min-width: $tablet-width + 1) {
        padding-top: 58px;
    }
    h1 {
        color: #004b60;
        font-weight: bold;
    }
}
.speaker {
    padding-bottom: 3.5em;
    .sectionTitle {
        @media (min-width: $tablet-width + 1) {
            padding-top: 28px;
        }
    }
    &-casts {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        @media (max-width: $content-width) {
            justify-content: center;
        }
    }
    h2 {
        display: flex;
        flex-direction: row;
        color: #004b60;
        font-weight: bold;
        font-size: 38px;
        align-items: center;
        justify-content: center;
        @media (max-width: $tablet-width) {
            flex-direction: column;
            font-size: 35px;
        }
        .highlight {
            background-image: linear-gradient(
            180deg,
            transparent,
            transparent 50%,
            #ffe991 0
            );
        }
        .material-icons {
            color: #f05a28;
            vertical-align: middle;
            font-size: 38px;
        }
        strong {
            color: #f05a28;
        }
    }
    &-features {
        display: flex;
        margin-bottom: 50px;
        justify-content: space-between;
        @media (max-width: $content-width) {
            margin-top: -36px;
            margin-bottom: 14px;
            justify-content: center;
            flex-wrap: wrap;
        }
    }
    &-detail {
        text-align: center;
        font-weight: bold;
        font-size: 22px;
        line-height: 34px;
        p + p {
            margin-top: .5em;
        }
        strong {
            color: #f05a28;
        }
    }
}
.schedule,
.session,
.ad {
    @media (max-width: $tablet-width) {
        background: url('~@/assets/images/bg2.jpg') 50% 0 repeat-y;
    }
}
.schedule {
    padding-bottom: 10px;
    &-events {
        display: flex;
        border-radius: 10px;
        background-color: #fff;
        flex-wrap: wrap;
        justify-content: space-around;
        @media (max-width: $tablet-width) {
            background-color: transparent;
            justify-content: center;
        }
        &::before,
        &::after {
            content: '';
        }
    }
    .event {
        @media (max-width: $tablet-width) {
            margin: 5px;
        }
    }
    dl {
        display: flex;
        margin-top: 25px;
        margin-bottom: 30px;
        flex-wrap: wrap;
        align-items: center;
    }
    dt {
        width: 180px;
        height: 50px;
        border-radius: 10px;
        background-color: #f05a28;
        color: #fff;
        text-align: center;
        font-size: 22px;
        line-height: 50px;
        @media (max-width: $tablet-width) {
            width: 100%;
        }
        &:first-of-type {
            margin-bottom: 15px;
            @media (max-width: $tablet-width) {
                margin-bottom: 0;
            }
        }
    }
    dd {
        padding-left: 13px;
        width: calc(100% - 180px);
        font-size: 22px;
        @media (max-width: $tablet-width) {
            margin: 1em 0;
            padding-left: 0;
            width: 100%;
        }
        &:first-of-type {
            margin-bottom: 15px;
        }
    }
    &-signup {
        display: flex;
        margin: 0 auto;
        max-width: 500px;
        height: 100px;
        border-radius: 50px;
        background-color: #e5004f;
        background-image: linear-gradient(
        to right,
        transparent,
        rgba(#004b60, .7)
        );
        box-shadow: 0 2px 0 5px #fff;
        color: #fff;
        font-weight: bold;
        font-size: 36px;
        justify-content: center;
        align-items: center;
        i {
            margin-left: 5px;
            font-size: inherit;
        }
    }
}
.session {
    &-statement {
        margin-top: 25px;
        margin-bottom: 30px;
        color: #626262;
        text-align: right;
        font-size: 16px;
        @media (max-width: $tablet-width) {
            text-align: center;
        }
    }
    &-social {
        display: flex;
        justify-content: center;
        align-items: center;
        a + a {
            margin-left: 35px;
        }
        img {
            display: block;
        }
    }
}
.ad {
    padding-bottom: 27px;
    h1 {
        @media (max-width: $tablet-width) {
            text-align: center;
            line-height: 1.3;
        }
        br {
            display: none;
            @media (max-width: $tablet-width) {
                display: block;
            }
        }
    }
}
.organizer {
    background-color: #fff;
    font-weight: bold;
    .container {
        display: flex;
        height: 80px;
        color: #535353;
        font-size: 20px;
        justify-content: space-around;
        align-items: center;
        @media (max-width: $tablet-width) {
            flex-direction: column;
            height: 110px;
        }
    }
    &::before,
    &::after {
        content: '';
    }
    ul {
        display: flex;
        align-items: center;
    }
    li {
        &:first-child {
            flex-shrink: 0;
        }
        & + li {
            margin-left: 18px;
        }
    }
}
</style>
