<template>
    <div id="main" class="main">
        <StickyNav v-if="!isMobile && isMounted && links" :links="links"></StickyNav>
        <StickyNavS v-if="isMobile && isMounted && links" :links="links"></StickyNavS>

        <div class="main-content">
            <header>
                <div class="container">
                    <h1>2019鼎新企業高峰年會｜製造場</h1>
                    <div class="header-illust"></div>
                    <img src="public/images/index/header-bg-s.jpg" class="header-illust-s" alt>
                    <HeaderNav></HeaderNav>
                    <NextPage target="#begin" offsetObj=".js-nav"></NextPage>
                </div>
            </header>

            <article id="begin" class="begin">
                <div class="container">
                    <h1>智慧製造<strong>借鏡國際卻面臨難題？！</strong><br><strong>台廠如何走出</strong>精實智造<strong>的新捷徑</strong></h1>
                    <p>台灣企業缺乏規模紅利與最適轉型路徑，首需釐清企業數位化轉型本質，<br>從營運數據分析到人工智慧、工業大數據與工業互聯…等等新應用，助力企業達到提質增效、<br>降本減存的核心競爭力，進而激發新商業模式思維，促進產業轉型升級，讓台灣邁向新智造！</p>
                    <p>一場接軌國際觀點與企業實證的分享盛會不容錯過 !</p>
                    <div class="signups">
                        <a
                            href="http://bit.ly/2ULv4oA"
                            class="signup"
                            target="_blank"
                        >線上直播報名</a>
                        <a
                            href="http://www.digiwin.com/tw/dsc/activity/WB002928/WB00292804.html"
                            class="signup"
                            target="_blank"
                        >活動花絮</a>
                    </div>
                </div>
            </article>

            <main>
                <article class="chart">
                    <div class="container">
                        <div class="chart-title">
                            <hgroup>
                                <h1>企業數位化轉型</h1>
                                <h2>邁向智能時代的關鍵</h2>
                            </hgroup>
                            <div class="chart-desc">
                                <p>基於數據趨動的製造業轉型，提高營運效能只是起點，帶動企業發展新商業模式與持續創新變革，<br>在追求企業永續經營的路徑不斷前進。</p>
                            </div>
                        </div>
                        <picture>
                            <source media="(max-width: 768px)" srcset="~/assets/images/chart-s.png">
                            <img src="~/assets/images/chart.png" alt="">
                        </picture>
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
                                            <p class="cast-position">{{slide.position}}</p>
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
                                <Date
                                    date="03.26"
                                    day="二"
                                    county="<i class='font'>台</i><i class='font'>中</i><i class='font'>場</i>"
                                    :location="{main:'鼎新電腦',detail:'台&emsp;中<br>分公司'}"
                                    addr="台中市大里區中興路一段161號"
                                    map="https://goo.gl/Ct29pF"
                                    calendar="https://calendar.google.com/calendar/render?action=TEMPLATE&trp=true&sf=true&output=xml&dates=20190326T053000Z/20190326T090000Z&details=詳細活動連結%0Ahttp://www.digiwin.com/tw/dsc/activity/WB002928/web/&location=台中市大里區中興路一段161號&text=企業數位化轉型 邁向台灣新智造&sprop=name:鼎新電腦&sprop=http://www.digiwin.com/tw/dsc/activity/WB002928/web/"
                                ></Date>
                            </div>
                            <div class="section3-day">
                                <Date
                                    date="03.27"
                                    day="三"
                                    county="<i class='font'>台</i><i class='font'>北</i><i class='font'>場</i>"
                                    :location="{main:'大直典華',detail:'6樓<br>花田盛事廳'}"
                                    addr="台北市中山區植福路8號"
                                    map="https://goo.gl/q98PnJ"
                                    calendar="https://calendar.google.com/calendar/render?action=TEMPLATE&trp=true&sf=true&output=xml&dates=20190327T053000Z/20190327T090000Z&details=詳細活動連結%0Ahttp://www.digiwin.com/tw/dsc/activity/WB002928/web/&location=台北市中山區植福路8號&text=企業數位化轉型 邁向台灣新智造&sprop=name:鼎新電腦&sprop=http://www.digiwin.com/tw/dsc/activity/WB002928/web/"
                                ></Date>
                            </div>
                        </div>

                        <div class="signups">
                            <a
                                href="http://bit.ly/2ULv4oA"
                                class="signup"
                                target="_blank"
                            >線上直播報名</a>
                            <a
                                href="http://www.digiwin.com/tw/dsc/activity/WB002928/WB00292804.html"
                                class="signup"
                                target="_blank"
                            >活動花絮</a>
                        </div>

                        <p class="section3-desc">13:30~17:00 (13:00開放入場)
                            <br>適合參加對象：適合企業主、決策層高階，率領各部中階主管報名參與
                        </p>

                        <div class="section3-social">
                            <a
                                href="mailto:?subject=企業數位化轉型 邁向台灣新智造&body=我想要分享一個很棒且免費的研討會訊息給你！%0d%0a2019鼎新企業高峰年會-企業數位化轉型(製造場)《邁向台灣新智造》%0d%0a詳細議程：https://goo.gl/M9L5tS"
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
                                href="http://line.naver.jp/R/msg/text/?2019鼎新企業高峰年會：邁向台灣新智造%0D%0A03/26台中場、03/27台北場。詳細議程 https://goo.gl/mc2Q3A"
                                target="_blank"
                            >
                                <img src="~/assets/images/social-icon3.png" alt>
                            </a>
                            <a href="https://www.youtube.com/user/DSCTCE00" target="_blank">
                                <img src="~/assets/images/social-icon4.png" alt>
                            </a>
                        </div>
                    </div>
                </article>

                <article class="ad">
                    <SectionTitle setClass="bottom">2019企業數位化轉型高峰年會</SectionTitle>
                    <div class="container">
                        <a href="http://www.digiwin.com/tw/dsc/activity/WB002926/web/" target="_blank">
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

                <article class="review">
                    <SectionTitle setClass="bottom">鼎新企業高峰年會
                        <br>歷年精彩回顧
                    </SectionTitle>
                    <div class="container">
                        <VueSwiper :slides="reviews" v-if="reviews && isMounted"></VueSwiper>
                    </div>
                </article>

                <div class="organizer container">
                    <img src="~/assets/images/organizer.png" alt="">
                </div>
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
import VueSwiper from '~/components/VueSwiper';
import ScheduleList from '~/components/ScheduleList';
import CastList from '~/components/CastList';
import Date from '~/components/Date';
import SectionTitle from '~/components/SectionTitle';
import HeaderNav from '~/components/HeaderNav';
import NextPage from '~/components/NextPage';

export default {
    head: {
        title: '2019鼎新企業高峰年會(製造場)-企業數位化轉型 邁向台灣新智造',
        link: [
            { rel: 'preload', href: `${process.env.BASE_URL}public/images/index/header-bg-s.jpg`, as: 'image' },
            { rel: 'preload', href: `${process.env.BASE_URL}public/images/index/header-img.png`, as: 'image' },
            { rel: 'stylesheet', href: `${process.env.BASE_URL}public/css/index-preload.css` },
        ],
    },
    components: {
        StickyNav,
        StickyNavS,
        EventEnd,
        Popup,
        VueSwiper,
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
        this.isMounted = true;
    },
};
</script>

<style lang="scss" src="~/assets/sass/style.scss"></style>
