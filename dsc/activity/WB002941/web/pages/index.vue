<template>
    <div id="main" class="main">
        <StickyNav v-if="!isMobile && isMounted && links" :links="links"></StickyNav>
        <StickyNavS v-if="isMobile && isMounted && links" :links="links"></StickyNavS>

        <div class="main-content">
            <header>
                <div class="container">
                    <h1><span>企業數位化轉型</span></h1>
                    <div class="header-illust"></div>
                    <img src="public/images/index/header-bg-s.jpg" class="header-illust-s" alt>
                    <HeaderNav></HeaderNav>
                    <NextPage target="#begin" offsetObj=".js-nav"></NextPage>
                </div>
            </header>

            <article id="begin" class="begin">
                <div class="container">
                    <h1>突破台廠轉型困境，AI賦能智造新契機<br>驅動企業數位化轉型，擘劃製造AI未來</h1>
                    <p>2019 人工智慧元年，<br>智慧製造驅動人工智慧，產業鏈將重新洗牌。<br>透過創新商業模式促使企業數位化轉型，<br>進而發掘客戶、銷售預測、提升良率來增速提效。<br>在AI賦能智慧製造邁向轉型變革之際，<br>掌握企業AI思維( Business AI Thinking)預見智造未來！</p>
                    <p>打破您對AI的理解，重新定義「製造AI」！</p>
                    <a
                        href="http://acpms.digiwin.com/WebRegACT/index.html?gNo=2019030009"
                        class="signup"
                        target="_blank"
                    >免費線上報名</a>
                </div>
            </article>

            <main>
                <article id="section1" class="section1">
                    <SectionTitle>講師陣容</SectionTitle>
                    <CastList :context="casts" v-if="casts"></CastList>
                    <Popup>
                        <div class="cast swiper-container">
                            <div class="swiper-wrapper">
                                <section
                                    v-for="(slide, idx) in castsPopup"
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
                                            <p v-for="position in slide.position" v-html="position" :key="position" class="cast-position"></p>
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
                            <Date
                                date="04.22"
                                place="台北場"
                                :location="{main:'喜來登大飯店',detail:'B2 福廳'}"
                                addr="台北市忠孝東路一段12號"
                                map="https://ppt.cc/fP7Gix"
                                calendar="https://calendar.google.com/calendar/render?action=TEMPLATE&trp=true&sf=true&output=xml&dates=20190422T053000Z/20190422T090000Z&details=詳細活動連結%0Ahttp://www.digiwin.com/tw/dsc/activity/WB002941/web/&location=台北市中正區忠孝東路一段12號&text=製造AI：預見智造未來&sprop=name:鼎新電腦&sprop=http://www.digiwin.com/tw/dsc/activity/WB002941/web/"
                            ></Date>
                            <Date
                                date="04.23"
                                place="台中場"
                                :location="{main:'鼎新電腦台中分公司',detail:'M201會議室'}"
                                addr="台中市大里區中興路一段161號<br>(台中軟體園區)"
                                map="http://www.digiwin.com/tw/dsc/images/taichung_map.jpg"
                                calendar="https://calendar.google.com/calendar/render?action=TEMPLATE&trp=true&sf=true&output=xml&dates=20190423T053000Z/20190423T090000Z&details=詳細活動連結%0Ahttp://www.digiwin.com/tw/dsc/activity/WB002941/web/&location=台中市大里區中興路一段161號&text=製造AI：預見智造未來&sprop=name:鼎新電腦&sprop=http://www.digiwin.com/tw/dsc/activity/WB002941/web/"
                            ></Date>
                        </div>

                        <div class="signups">
                            <a
                                href="http://acpms.digiwin.com/WebRegACT/index.html?gNo=2019030009"
                                class="signup"
                                target="_blank"
                            >免費線上報名</a>
                        </div>

                        <p class="section3-desc">13:30~17:00 (13:00開放入場)
                            <br>適合參加對象：適合企業主、決策層高階，率領各部中階主管報名參與
                        </p>

                        <div class="section3-social">
                            <a
                                href="mailto:?subject=製造AI：預見智造未來&body=我想要分享一個很棒且免費的研討會訊息給你！%0d%0a製造AI：預見智造未來%0d%0a詳細議程：http://www.digiwin.com/tw/dsc/activity/WB002941/web/"
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
                                href="http://line.naver.jp/R/msg/text/?製造AI：預見智造未來%0D%0A04/22台北場、04/23台中場。詳細議程 http://www.digiwin.com/tw/dsc/activity/WB002941/web/"
                                target="_blank"
                            >
                                <img src="~/assets/images/social-icon3.png" alt>
                            </a>
                            <a href="https://www.youtube.com/user/DSCTCE00" target="_blank">
                                <img src="~/assets/images/social-icon4.png" alt>
                            </a>
                        </div>

                        <div class="section3-ad">
                            <a href="http://www.digiwin.com/tw/dsc/activity/WB002879/WB00287906.htm" class="section3-link" target="_blank">
                                <picture>
                                    <source
                                        media="(max-width: 768px)"
                                        srcset="~/assets/images/ad-banner-s.jpg"
                                    >
                                    <img src="~/assets/images/ad-banner.jpg" class="section3-banner" alt>
                                </picture>
                            </a>
                        </div>
                    </div>
                </article>

                <div class="footer">
                    <div class="container">
                        <div class="col">主辦單位</div>
                        <div class="col">東海大學</div>
                        <div class="col"><img src="~/assets/images/organizer.png" alt=""></div>
                        <div class="col"><img src="~/assets/images/logo.png" alt="鼎新電腦"></div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
let castSwiper;

import StickyNav from '~/components/StickyNav';
import StickyNavS from '~/components/StickyNavS';
import Popup from '~/components/Popup';
import ScheduleList from '~/components/ScheduleList';
import CastList from '~/components/CastList';
import Date from '~/components/Date';
import SectionTitle from '~/components/SectionTitle';
import HeaderNav from '~/components/HeaderNav';
import NextPage from '~/components/NextPage';

export default {
    head: {
        title: '製造AI：預見智造未來',
        link: [
            { rel: 'preload', href: `${process.env.BASE_URL}public/images/index/header-bg-s.jpg`, as: 'image' },
            { rel: 'preload', href: `${process.env.BASE_URL}public/images/index/header-img.png`, as: 'image' },
            { rel: 'preload', href: `${process.env.BASE_URL}public/images/index/header-img-s.png`, as: 'image' },
            { rel: 'stylesheet', href: `${process.env.BASE_URL}public/css/index-preload.css` },
        ],
    },
    components: {
        StickyNav,
        StickyNavS,
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
                    castsPopup: res.slides.castsPopup,
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
