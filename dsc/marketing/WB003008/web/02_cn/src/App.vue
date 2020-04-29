<template>
    <div>
        <div class="wrapper">
            <Header></Header>
            <MenuMask></MenuMask>
            <main>
                <div v-if="result">
                    <div class="hero" :style="{ backgroundImage: `url(${heroImgSrc})` }">
                        <div class="container">
                            <div class="hero__text">
                                <h1>企业出海・选鼎捷</h1>
                                <p>亚太地区制造业管理系统领导品牌<br>针对越南、泰国、马来西亚投资的新设企业、新建工厂提供一站式的专业服务，让版图发展在东南亚行稳致远。</p>
                            </div>
                            <!-- <HeaderForm></HeaderForm> -->
                        </div>
                    </div>

                    <article class="section1">
                        <SectionTitle class="container" :title="result.section1.sectionTitle.title" :desc="result.section1.sectionTitle.desc" :color="result.section1.sectionTitle.color"></SectionTitle>
                        <div class="boxs">
                            <HoverBox v-for="item in result.section1.hoverBox" :key="item.id">
                                <template slot="before">
                                    <div class="hoverBox__before">
                                        <ul class="hoverBox__before-title">
                                            <li v-for="text in item.before.title" :key="text">{{text}}</li>
                                        </ul>
                                        <p class="hoverBox__before-content" v-for="text in item.before.content" :key="text" v-html="text"></p>
                                    </div>
                                    <div class="hoverBox__bottom">
                                        <p>{{item.bottom}}</p>
                                    </div>
                                </template>
                                <template slot="hover">
                                    <p class="hoverBox__hover-content" v-html="item.hover.content"></p>
                                    <a href class="hoverBox__hover-link" @click.prevent="scrollToAnchor(item.hover.link.url)">{{item.hover.link.text}}</a>
                                </template>
                            </HoverBox>
                        </div>
                        <p class="container bottom">鼎捷以越南、泰国、马来西亚为主要服务据点外，亦可延伸服务区域：缅甸、柬埔寨、菲律宾…等国。</p>
                    </article>

                    <article class="section2">
                        <SectionTitle class="container" :title="result.section2.sectionTitle.title" :desc="result.section2.sectionTitle.desc" :color="result.section2.sectionTitle.color"></SectionTitle>
                        <Collapse></Collapse>
                        <div class="container">
                            <a href class="contact" @click.prevent="scrollToAnchor('#contact')">立即咨询</a>
                        </div>
                    </article>

                    <article class="section3">
                        <div class="container">
                            <SectionTitle :title="result.section3.sectionTitle.title" :desc="result.section3.sectionTitle.desc" :color="result.section3.sectionTitle.color"></SectionTitle>
                            <div class="row">
                                <div class="col">
                                    <div class="percent">14.7%</div>
                                    <p>智能制造ERP产品市占率国内领先</p>
                                    <p>赛迪网《2017年中国智能制造产业ERP软件产品深度研究报告》显示，鼎捷在中国市场占有率高居本土第一。</p>
                                    <figure>
                                        <img src="@/assets/images/section3-chart1.png" alt="">
                                        <figcaption>数据来源:CCIDnet 2018 .04</figcaption>
                                    </figure>
                                </div>
                                <div class="col">
                                    <img src="@/assets/images/section3-chart2.png" alt="">
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <Contact source=""></Contact>
            </main>
            <Footer></Footer>
            <Ad :info="adData" v-if="adData"></Ad>
        </div>
        <!-- <loading :loading="loading"></loading> -->
    </div>
</template>

<script>
import '@/assets/vendor/modernizr-custom';
import '@/assets/vendor/mobile-detect';
import '@/assets/vendor/mobile-detect-modernizr';
import Header from '@/components/Header.vue';
import MenuMask from '@/components/MenuMask.vue';
import Footer from '@/components/Footer.vue';
import Loading from '@/components/Loading.vue';
import Ad from '@/components/Ad.vue';
import Contact from '@/components/Contact.vue';
import HeaderForm from '@/components/HeaderForm.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import HoverBox from '@/components/HoverBox.vue';
import Collapse from '@/components/Collapse.vue';

export default {
    name: 'app',
    components: {
        Header,
        MenuMask,
        Footer,
        Loading,
        Ad,
        Contact,
        HeaderForm,
        SectionTitle,
        HoverBox,
        Collapse,
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        result() {
            return this.$store.state.result;
        },
        adData() {
            return this.$store.state.adData;
        },
        loading() {
            return this.$store.state.loading;
        },
        heroImgSrc() {
            return this.isMobile ? 'images/hero-bg-s.jpg' : 'images/hero-bg.jpg';
        },
    },
    watch: {
        // result() {
        //     this.preloadImg([])
        //     .then(() => this.$store.commit('updateLoading', false));
        // },
        loading() {
            this.$nextTick(() => this.scrollToAnchor(location.hash));
        },
    },
    methods: {
        mediaSensor(minWidth) {
            let resizeWidth = (pMatchMedia) => this.$store.commit('updateDevice', !pMatchMedia.matches);
            let mm = window.matchMedia(`(min-width: ${minWidth + 1}px)`);
            mm.addListener(resizeWidth);
            resizeWidth(mm);
        },
        preloadImg(imgs) {
            return new Promise(resolve => {
                if (!imgs.length) resolve();
                let loaded = 0;
                for (let i = 0; i < imgs.length; i++) {
                    const element = imgs[i];
                    let img = document.createElement('IMG');
                    img.src = element;
                    img.onload = () => {
                        loaded++;
                        if (loaded === imgs.length) {
                            resolve();
                        }
                    };
                }
            });
        },
        scrollToAnchor(targetId, behavior = 'smooth') {
            if (targetId) {
                let targetPos = document.querySelector(targetId).getBoundingClientRect().top + window.pageYOffset;
                if (behavior) {
                    window.scroll({ top: targetPos, left: 0, behavior });
                }
                else {
                    window.scroll({ top: targetPos, left: 0 });
                }
            }
        },
    },
    created() {
        this.$store.dispatch('getData');
        this.$store.dispatch('getAdData');
    },
    mounted() {
        this.$store.commit('setDevice', new MobileDetect(window.navigator.userAgent).mobile());
        this.mediaSensor(768);
    },
}
</script>

