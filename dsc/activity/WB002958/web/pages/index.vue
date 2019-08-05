<template>
    <div id="main" class="main">
        <StickyNav v-if="!isMobile && isMounted && links" :links="links"></StickyNav>
        <StickyNavS v-if="isMobile && isMounted && links" :links="links"></StickyNavS>

        <div class="main-content">
            <header>
                <div class="container">
                    <h1>企業數位化轉型</h1>
                    <div class="header-illust"></div>
                    <img src="public/images/index/header-bg-s.jpg" class="header-illust-s" alt>
                    <HeaderNav></HeaderNav>
                    <NextPage target="#begin" offsetObj=".js-nav"></NextPage>
                </div>
            </header>

            <main>
                <article id="begin" class="begin">
                    <div class="container">
                        <h1>
                            企業如何透過數位決策轉型，走出新創道路
                            <br>中小企業應發展自身的優勢，提高競爭門檻
                        </h1>
                        <p>
                            工業3.5為工業3.0與工業4.0之間的混合策略，
                            <br>先在工業3.0既有的製造系統環境下，掌握目前產業結構轉換的空間，
                            <br>達成或局部達到工業4.0的願景：大數據分析，價值鏈整合，彈性決策能力。
                            <br>在企業朝向智能製造與數位化轉型過程中，企業應自身檢視從設備層、
                            <br>作業流程、企業管理目標等，打造數智工廠，
                            <br>實現降本提效數位化轉型！
                        </p>
                        <p>
                            做出能夠讓企業勝出的決策，找出新的機會點，達到<strong>智造轉型</strong>！
                        </p>
                        <div class="signups">
                            <a href="http://acpms.digiwin.com/WebRegACT/index.html?gNo=2019050002" class="signup" target="_blank">免費線上報名</a>
                            <!-- <a
                                href="https://www.digiwin.com/tw/dsc/activity/WB002958/WB00295804.html"
                                class="signup"
                                target="_blank"
                            >活動花絮</a>-->
                        </div>
                    </div>
                </article>

                <article id="section1" class="section1">
                    <SectionTitle>講師陣容</SectionTitle>
                    <CastList :context="casts" v-if="casts"></CastList>
                    <Popup>
                        <div class="cast swiper-container">
                            <div class="swiper-wrapper">
                                <section
                                    v-for="(slide, idx) in casts"
                                    :key="slide.name"
                                    class="cast-slide swiper-slide"
                                >
                                    <div class="cast-content js-cast-content">
                                        <div class="cast-col">
                                            <img
                                                :src="require(`~/assets/images/cast-avatar${idx+1}-b.png`)"
                                                alt
                                            >
                                        </div>
                                        <div class="cast-col">
                                            <h1 class="cast-name">{{slide.name}}</h1>
                                            <p class="cast-company">{{slide.company}}</p>
                                            <p class="cast-desc">{{slide.desc}}</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div class="cast-button-prev cast-button"></div>
                            <div class="cast-button-next cast-button"></div>
                            <div class="cast-pagination"></div>
                        </div>
                    </Popup>
                </article>

                <article id="section2" class="section2">
                    <SectionTitle>活動議程</SectionTitle>
                    <ScheduleList></ScheduleList>
                </article>

                <article id="section3" class="section3">
                    <SectionTitle>2019活動場次</SectionTitle>
                    <div class="container">
                        <div class="section3-days">
                            <div class="section3-day">
                                <img src="~/assets/images/day1.png" usemap="#day1" alt>
                                <map name="#day1">
                                    <area
                                        target="_blank"
                                        alt
                                        title
                                        href="https://calendar.google.com/calendar/render?action=TEMPLATE&trp=true&sf=true&output=xml&dates=20190606T050000Z/20190606T091000Z&details=詳細活動連結%0Ahttps://www.digiwin.com/tw/dsc/activity/WB002958/web/&location=台中市大里區中興路一段161號&text=工業3.5智造轉型：工業人工智慧賦能數位化轉型&sprop=name:鼎新電腦&sprop=https://www.digiwin.com/tw/dsc/activity/WB002958/web/"
                                        coords="0, 1, 234, 122"
                                        shape="rect"
                                    >
                                    <area
                                        target="_blank"
                                        alt
                                        title
                                        href="/tw/dsc/images/taichung_map.jpg"
                                        coords="241, 0, 536, 122"
                                        shape="rect"
                                    >
                                </map>
                            </div>
                            <div class="section3-day">
                                <img src="~/assets/images/day2.png" usemap="#day2" alt>
                                <map name="#day2">
                                    <area
                                        target="_blank"
                                        alt
                                        title
                                        href="https://calendar.google.com/calendar/render?action=TEMPLATE&trp=true&sf=true&output=xml&dates=20190723T050000Z/20190723T091000Z&details=詳細活動連結%0Ahttps://www.digiwin.com/tw/dsc/activity/WB002958/web/&location=台北市中山區民權東路三段2號&text=工業3.5智造轉型：工業人工智慧賦能數位化轉型&sprop=name:鼎新電腦&sprop=https://www.digiwin.com/tw/dsc/activity/WB002958/web/"
                                        coords="0, 2, 236, 119"
                                        shape="rect"
                                    >
                                    <area
                                        target="_blank"
                                        alt
                                        title
                                        href="https://goo.gl/maps/ZQHrG8RRF5i6AGD19"
                                        coords="241, 0, 531, 119"
                                        shape="rect"
                                    >
                                </map>
                            </div>
                        </div>

                        <div class="signups">
                            <a href="http://acpms.digiwin.com/WebRegACT/index.html?gNo=2019050002" class="signup" target="_blank">免費線上報名</a>
                            <!-- <a
                                href="https://www.digiwin.com/tw/dsc/activity/WB002958/WB00295804.html"
                                class="signup"
                                target="_blank"
                            >活動花絮</a>-->
                        </div>

                        <p class="section3-desc">
                            13:30~17:10 (13:00開放入場)
                            <br>台灣製造產業之企業CEO、高階營運主管、特助、CIO資訊長、CMO製造主管/廠長等，率領各部中階主管報名參與
                        </p>

                        <div class="section3-social">
                            <a
                                href="mailto:?subject=工業3.5智造轉型：工業人工智慧賦能數位化轉型&body=我想要分享一個很棒且免費的研討會訊息給你！%0d%0a工業3.5智造轉型：工業人工智慧賦能數位化轉型%0d%0a詳細議程：https://www.digiwin.com/tw/dsc/activity/WB002958/web/"
                                target="_blank"
                            >
                                <img src="~/assets/images/social-icon1.png" alt>
                            </a>
                            <a
                                href="javascript:void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href))))"
                            >
                                <img src="~/assets/images/social-icon2.png" alt>
                            </a>
                            <a
                                href="http://line.naver.jp/R/msg/text/?工業3.5智造轉型：工業人工智慧賦能數位化轉型%0D%0A6/6台中場、7/23台北場。詳細議程 https://www.digiwin.com/tw/dsc/activity/WB002958/web/"
                                target="_blank"
                            >
                                <img src="~/assets/images/social-icon3.png" alt>
                            </a>
                            <a href="https://www.youtube.com/user/DSCTCE00" target="_blank">
                                <img src="~/assets/images/social-icon4.png" alt>
                            </a>
                        </div>

                        <a
                            href="https://acho.tw/acho/r/5kT4g"
                            target="_blank"
                            class="ad"
                        >
                            <picture>
                                <source
                                    media="(max-width: 640px)"
                                    srcset="~/assets/images/ad-banner-s.jpg"
                                >
                                <img src="~/assets/images/ad-banner.jpg" alt>
                            </picture>
                        </a>
                    </div>
                </article>
            </main>
        </div>
    </div>
