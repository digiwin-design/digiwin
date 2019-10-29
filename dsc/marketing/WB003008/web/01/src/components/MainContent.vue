<template>
    <div class="main-content">
        <!--banner-->
        <section id="banner" :style="{ backgroundImage: `url(${publicPath + bannerImgSrc})` }">
            <div class="container">
                <img src="title1.png" alt class="Img_s pc" />
                <img src="title2.png" alt class="mImg_s m-mobile" />
                <p class="Txt_p">最適合企業在東南亞發展使用的全方位ERP產品，符合在地稅制法規，滿足製造業行業特性，依企業各階段發展規模，提供高品質、高效益的東南亞在地化服務(越南、馬來西亞、泰國皆有營業據點)。</p>
                <HeaderForm></HeaderForm>
            </div>
        </section>
        <!--视角-->
        <section id="D_view">
            <div class="container">
                <h2>以企業經營為視角，<br />讓管理變輕鬆</h2>
                <img src="@/assets/images/line.png" alt class="Img_h" />
                <p class="txt_p1">鼎捷淬煉在地經驗與行業解決方案，<br />讓您揮別過去的管理困擾，實現資訊化應用價值。</p>
                <div class="box-r">
                    <p class="txt_p1 color-1">您是否遇到以下難題…</p>
                </div>
                <ul class="box-f">
                    <li class="js-box-list">
                        <div class="fadeout">
                            <img src="@/assets/images/icon1_off.png" alt class="Img_t" />
                            <p class="txt_p1">人工作業效率差</p>
                            <p class="Txt_p color-2">人工EXCEL報表效率差<br />作業權限不分賞罰難辨<br />跨部溝通難無數據依據</p>
                            <div class="box-arc">
                                <p class="txt_p1 color-3">系統應用效益</p>
                                <img src="@/assets/images/arrow-angle.png" alt />
                            </div>
                        </div>

                        <div class="fadein">
                            <img src="@/assets/images/icon1_on.png" alt class="Img_t" />
                            <p class="txt_p1">系統應用效益</p>
                            <p class="Txt_p">改善各部門管理問題，固化作業流程，降低管理成本，提高營運利潤。</p>
                        </div>
                    </li>
                    <li class="js-box-list">
                        <div class="fadeout">
                            <img src="@/assets/images/icon2_off.png" alt class="Img_t" />
                            <p class="txt_p1">經營狀況不透明</p>
                            <p class="Txt_p color-2">想提快結帳天數？<br />想提高生產效能？<br />想降低庫存金額？</p>
                            <div class="box-arc">
                                <p class="txt_p1 color-3">顧問諮詢輔導</p>
                                <img src="@/assets/images/arrow-angle.png" alt />
                            </div>
                        </div>
                        <div class="fadein">
                            <img src="@/assets/images/icon2_on.png" alt class="Img_t" />
                            <p class="txt_p1">顧問諮詢輔導</p>
                            <p class="Txt_p">根據企業發展戰略及營經管理指標，籍由資訊化提昇企業核心競爭能力。</p>
                        </div>
                    </li>
                    <li class="js-box-list">
                        <div class="fadeout">
                            <img src="@/assets/images/icon3_off.png" alt class="Img_t" />
                            <p class="txt_p1">語言、文化差異大</p>
                            <p class="Txt_p color-2">稅制法令因應，怎麼辦？<br />系統有越文.泰文介面嗎？<br />有沒有在地輔導團隊？</p>
                            <div class="box-arc">
                                <p class="txt_p1 color-3">在地團隊支援</p>
                                <img src="@/assets/images/arrow-angle.png" alt />
                            </div>
                        </div>
                        <div class="fadein">
                            <img src="@/assets/images/icon3_on.png" alt class="Img_t" />
                            <p class="txt_p1">在地團隊支援</p>
                            <p class="Txt_p">符合當地稅務法令與國際關務規定、多語系架構(越南.簡繁中文.泰文.英文)的在地化應用模組。</p>
                        </div>
                    </li>
                    <li class="js-box-list">
                        <div class="fadeout">
                            <img src="@/assets/images/icon4_off.png" alt class="Img_t" />
                            <p class="txt_p1">管理跟不上成長速度</p>
                            <p class="Txt_p color-2">可以只管進銷存就好嗎？<br />公司愈變愈大系統能負荷？</p>
                            <div class="box-arc">
                                <p class="txt_p1 color-3">永續精進管理</p>
                                <img src="@/assets/images/arrow-angle.png" alt />
                            </div>
                        </div>
                        <div class="fadein">
                            <img src="@/assets/images/icon4_on.png" alt class="Img_t" />
                            <p class="txt_p1">永續精進管理</p>
                            <p class="Txt_p">滿足企業發展速度與時俱進的管理需求與營運模式，提供軟硬體整合的價值服務。</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section id="D_solution">
            <div class="container">
                <h2>最多企業的聰明選擇，<br />東南亞在地化管理就選鼎捷！</h2>
                <img src="@/assets/images/line.png" alt class="Img_h" />
                <p class="txt_p1">Workflow ERP符合在地稅制法規，滿足製造業行業特性</p>
                <p class="Txt_p">Workflow ERP iGP提供進銷存管理、財務管理(會計總帳與應收應付管理)、生產管理、訂單管理、採購管理、<br />物料需求管理(MRP/LRP)、產品結構管理(BOM表)…等，配合智能流程管理系統IMS、電子表單與行業知識<br />包，更能結合當地法令(電子發票、關務稅制)，協助企業快速建置完整的企業資源規劃評估。</p>
                <div
                    style="height: 736px; overflow: hidden; margin: 0 auto;margin-top: 25px;"
                    class="pc"
                    v-if="!isMobile"
                >
                    <div class="fl" style="margin-left: 50px;">
                        <img src="@/assets/images/WF_iGP_logo.png" alt />
                        <a data-fancybox="gallery" href="WF2.png">
                            <div class="boost">
                                <img src="@/assets/images/icon_magnifier.png" alt="系統架構圖" class="Icon_click" />
                            </div>
                        </a>
                    </div>
                    <div class="fr" style="width: 50%">
                        <img src="@/assets/images/right.png" alt="ERP系統導入效益：企業作業流程標準化、跨部溝通正確流暢、減少人工作業誤差、庫存物料帳實一致、提高生產製造產能、財務報表即時準確、符合法規降低風險、資訊即時加速反應力、提升數據管理決策力" style="margin-top: 40px" />
                    </div>
                </div>
                <a href @click.prevent="clickHandler">
                    <img src="@/assets/images/btn_r.png" alt class="pc" style="margin: 0 auto;" />
                </a>
                <div class="m-mobile" v-if="isMobile">
                    <img src="@/assets/images/mWF_iGP_logo.png" alt style="margin-top:25px;" />
                    <a data-fancybox="gallery" href="WF2.png">
                        <div class="boost">
                            <img src="@/assets/images/icon_magnifierm.png" alt="系統架構圖" class="Icon_click" />
                        </div>
                    </a>
                    <img src="@/assets/images/rightm.png" alt="ERP系統導入效益：企業作業流程標準化、跨部溝通正確流暢、減少人工作業誤差、庫存物料帳實一致、提高生產製造產能、財務報表即時準確、符合法規降低風險、資訊即時加速反應力、提升數據管理決策力" style="margin-bottom: 15px;" />
                    <div class="hint">
                        <p class="clearbtn">
                            <img src="@/assets/images/clear-button.png" alt />
                        </p>
                        <img src="@/assets/images/WF2.png" alt />
                    </div>
                </div>
                <a href @click.prevent="clickHandler">
                    <img src="@/assets/images/btn_rm.png" alt class="m-mobile" style="margin: 0 auto" />
                </a>
            </div>
        </section>
        <section id="case">
            <div class="container">
                <h2>我們的客戶遍佈ASEAN</h2>
                <img src="@/assets/images/line-w.png" alt class="Img_h" />
                <p class="txt_p1">鼎新.鼎捷的方案與服務覆蓋80多個細分行業<br />其中有<span>300多家</span>企業於東南亞接受鼎捷的在地服務</p>
                <ul class="c_table">
                    <li>第一精密</li>
                    <li>宏致精密</li>
                    <li>GSK</li>
                    <li>士林電機</li>
                    <li>伍氏</li>
                    <li>越南佑驛</li>
                </ul>
                <ul class="c_table">
                    <li>廣隆電池</li>
                    <li>雅得電池</li>
                    <li>和慶電子(泰)</li>
                    <li>DANKA</li>
                    <li>大綸紡織</li>
                    <li>大昇化工</li>
                </ul>
                <ul class="c_table">
                    <li>統一食品</li>
                    <li>金車食品</li>
                    <li>億霖食品</li>
                    <li>越南IBO食品</li>
                    <li>瑞興冷凍</li>
                    <li>普惠醫工</li>
                </ul>
                <ul class="c_table">
                    <li>KOSSAN</li>
                    <li>Emerald</li>
                    <li>大洋塗料</li>
                    <li>德一塗料</li>
                    <li>政隆塑膠</li>
                    <li>南寶樹脂</li>
                </ul>
                <ul class="c_table">
                    <li>凱勝傢俱</li>
                    <li>凱撒衛浴</li>
                    <li>協楊木業</li>
                    <li>Brain Thai(泰)</li>
                    <li>特昇國際(馬)</li>
                    <li>WEGMANS(馬)</li>
                </ul>
                <ul class="c_table">
                    <li>越南鑽石</li>
                    <li>鴻運模具</li>
                    <li>合益金屬</li>
                    <li>振泰織帶</li>
                    <li>RGT(馬)</li>
                    <li>佳日建築</li>
                </ul>
                <p class="txt_p3">※未特別標註為越南客戶</p>
            </div>
        </section>
    </div>
