<template>
    <div id="main" class="main">
        <div class="main-content">
            <header>
                <div class="container">
                    <h1>2019 鼎新企業高峰年會[ON AIR]｜製造場</h1>
                    <div class="header-illust"></div>
                    <img src="public/images/online/header-bg-s.jpg" class="header-illust-s" alt>
                    <a href="http://bit.ly/2ULv4oA" class="header-join" target="_blank">立即加入線上年會</a>
                    <NextPage target="#begin"></NextPage>
                </div>
            </header>

            <article id="begin" class="begin">
                <div class="container">
                    <h1>智慧製造<strong>借鏡國際卻面臨難題？！</strong><br><strong>台廠如何走出</strong>精實智造<strong>的新捷徑</strong></h1>
                    <p>台灣企業缺乏規模紅利與最適轉型路徑，首需釐清企業數位化轉型本質，<br>從營運數據分析到人工智慧、工業大數據與工業互聯…等等新應用，助力企業達到提質增效、<br>降本減存的核心競爭力，進而激發新商業模式思維，促進產業轉型升級，讓台灣邁向新智造！</p>
                    <p>一場接軌國際觀點與企業實證的分享盛會不容錯過 !</p>
                </div>
            </article>

            <main>
                <article id="section1" class="section1">
                    <div class="container">
                        <h1>鼎新年會ON AIR ‧精彩內容隨時掌握</h1>
                        <p>鼎新企業高峰年會邁向第七個年頭，帶給千家企業夥伴產業新知與趨勢議題。<br>為服務廣大企業夥伴，今年除了實體場次之外，特別加開線上播映！不論是第一時間掌握年會LIVE直播，或是會後回看，讓學習時間更彈性。</p>
                        <p>成功報名線上年會，即受邀加入FB非公開社團，並享有《製造年會》直播影片觀看機會！產業最新趨勢不漏接！</p>
                    </div>
                </article>

                <a href="http://bit.ly/2ULv4oA" class="join" target="_blank">
                    <span class="join-text">立即加入線上年會</span>
                </a>

                <article id="section2" class="section2">
                    <div class="container">
                        <h1>精．彩．議．程</h1>
                        <ul class="section2-desc">
                            <li>3/27(三)製造場─企業數位化轉型，邁向台灣新智造。</li>
                            <li>直播時間：分上下半場直播，上半場13:30-15:10；下半場15:30-17:10。（實際直播時間以現場活動時間為主）</li>
                        </ul>
                        <div class="section2-schedule">
                            <div class="row">
                                <div class="section2-schedule-time">
                                    <p>上半場</p>
                                    <p>13:30-15:10</p>
                                </div>
                                <div class="section2-schedule-list">
                                    <ul>
                                        <li>歡迎詞<i>｜鼎新電腦 葉子禎 總裁</i></li>
                                        <li>工業人工智慧<br>助力企業數位轉型邁向新智造<i>｜富士康工業互聯網（FII）鄭弘孟 首席執行官</i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="section2-schedule-time">
                                    <p>下半場</p>
                                    <p>15:30-17:10</p>
                                </div>
                                <div class="section2-schedule-list">
                                    <ul>
                                        <li>企業數位化轉型路徑與實踐案例分享<i>｜鼎新電腦 智能+研究中心 蘇斌雄 專家</i></li>
                                        <li>宇瞻佈局智慧物聯 數位化轉型新智造<i>｜宇瞻科技 智慧應用處 林志亮 處長</i></li>
                                    </ul>
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
        title: '2019 鼎新企業高峰年會[ON AIR] | 製造場',
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
