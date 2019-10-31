<template>
    <div class="main-content">
        <!--banner-->
        <section id="banner" :style="{ backgroundImage: `url(${publicPath + bannerImgSrc})` }">
            <div class="container">
                <hgroup>
                    <h1>鼎捷软件DigiwinSoft</h1>
                    <h2>亚太地区制造业管理系统领导品牌</h2>
                </hgroup>
                <p class="Txt_p">最适合企业在东南亚发展使用的全方位ERP产品，符合在地税制法规，满足制造业行业特性，依企业各阶段发展规模，提供最优质、高效益的东南亚在地化服务(越南、马来西亚、泰国皆有营业据点)。</p>
                <HeaderForm></HeaderForm>
            </div>
        </section>
        <!--视角-->
        <section id="D_view">
            <div class="container">
                <h2>以企业经营为视角，<br />让管理变轻松</h2>
                <img src="@/assets/images/line.png" alt class="Img_h" />
                <p class="txt_p1">鼎捷淬炼大中华五万家企业辅导经验，<br />融合出在地化的行业解决方案，<br>让您挥别过去的管理困扰，快速实践信息化，发挥应用价值。</p>
                <div class="box-r">
                    <p class="txt_p1 color-1">您是否遇到以下难题…</p>
                </div>
                <ul class="box-f">
                    <li class="js-box-list">
                        <div class="fadeout">
                            <img src="@/assets/images/icon1_off.png" alt class="Img_t" />
                            <p class="txt_p1">人工作业效率差</p>
                            <p class="Txt_p color-2">人工EXCEL报表效率差<br />作业权限不分赏罚难辨<br />跨部沟通难无数据依据</p>
                            <div class="box-arc">
                                <p class="txt_p1 color-3">软件应用效益</p>
                                <img src="@/assets/images/arrow-angle.png" alt />
                            </div>
                        </div>

                        <div class="fadein">
                            <img src="@/assets/images/icon1_on.png" alt class="Img_t" />
                            <p class="txt_p1">软件应用效益</p>
                            <p class="Txt_p">改善各部门管理问题，固化作业流程，降低管理成本，提高营运利润。</p>
                        </div>
                    </li>
                    <li class="js-box-list">
                        <div class="fadeout">
                            <img src="@/assets/images/icon2_off.png" alt class="Img_t" />
                            <p class="txt_p1">经营状况不透明</p>
                            <p class="Txt_p color-2">想提快结帐天数？<br />想提高生产效能？<br />想降低库存金额？</p>
                            <div class="box-arc">
                                <p class="txt_p1 color-3">顾问咨询辅导</p>
                                <img src="@/assets/images/arrow-angle.png" alt />
                            </div>
                        </div>
                        <div class="fadein">
                            <img src="@/assets/images/icon2_on.png" alt class="Img_t" />
                            <p class="txt_p1">顾问咨询辅导</p>
                            <p class="Txt_p">根据企业发展战略及营经管理指标，籍由资讯化提升企业核心竞争能力。</p>
                        </div>
                    </li>
                    <li class="js-box-list">
                        <div class="fadeout">
                            <img src="@/assets/images/icon3_off.png" alt class="Img_t" />
                            <p class="txt_p1">语言、文化差异大</p>
                            <p class="Txt_p color-2">税制法令因应，怎么办？<br />系统有越文.泰文介面吗？<br />有没有在地辅导团队？</p>
                            <div class="box-arc">
                                <p class="txt_p1 color-3">在地团队支援</p>
                                <img src="@/assets/images/arrow-angle.png" alt />
                            </div>
                        </div>
                        <div class="fadein">
                            <img src="@/assets/images/icon3_on.png" alt class="Img_t" />
                            <p class="txt_p1">在地团队支援</p>
                            <p class="Txt_p">符合当地税务法令与国际关务规定、多语系架构(越南.简繁中文.泰文.英文)的在地化应用模组。</p>
                        </div>
                    </li>
                    <li class="js-box-list">
                        <div class="fadeout">
                            <img src="@/assets/images/icon4_off.png" alt class="Img_t" />
                            <p class="txt_p1">管理跟不上成长速度</p>
                            <p class="Txt_p color-2">可以只管进销存就好吗？<br />公司愈变愈大系统能负荷？</p>
                            <div class="box-arc">
                                <p class="txt_p1 color-3">永续精进管理</p>
                                <img src="@/assets/images/arrow-angle.png" alt />
                            </div>
                        </div>
                        <div class="fadein">
                            <img src="@/assets/images/icon4_on.png" alt class="Img_t" />
                            <p class="txt_p1">永续精进管理</p>
                            <p class="Txt_p">满足企业发展速度与时俱进的管理需求与营运模式，提供软硬体整合的价值服务。</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section id="D_solution">
            <div class="container">
                <h2>最多企业的聪明选择，<br />东南亚在地化管理就选鼎捷！</h2>
                <img src="@/assets/images/line.png" alt class="Img_h" />
                <p class="txt_p1">Workflow ERP符合在地税制法规，满足制造业行业特性</p>
                <p class="Txt_p">提供进销存管理、财务管理(会计总帐与应收应付管理)、生产管理、订单管理、采购管理、<br />物料需求管理(MRP/LRP)、产品结构管理(BOM表)…等，配合智能流程管理系统IMS、电子表单与行业知识<br />包，更能结合当地法令(电子发票、关务税制)，协助企业快速建置完整的企业资源规划评估。</p>
                <div
                    style="height: 736px; overflow: hidden; margin: 0 auto;margin-top: 25px;"
                    class="pc"
                    v-if="!isMobile"
                >
                    <div class="fl" style="margin-left: 50px;">
                        <img src="@/assets/images/WF_iGP_logo.png" alt />
                        <a data-fancybox="gallery" href="WF2.jpg">
                            <div class="boost">
                                <img src="@/assets/images/icon_magnifier.png" alt="系统架构图" class="Icon_click" />
                            </div>
                        </a>
                    </div>
                    <div class="fr" style="width: 50%">
                        <img src="@/assets/images/right.png" alt="ERP系统导入效益：企业标准流程固化、跨部沟通正确流畅、财务报表实时准确、减少人工作业误差、库存物料帐实一致、符合法规降低风险、提高生产制造产能、信息实时加速反应、提升数数管理决策" style="margin-top: 40px" />
                    </div>
                </div>
                <a href @click.prevent="clickHandler">
                    <img src="@/assets/images/btn_r.png" alt class="pc" style="margin: 0 auto;" />
                </a>
                <div class="m-mobile" v-if="isMobile">
                    <img src="@/assets/images/mWF_iGP_logo.png" alt style="margin-top:25px;" />
                    <a data-fancybox="gallery" href="WF2.jpg">
                        <div class="boost">
                            <img src="@/assets/images/icon_magnifierm.png" alt="系统架构图" class="Icon_click" />
                        </div>
                    </a>
                    <img src="@/assets/images/rightm.png" alt="ERP系统导入效益：企业标准流程固化、跨部沟通正确流畅、财务报表实时准确、减少人工作业误差、库存物料帐实一致、符合法规降低风险、提高生产制造产能、信息实时加速反应、提升数数管理决策" style="margin-top: 20px; margin-bottom: 30px;" />
                    <div class="hint">
                        <p class="clearbtn">
                            <img src="@/assets/images/clear-button.png" alt />
                        </p>
                        <img src="@/assets/images/WF2.jpg" alt />
                    </div>
                </div>
                <a href @click.prevent="clickHandler">
                    <img src="@/assets/images/btn_rm.png" alt class="m-mobile" style="margin: 0 auto" />
                </a>
            </div>
        </section>
        <section id="case">
            <div class="container">
                <h2>我们的客户遍布ASEAN</h2>
                <img src="@/assets/images/line-w.png" alt class="Img_h" />
                <p class="txt_p1">鼎新.鼎捷的方案与服务覆盖80多个细分行业<br />超过5万家客户选择鼎新.鼎捷，其中有<span>300多家</span>企业<br>于东南亚接受鼎捷的在地服务</p>
                <ul class="c_table">
                    <li>第一精密</li>
                    <li>宏致精密</li>
                    <li>GSK</li>
                    <li>士林电机</li>
                    <li>伍氏</li>
                    <li>越南佑驿</li>
                </ul>
                <ul class="c_table">
                    <li>广隆电池</li>
                    <li>雅得电池</li>
                    <li>和庆电子(泰)</li>
                    <li>DANKA</li>
                    <li>大纶纺织</li>
                    <li>大升化工</li>
                </ul>
                <ul class="c_table">
                    <li>统一食品</li>
                    <li>金车食品</li>
                    <li>亿霖食品</li>
                    <li>越南IBO食品</li>
                    <li>瑞兴冷冻</li>
                    <li>普惠医工</li>
                </ul>
                <ul class="c_table">
                    <li>KOSSAN</li>
                    <li>Emerald</li>
                    <li>大洋涂料</li>
                    <li>德一涂料</li>
                    <li>政隆塑胶</li>
                    <li>南宝树脂</li>
                </ul>
                <ul class="c_table">
                    <li>凯胜家具</li>
                    <li>凯撒卫浴</li>
                    <li>协杨木业</li>
                    <li>Brain Thai(泰)</li>
                    <li>特升国际(马)</li>
                    <li>WEGMANS(马)</li>
                </ul>
                <ul class="c_table">
                    <li>越南钻石</li>
                    <li>鸿运模具</li>
                    <li>合益金属</li>
                    <li>振泰织带</li>
                    <li>RGT(马)</li>
                    <li>佳日建筑</li>
                </ul>
                <p class="txt_p3">※未特别标注为越南客户</p>
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
$tablet-width: 768px;
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
        @media (max-width: $tablet-width) {
            right: 10px;
            bottom: 30px;
            left: 10px;
            margin: auto;
        }
    }
    hgroup {
        padding-top: 190px;
        padding-left: 50px;
        color: #fff;
        @media (max-width: $tablet-width) {
            padding-left: 10px;
        }
    }
    h1, h2 {
        font-weight: bold;
        line-height: 1;
    }
    h1 {
        margin-bottom: 20px;
        font-size: 60px;
        @media (max-width: $tablet-width) {
            margin-bottom: 10px;
            font-size: 30px;
        }
    }
    h2 {
        font-size: 44px;
        @media (max-width: $tablet-width) {
            font-size: 30px;
            line-height: 1.2;
        }
    }
}
#banner .Img_s {
    padding-top: 200px;
    padding-left: 50px;
}
#banner .Txt_p {
    padding-top: 20px;
    padding-left: 50px;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    width: 720px;
    @media (max-width: $tablet-width) {
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
    background: url('~@/assets/images/WF1.jpg') no-repeat;
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

@media (max-width: $tablet-width) {
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
        padding-right: 10px;
        padding-left: 10px;
        padding-top: 10px;
        font-size: 18px;
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
        background: url('~@/assets/images/mWF1.jpg') no-repeat center center;
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