</template>

<script>
import HeaderForm from '@/components/HeaderForm.vue';
export default {
    components: {
        HeaderForm,
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        publicPath() {
            return process.env.BASE_URL;
        },
        bannerImgSrc() {
            return this.isMobile ? 'bannerbgm.jpg' : 'bannerbg.jpg';
        },
    },
    watch: {
        isMobile(val) {
            this.initFancybox();
        }
    },
    methods: {
        mediaSensor(minWidth) {
            let resizeWidth = (pMatchMedia) => this.$store.commit('updateDevice', !pMatchMedia.matches);
            let mm = window.matchMedia(`(min-width: ${minWidth + 1}px)`);
            mm.addListener(resizeWidth);
            resizeWidth(mm);
        },
        initFancybox() {
            this.$nextTick(() => {
                $.fancybox.destroy();
                $('[data-fancybox="gallery"]').fancybox({
                    animationEffect : 'fade'
                });
            });
        },
        clickHandler() {
            let targetPos = document.querySelector('#contact').getBoundingClientRect().top + window.pageYOffset;
            window.scroll({ top: targetPos, left: 0, behavior: 'smooth' });
        },
    },
    mounted() {
        $('.js-box-list').hover(function () {
            $(this).children('.fadein').stop().animate({ "top": "0" });
            $(this).find('.box-arc').stop().animate({ bottom: "-74px" });
        }, function () {
            $(this).children('.fadein').stop().animate({ "top": "130%" });
            $(this).find('.box-arc').stop().animate({ bottom: "0" });
        });
        this.mediaSensor(768);
        this.initFancybox();
    },
}
</script>