<style lang="scss">
@import '@/assets/sass/reset';
@import '@/assets/sass/common';
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main {
    min-width: 360px;
    flex-grow: 1;
}
.container {
    margin: 0 auto;
    padding: 0 10px;
    max-width: 1200px;
    // outline: 1px solid #f00;
    @media (min-width: 361px) {
        padding-right: 20px;
        padding-left: 20px;
    }
    @media (min-width: 1200px) {
        padding-right: 50px;
        padding-left: 50px;
    }
}
.hero {
    height: 758px;
    @media (min-width: $tablet-width + 1) {
        height: 520px;
    }
    .container {
        display: flex;
        flex-direction: column;
        padding-bottom: 42px;
        max-width: 380px;
        height: 100%;
        align-items: center;
        justify-content: flex-end;
        @media (min-width: $tablet-width + 1) {
            flex-direction: row;
            padding-bottom: 0;
            max-width: $content-width;
            justify-content: space-between;
        }
    }
    &__text {
        margin-bottom: 20px;
        color: #fff;
        @media (min-width: $tablet-width + 1) {
            margin-right: 1em;
            margin-bottom: 0;
            width: 500px;
        }
        h1 {
            letter-spacing: getLetterSpacing(25);
            font-weight: bold;
            font-size: 30px;
            @media (min-width: $tablet-width + 1) {
                font-size: 60px;
            }
        }
        p {
            margin-top: .5em;
            color: #fff;
            font-size: 20px;
            line-height: 30px;
            @media (min-width: $tablet-width + 1) {
                margin-top: 1em;
            }
        }
    }
}
.section1 {
    padding-bottom: 55px;
    background-color: #f2f2f2;
    .boxs {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: $content-width) {
            flex-direction: row;
            justify-content: center;
        }
    }
    .hoverBox + .hoverBox {
        margin-top: 10px;
        @media (min-width: $content-width) {
            margin-top: 0;
            margin-left: 13px;
        }
    }
    .bottom {
        display: none;
        @media (min-width: $content-width) {
            display: block;
            margin-top: 30px;
            font-size: 24px;
        }
    }
}
.section2 {
    @include bg('~@/assets/images/section2-bg-s.jpg');
    padding-bottom: 55px;
    @media (min-width: $tablet-width + 1) {
        background-image: url('~@/assets/images/section2-bg.jpg');
    }
    .sectionTitle p {
        color: #fff;
        @media (min-width: $content-width + 1) {
            text-align: center;
        }
    }
    .contact {
        display: flex;
        margin: 30px auto 0;
        max-width: 530px;
        height: 80px;
        border-radius: 10px;
        background-color: $text-danger;
        box-shadow: 0 5px #950f05;
        color: #fff;
        font-size: 30px;
        justify-content: center;
        align-items: center;
        @media (min-width: $tablet-width + 1) {
            margin-top: 56px;
        }
        &::after {
            margin-left: 10px;
            width: 18px;
            height: 18px;
            border-bottom: 5px solid #fff;
            border-left: 5px solid #fff;
            content: '';
            transform: scaleX(-1) rotate(45deg);
        }
        &:active {
            box-shadow: none;
            transform: translateY(5px);
        }
    }
}
.section3 {
    padding-bottom: 55px;
    background-color: #eeefef;
    .sectionTitle p {
        @media (min-width: $content-width + 1) {
            text-align: center;
        }
    }
    .row {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 430px;
        align-items: center;
        @media (min-width: $tablet-width + 1) {
            flex-direction: row;
            max-width: 960px;
        }
    }
    .col {
        &:nth-of-type(1) {
            .percent {
                color: #dc3246;
                font-weight: bold;
                font-size: 66px;
            }
            p {
                font-size: 20px;
                &:nth-of-type(1) {
                    margin-top: .5em;
                    font-weight: bold;
                }
                &:nth-of-type(2) {
                    margin-top: .5em;
                    margin-bottom: .5em;
                    line-height: 1.75;
                }
            }
            figcaption {
                margin-top: 15px;
                text-align: center;
                font-size: 14px;
            }
        }
        &:nth-of-type(2) {
            margin-top: 10px;
            @media (min-width: $tablet-width + 1) {
                margin-top: 0;
                margin-left: percentage(60 / 960);
            }
        }
    }
}
</style>
