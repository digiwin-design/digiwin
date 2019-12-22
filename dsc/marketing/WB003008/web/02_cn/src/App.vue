<template>
    <div>
        <div class="wrapper">
            <Header></Header>
            <MenuMask></MenuMask>
            <main>
                <div class="hero" :style="{ backgroundImage: `url(${heroImgSrc})` }">
                    <div class="container">
                        <div class="hero__text">
                            <h1>企业出海・选鼎捷</h1>
                            <p>亚太地区制造业管理系统领导品牌<br>针对越南、泰国、马来西亚投资的新设企业、新建工厂提供一站式的专业服务，让版图发展在东南亚行稳致远。</p>
                        </div>
                        <HeaderForm></HeaderForm>
                    </div>
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
@import '@/assets/sass/reset.scss';
@import '@/assets/sass/common.scss';
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
    outline: 1px solid #f00;
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
    padding-top: 230px;
    height: 758px;
    @media (min-width: $tablet-width + 1) {
        padding-top: 0;
        height: 520px;
    }
    .container {
        display: flex;
        flex-direction: column;
        max-width: 380px;
        height: 100%;
        align-items: center;
        @media (min-width: $tablet-width + 1) {
            flex-direction: row;
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
</style>