<style lang="scss" scoped>
section {
    position: relative;
    min-width: 1200px;
    max-width: 1920px;
    width: 100%;
    font-size: 16px;
}
.container {
    position: relative;
    margin: 0 auto;
    width: 1200px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
    line-height: 1.5;
}

h1 {
    font-size: 55px;
}

h2 {
    font-size: 40px;
}

h3 {
    font-size: 24px;
}
h4 {
    font-size: 20px;
}
h5 {
    font-size: 18px;
}
p {
    font-size: 18px;
    line-height: 1.5;
}
.pc {
    display: block;
}
.m-mobile {
    display: none;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
.D_box {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 91;
    display: none;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .5);
}
/*banner*/
#banner {
    position: relative;
    height: 520px;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    .container {
        position: relative;
        height: 100%;
    }
    .headForm {
        position: absolute;
        right: 50px;
        bottom: 55px;
        @media (max-width: 768px) {
            right: 0;
            bottom: 30px;
            left: 0;
            margin: auto;
        }
    }
}
#banner .Img_s {
    padding-top: 200px;
    padding-left: 50px;
}
#banner .Txt_p {
    padding-top: 25px;
    padding-left: 50px;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    width: 720px;
    @media (max-width: 768px) {
        width: 100%;
    }
}

#D_view {
    position: relative;
    height: 790px;
    background: url('~@/assets/images/vievBG.png') no-repeat center center;
    background-size: cover;
    text-align: center;
}
#D_view h2 br,
#D_solution h2 br {
    display: none;
}
#D_view h2,
#D_solution h2 {
    padding-top: 42px;
    color: #cc2619;
    font-weight: bold;
}
.txt_p1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 1.42;
}
.Img_h {
    margin-top: 5px;
    margin-bottom: 15px;
}
#D_view .box-r {
    position: relative;
    margin: 0 auto;
    margin-top: 30px;
    width: 400px;
    height: 60px;
    border-radius: 30px;
    background: #313131;
}
.color-1 {
    color: #fff;
    text-align: center;
    line-height: 60px !important;
}
#D_view .box-r:after {
    position: absolute;
    right: 0;
    bottom: -20px;
    left: 50%;
    z-index: 10;
    margin-left: -12px;
    width: 0;
    height: 0;
    border-top: 12px solid #313131;
    border-right: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 12px solid transparent;
    content: ' ';
}
#D_view .box-f {
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 30px;
    width: 100%;
}

