<template>
    <div class="desktop">
        <ul class="desktop-nav">
            <li><a href="#section1" class="js-nav icon1" data-text="專案管理"></a></li>
            <li><a href="#section2" class="js-nav icon2" data-text="許可證管理"></a></li>
            <li><a href="#section3" class="js-nav icon3" data-text="FMEA"></a></li>
            <li><a href="#section4" class="js-nav icon4" data-text="圖文管理"></a></li>
        </ul>

        <section id="section1">
            <h1 class="sectionTitle">專案管理</h1>
            <slider id="t1" :nav="nav">
                <!-- 常見痛點 -->
                <template slot="t1-0-t">
                    <div class="slider-desc">
                        <h2 class="slider-desc-title">
                            <strong>事件一</strong>這次新品開發預計要多久時間，PM儘快擬定研發專案執行計劃及時間表!!
                        </h2>
                    </div>
                </template>
                <template slot="t1-0">
                    <div class="slider-boxs">
                        <div class="slider-box fg1">
                            <hover-box custom-class="main icon1" color="#174f8e">
                                <template slot="content">
                                    <p class="hoverBox-title">研發</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">除了要開發產品, 還要填專案進度報告.又有一堆的產品文件資料要做要整理!!</div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="main icon2" color="#49bcc3">
                                <template slot="content">
                                    <p class="hoverBox-title">研發主管</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">專案進度嚴重落後, 現在進行到那個階段, 遇到什麼瓶頸有什麼問題?</div>
                                </template>
                            </hover-box>
                        </div>
                        <div class="slider-box fg1">
                            <hover-box custom-class="main icon3" color="#4c7cbd">
                                <template slot="content">
                                    <p class="hoverBox-title">總經理</p>
                                </template>
                                <template slot="hover">
                                    <div class="hoverBox-hoverText">都己經過3個月了，產品遲遲無法上市，這樣我們還有多少市場商機??</div>
                                </template>
                            </hover-box>
                        </div>
                    </div>
                </template >

                <!-- 解決方案 -->
                <template slot="t1-1">
                    <div class="slider-illust">
                        <img src="images/WB00278501_research/slide-illust1.png" alt="">
                    </div>
                </template>
            </slider>
            <a href="#contact" class="more js-nav">還有更多專案管理方案說明</a>
        </section>
    </div>
</template>

<script>
module.exports = {
    computed: {
        nav: function() {
            return ['常見痛點', '解決方案'];
        }
    },
}
</script>