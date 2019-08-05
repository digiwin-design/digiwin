<template>
    <div id="main" class="main">
        <div class="main-content">
            <header>
                <div class="container">
                    <h1>2019 鼎新企業高峰年會[ON AIR] | 流通場</h1>
                    <div class="header-illust"></div>
                    <img src="public/images/online/header-bg-s.jpg" alt="" class="header-illust-s">
                    <a href="http://bit.ly/2UJ2aFA" class="header-join" target="_blank">
                        <span class="join-text">報名線上收看</span>
                    </a>
                    <NextPage target="#begin"></NextPage>
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
                    <div class="container">
                        <h1>鼎新年會ON AIR ‧精彩內容隨時掌握</h1>
                        <p>鼎新企業高峰年會邁向第七個年頭，帶給千家企業夥伴產業新知與趨勢議題。<br>為服務廣大企業夥伴，今年除了實體場次之外，特別加開線上播映！隨時回顧年會精彩內容，讓學習時間更彈性。</p>
                        <p>成功報名線上年會，即受邀加入FB非公開社團，並享有《流通年會》直播影片觀看機會！產業最新趨勢不漏接！</p>
                    </div>
                </article>

                <a href="http://bit.ly/2UJ2aFA" class="join" target="_blank">
                    <span class="join-text">報名線上收看</span>
                </a>

                <article id="section2" class="section2">
                    <div class="container">
                        <h1>精．彩．議．程</h1>
                        <ul class="section2-desc">
                            <li>流通年會現場片段─預測顧客未來消費，再創新零售無限可能。</li>
                        </ul>
                        <div class="section2-schedule">
                            <div class="row">
                                <div class="section2-schedule-time">
                                    <p>上半場</p>
                                </div>
                                <div class="section2-schedule-list">
                                    <dl>
                                        <dt>翻轉營運</dt>
                                        <dd>新零售新視角-翻轉企業運營上資訊需求<i>｜鼎新電腦 資深副總裁 張進聰</i></dd>
                                        <dt>如何創客</dt>
                                        <dd>新零售心思維-可預見的未來商機<i>｜流通教父 徐重仁</i></dd>
                                    </dl>
                                </div>
                            </div>
                            <div class="row">
                                <div class="section2-schedule-time">
                                    <p>下半場</p>
                                </div>
                                <div class="section2-schedule-list">
                                    <dl>
                                        <dt>如何引客</dt>
                                        <dd>新零售新價值-把商品賣到全世界<i>｜亞馬遜(Amazon)全球開店台灣區 總經理 林惠君</i></dd>
                                        <dt>如何留客</dt>
                                        <dd>新零售興科技-打造與消費者零距離<i>｜治略資訊 創辦人 王智</i></dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    </div>
</template>

<script>
import NextPage from '~/components/NextPage';

export default {
    head: {
        title: '2019 鼎新企業高峰年會[ON AIR] | 流通場',
        link: [
            { rel: 'preload', href: `${process.env.BASE_URL}public/images/online/header-bg-s.jpg`, as: 'image' },
            { rel: 'preload', href: `${process.env.BASE_URL}public/images/online/header-img.png`, as: 'image' },
            { rel: 'stylesheet', href: `${process.env.BASE_URL}public/css/online-preload.css` },
        ],
    },
    components: {
        NextPage,
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
    },
};
</script>

<style lang="scss" src="~/assets/sass/online.scss"></style>