#D_view .box-f li {
    position: relative;
    float: left;
    margin-right: 26px;
    width: 280px;
    height: 420px;
    background: #fff;
    box-shadow: 4px 4px 4px rgba(100, 100, 100, .1),
    4px -4px 4px rgba(100, 100, 100, .1),
    -4px 4px 4px rgba(100, 100, 100, .1),
    -4px -4px 4px rgba(100, 100, 100, .1);
}
.fadeout {
    position: relative;
    width: 100%;
    height: inherit;
    background: #fff;
}
#D_view .box-f li:last-child {
    margin-right: 0;
}
.box-f li .Img_t {
    margin-top: 30px;
    margin-bottom: 20px;
}
.Txt_p {
    font-weight: bold;
    font-size: 20px;
}
.color-2 {
    color: #434343;
}
.box-f li .box-arc {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    width: 280px;
    height: 74px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    line-height: 60px;
    cursor: pointer;
}
.box-arc:before {
    position: absolute;
    top: 0;
    left: 50%;
    z-index: -1;
    margin-left: -75%;
    width: 150%;
    height: 200%;
    border-radius: 50%;
    background-color: #f41200;
    content: '';
}
.color-3 {
    padding-top: 15px;
    color: #fff;
}
.fadein {
    position: absolute;
    /*text-align: justify;*/
    top: 130%;
    width: 100%;
    height: inherit;
    background: #f41200;
    text-align: center;
}
.fadein .txt_p1,
.fadein .Txt_p {
    color: #fff;
}
.fadein .Txt_p {
    display: inline-block;
    width: 230px;
    text-align: justify;
}
#D_solution {
    position: relative;
    height: 1160px;
    background: url('~@/assets/images/slbg.jpg') no-repeat center center;
    background-size: cover;
    text-align: center;
}
#D_solution .Txt_p {
    padding-top: 20px;
    /*display: inline-block;*/
    /*width: 970px;*/
    color: #434343;
}
.boost {
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 538px;
    height: 590px;
    background: url('~@/assets/images/WF1.png') no-repeat;
}
.Icon_click {
    margin-top: 520px;
    margin-left: 445px;
    cursor: pointer;
}
.hint {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: none;
    margin: 0 auto;
    width: 100%;
}
.hint .clearbtn {
    margin-top: 50px;
    margin-left: 1100px;
    cursor: pointer;
}

