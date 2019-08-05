<template>
    <div id="main" class="main">
        <StickyNav v-if="!isMobile && isMounted && links" :links="links"></StickyNav>
        <StickyNavS v-if="isMobile && isMounted && links" :links="links"></StickyNavS>

        <div class="main-content">
            <header>
                <div class="container">
                    <h1>2019鼎新企業高峰年會－企業數位化轉型｜流通場</h1>
                    <div class="header-illust"></div>
                    <a
                        href
                        id="nextSection"
                        class="nextSection"
                        @click.prevent="nextSection('#begin')"
                    ></a>
                </div>
            </header>

            <article id="begin" class="begin">
                <div class="container">
                    <div class="top-content">
                        <h1>重量級專家帶您踏入新零售找商機</h1>
                        <p>數位浪潮熱度延燒，新零售態勢順勢而起
                            <br>共融互通的產業鏈，深度整合線上線下零售模式
                            <br>企業站在虛實變革前端，面臨消費者不斷牽引供需市場
                            <br>掌握創造顧客想要的價值就能主導市場、勝出未來！
                        </p>
                    </div>
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
                                    v-for="(slide, idx) in casts"
                                    :key="slide.name"
                                    class="cast-slide swiper-slide"
                                >
                                    <div class="cast-content js-cast-content">
                                        <div class="cast-col">
                                            <img
                                                :src="require(`~/assets/images/cast-avatar${idx+1}.png`)"
                                                alt
                                            >
                                        </div>
                                        <div class="cast-col">
                                            <h1 class="cast-name">{{slide.name}}</h1>
                                            <h2 class="cast-position">{{slide.position}}</h2>
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
                    <SectionTitle>精彩議程</SectionTitle>
                    <div class="container">
                        <ScheduleList :context="casts" v-if="casts"></ScheduleList>
                        <p class="section2-remark">備註：一家企業限額五位報名，主辦單位保留議程變更及報名成功與否之權利</p>
                    </div>
                </article>

                <article id="section3" class="section3">
                    <SectionTitle>活動場次</SectionTitle>
                    <div class="container">
                        <div class="section3-days">
                            <div class="section3-day">
                                <Date
                                    year="2019"
                                    date="03/20"
                                    day="三"
                                    county="台中場"
                                    location="鼎新電腦台中公司 2樓 M201會議室"
                                    addr="中軟園區-台中市大里區中興路一段161號"
                                    map="https://goo.gl/Ct29pF"
                                    calendar="https://calendar.google.com/calendar/render?action=TEMPLATE&trp=true&sf=true&output=xml&dates=20190320T053000Z/20190320T091000Z&details=詳細活動連結%0Ahttp://www.digiwin.com/tw/dsc/activity/WB002926/web/&location=台中市大里區中興路一段161號&text=預測顧客未來消費-再創新零售的無限可能&sprop=name:鼎新電腦&sprop=http://www.digiwin.com/tw/dsc/activity/WB002926/web/"
                                ></Date>
                            </div>
                            <div class="section3-day">
                                <Date
                                    year="2019"
                                    date="03/21"
                                    day="四"
                                    county="台北場"
                                    location="大直典華 6樓 花田盛事廳"
                                    addr="台北市中山區植福路8號"
                                    map="https://goo.gl/q98PnJ"
                                    calendar="https://calendar.google.com/calendar/render?action=TEMPLATE&trp=true&sf=true&output=xml&dates=20190321T053000Z/20190321T091000Z&details=詳細活動連結%0Ahttp://www.digiwin.com/tw/dsc/activity/WB002926/web/&location=台北市中山區植福路8號&text=預測顧客未來消費-再創新零售的無限可能&sprop=name:鼎新電腦&sprop=http://www.digiwin.com/tw/dsc/activity/WB002926/web/"
                                ></Date>
                            </div>
                        </div>

                        <div class="signups">
                            <a
                                href="http://acpms.digiwin.com/WebRegACT/onair.html?gNo=2019030003"
                                class="signup"
                                target="_blank"
                            >報名線上研討會</a>
                            <a
                                href="/tw/dsc/activity/WB002926/WB00292605.html"
                                class="signup"
                                target="_blank"
                            >活動花絮</a>

                        </div>

                        <p class="section3-desc">【4月底前開放流通年會線上回看報名】報名審核通過後，將提供線上活動社團連結<br>適合參加對象：流通產業之企業主、決策層高階，率領各部中階主管報名參與</p>

                        <div class="section3-social">
                            <a
                                href="mailto:?subject=預測顧客未來消費，再創新零售的無限可能&body=我想要分享一個很棒且免費的研討會訊息給你！%0d%0a2019鼎新企業高峰年會-企業數位化轉型(流通場)《預測顧客未來消費，再創新零售的無限可能》%0d%0a詳細議程：https://goo.gl/qfXXR8"
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
                                href="http://line.naver.jp/R/msg/text/?歡迎蒞臨2019鼎新企業高峰年會：預測顧客未來消費，再創新零售的無限可能%0D%0A03/20台中場、03/21台北場。詳細議程 https://goo.gl/qfXXR8"
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
                        <a href="http://www.digiwin.com/tw/dsc/activity/WB002928/web/" target="_blank">
                            <picture>
                                <source media="(max-width: 640px)" srcset="~/assets/images/ad-banner-s.jpg">
                                <img src="~/assets/images/ad-banner.jpg" alt="">
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
            </main>
        </div>
    </div>
</template>

<script>
let castSwiper;

import _ from 'lodash';
import StickyNav from '~/components/StickyNav';
import StickyNavS from '~/components/StickyNavS';
import EventEnd from '~/components/EventEnd';
import Popup from '~/components/Popup';
import VueSwiper from '~/components/VueSwiper';
import ScheduleList from '~/components/ScheduleList';
import CastList from '~/components/CastList';
import Date from '~/components/Date';
import SectionTitle from '~/components/SectionTitle';

export default {
    head: {
        title: '2019鼎新企業高峰年會：預測顧客未來消費，再創新零售的無限可能',
        link: [
            { rel: 'preload', href: `${process.env.BASE_URL}public/images/index/header-bg-s.jpg`, as: 'image' },
            { rel: 'preload', href: `${process.env.BASE_URL}public/images/index/header-img.png`, as: 'image' },
            { rel: 'stylesheet', href: `${process.env.BASE_URL}public/css/index-preload.css` },
        ],
    },
    components: {
        VueSwiper,
        StickyNav,
        StickyNavS,
        EventEnd,
        Popup,
        ScheduleList,
        CastList,
        Date,
        SectionTitle,
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
        nextSection(target) {
            let offset = document.querySelector('.js-nav').offsetHeight;
            let targetPos = $(target).offset().top;
            let finalPos = this.isMobile ? targetPos : targetPos - offset;
            $('html, body').animate({ scrollTop: finalPos });
        },
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
        locateArrow: _.throttle(function () {
            let pos = $(window).scrollTop();
            if (pos >= 60) { // 60:箭頭原位置與新位置的距離(80px-20px)
                $('#nextSection').addClass('no-fixed');
            } else {
                $('#nextSection').removeClass('no-fixed');
            }
        }, 100),
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
        window.addEventListener('resize', this.locateArrow);
        window.addEventListener('scroll', this.locateArrow);
        this.locateArrow();
        this.popupInit();
        this.isMounted = true;
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.locateArrow);
        window.removeEventListener('scroll', this.locateArrow);
    }
};
</script>

<style lang="scss" src="~/assets/sass/style.scss"></style>