</template>

<script>
let castSwiper;

import StickyNav from '~/components/StickyNav';
import StickyNavS from '~/components/StickyNavS';
import EventEnd from '~/components/EventEnd';
import Popup from '~/components/Popup';
import ScheduleList from '~/components/ScheduleList';
import CastList from '~/components/CastList';
import SectionTitle from '~/components/SectionTitle';
import HeaderNav from '~/components/HeaderNav';
import NextPage from '~/components/NextPage';

export default {
    head: {
        title: '工業3.5智造轉型 工業人工智慧賦能數位化轉型',
        meta: [
            { hid: 'description', name: 'description', content: '透過工業3.5，來找出工業3.0轉型至工業4.0間的最佳路徑，運用台灣製造業固有優勢，提高競爭門檻，打造數智工廠，實現降本提效數位化轉型！' },
            { property: 'og:title', content: '工業3.5智造轉型 工業人工智慧賦能數位化轉型' },
            { property: 'og:description', content: '透過工業3.5，來找出工業3.0轉型至工業4.0間的最佳路徑，運用台灣製造業固有優勢，提高競爭門檻，打造數智工廠，實現降本提效數位化轉型！' },
        ],
        link: [
            { rel: 'preload', href: `${process.env.BASE_URL}public/images/index/header-bg-s.jpg`, as: 'image' },
            { rel: 'preload', href: `${process.env.BASE_URL}public/images/index/header-img.png`, as: 'image' },
            { rel: 'stylesheet', href: `${process.env.BASE_URL}public/css/index-preload.css` },
        ],
        script: [
            { src: `${process.env.BASE_URL}public/vendor/imageMapResizer.min.js`, defer: 'defer' }
        ]
    },
    components: {
        StickyNav,
        StickyNavS,
        EventEnd,
        Popup,
        ScheduleList,
        CastList,
        Date,
        SectionTitle,
        HeaderNav,
        NextPage,
    },
    asyncData({ $axios }) {
        return $axios.$get(`${process.env.API_URL}public/db.json`)
            .then(res => {
                return {
                    casts: res.slides.casts,
                    reviews: res.slides.reviews,
                    links: res.links,
                };
            });
    },
    data() {
        return {
            isMounted: false,
        };
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        castSlideIdx() {
            return this.$store.state.castSlideIdx;
        },
    },
    methods: {
        popupInit() {
            $('#cast_popup').popup({
                opacity: 0.3,
                transition: 'all 0.3s',
                scrolllock: true,
                onopen: () => {
                    this.initSwiper();
                },
                closetransitionend() {
                    castSwiper.destroy();
                }
            });
        },
        initSwiper() {
            castSwiper = new Swiper('.cast.swiper-container', {
                loop: true,
                pagination: {
                    el: '.cast-pagination',
                    clickable: true,
                    bulletClass: 'cast-pagination-bullet',
                    bulletActiveClass: 'cast-pagination-bullet-active'
                },
                navigation: {
                    prevEl: '.cast-button-prev',
                    nextEl: '.cast-button-next'
                },
                initialSlide: this.castSlideIdx
            });
        },
    },
    mounted() {
        this.popupInit();
        imageMapResize();
        this.isMounted = true;
    },
};
</script>

<style lang="scss" src="~/assets/sass/style.scss"></style>
