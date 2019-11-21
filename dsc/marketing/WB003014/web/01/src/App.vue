<template>
    <div class="wrapper">
        <Header></Header>
        <MenuMask></MenuMask>
        <main :style="mainBgStyle">
            <div class="container">
                <div class="hero">
                    <h1><img src="images/logo-w.png" alt="Digiwin TV">鼎新線上活動</h1>
                    <p>研討會參會新選擇<br>不出門也能了解產業脈動與最新趨勢</p>
                    <a href="https://www.digiwin.com/tw/zlsq.html?id=2069" target="_blank"><i class="fa fa-check-square-o" aria-hidden="true"></i>訂閱活動消息</a>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import '@/assets/vendor/modernizr-custom';
import '@/assets/vendor/mobile-detect';
import '@/assets/vendor/mobile-detect-modernizr';
import Header from '@/components/Header.vue';
import MenuMask from '@/components/MenuMask.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'app',
    components: {
        Header,
        MenuMask,
        Footer,
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        result() {
            return this.$store.state.result;
        },
        mainBgStyle() {
            let url = this.isMobile ? 'images/main-bg-s.png' : 'images/main-bg.png';
            return { 'background-image': `url(${url})` };
        }
    },
    methods: {
        mediaSensor(minWidth) {
            let resizeWidth = (pMatchMedia) => this.$store.commit('updateDevice', !pMatchMedia.matches);
            let mm = window.matchMedia(`(min-width: ${minWidth + 1}px)`);
            mm.addListener(resizeWidth);
            resizeWidth(mm);
        },
    },
    created() {
        this.$store.dispatch('getData');
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
    background-position: 50% 0;
    background-repeat: no-repeat;
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
        padding-right: 0;
        padding-left: 0;
    }
}
.hero {
    padding-top: 207px;
    padding-bottom: 60px;
    @media (min-width: $tablet-width + 1) {
        padding: 100px 50px 70px;
    }
    h1 {
        color: #fff;
        letter-spacing: getLetterSpacing(30);
        font-weight: bold;
        font-size: 40px;
        @media (min-width: $tablet-width + 1) {
            font-size: 48px;
        }
        img {
            display: block;
            @media (min-width: $tablet-width + 1) {
                width: 290px;
            }
        }
    }
    p {
        margin: 1em 0;
        color: #ffe08b;
        letter-spacing: getLetterSpacing(10);
        font-weight: bold;
        font-size: 21px;
        line-height: 32px;
        @media (min-width: $tablet-width + 1) {
            font-size: 30px;
            line-height: 42px;
        }
    }
    a {
        display: flex;
        height: 63px;
        border-radius: 5px;
        background-color: #f96823;
        color: #fff;
        letter-spacing: getLetterSpacing(10);
        font-weight: bold;
        font-size: 26px;
        justify-content: center;
        align-items: center;
        @media (min-width: $tablet-width + 1) {
            width: 320px;
            height: 80px;
            font-size: 32px;
        }
        i {
            margin-right: 10px;
        }
    }
}
</style>