#case {
    position: relative;
    height: 820px;
    background: url('~@/assets/images/cBG.png') no-repeat center center;
    background-size: cover;
    text-align: center;
}
#case h2 {
    padding-top: 42px;
    color: #fff;
    font-weight: bold;
}
#case .txt_p1 {
    color: #fff;
}
.txt_p1 span {
    color: #fff45c;
}
.c_table {
    overflow: hidden;
    margin-top: 20px;
    margin-right: 50px;
    margin-bottom: 30px;
    margin-left: 50px;
}
.c_table li {
    float: left;
    margin: 0 auto;
    margin-right: 28px;
    width: 160px;
    height: 60px;
    background: #fff;
    text-align: center;
    font-size: 22px;
    line-height: 60px;
}
.c_table li:last-child {
    margin-right: 0;
}
.txt_p3 {
    padding-right: 50px;
    color: #fff;
    text-align: right;
    font-size: 16px;
}
a[data-fancybox=gallery] {
    display: block;
}

@media (max-width: 768px) {
    section {
        min-width: 100%;
        max-width: 100%;
    }
    .container {
        width: 100%;
    }
    h1 {
        font-size: 30px;
    }

    h2 {
        font-size: 26px;
    }

    h3 {
        font-size: 20px;
    }
    h4 {
        font-size: 18px;
    }
    h5 {
        font-weight: bold;
        font-size: 16px;
    }
    p {
        padding: 0 20px;
        font-size: 18px;
        line-height: 1.5;
    }
    .pc {
        display: none;
    }
    .m-mobile {
        display: block;
    }
    #banner {
        position: relative;
        height: 740px;
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
    }
    #banner .mImg_s {
        padding: 0 10px;
        padding-top: 170px;
    }
    #banner .Txt_p br,
    #D_view .txt_p1 br {
        display: none;
    }
    #banner .Txt_p {
        padding: 0 10px;
        padding-top: 20px;
    }
    #D_view {
        position: relative;
        height: 2205px;
        background: url('~@/assets/images/vievBGm.jpg') no-repeat center center;
        background-size: cover;
    }
    #D_view h2 br,
    #D_solution h2 br {
        display: block;
    }
    #D_view .txt_p1 {
        text-align: center;
    }
    #D_view .box-r {
        width: 280px;
        height: 60px;
    }
    #D_view .box-f li {
        float: none;
        overflow: hidden;
        margin: 0 auto;
        margin-bottom: 30px;
    }
    #D_view .box-f li:last-child {
        margin: 0 auto;
        margin-bottom: 30px;
    }
    #D_solution {
        position: relative;
        overflow: hidden;
        height: 1776px;
        background: url('~@/assets/images/slbgm.jpg') no-repeat center center;
        background-size: cover;
    }
    #D_solution .Txt_p br {
        display: none;
    }
    #D_solution .Txt_p {
        font-weight: normal;
        font-size: 18px;
    }
    .boost {
        position: relative;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 10px;
        width: 358px;
        height: 392px;
        background: url('~@/assets/images/mWF1.png') no-repeat center center;
    }
    .boost .Icon_click {
        position: absolute;
        right: 50%;
        bottom: 20px;
        margin: 0 auto;
        margin-right: -165px;
        width: 34px;
        height: 34px;
        cursor: pointer;
    }
    .hint {
        position: fixed;
    }
    .hint .clearbtn {
        display: inline-block;
        margin-top: 20px;
        margin-left: 300px;
        cursor: pointer;
    }
    #case {
        position: relative;
        height: 1720px;
        background: url('~@/assets/images/cBGm.png') no-repeat center center;
        background-size: cover;
    }
    #case .txt_p1 {
        padding-bottom: 30px;
    }
    .c_table {
        overflow: hidden;
        margin: 0 auto;
        width: 100%;
    }

    .c_table li {
        margin: 2% 4%;
        width: 42%;
        font-size: 18px;
    }
    .txt_p3 {
        padding-top: 15px;
        padding-right: 20px;
    }
}
</style>