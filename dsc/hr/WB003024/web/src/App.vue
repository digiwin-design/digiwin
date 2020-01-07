<template>
    <div>
        <div class="wrapper">
            <Header></Header>
            <MenuMask></MenuMask>
            <main>
                <router-view/>
            </main>
            <Footer></Footer>
        </div>
        <loading :loading="loading"></loading>
    </div>
</template>

<script>
import '@/assets/vendor/modernizr-custom';
import '@/assets/vendor/mobile-detect';
import '@/assets/vendor/mobile-detect-modernizr';
import mixins from '@/mixins';
import Header from '@/components/Header.vue';
import MenuMask from '@/components/MenuMask.vue';
import Footer from '@/components/Footer.vue';
import Loading from '@/components/Loading.vue';

export default {
    name: 'app',
    mixins: [mixins],
    components: {
        Header,
        MenuMask,
        Footer,
        Loading,
    },
    watch: {
        loading(value) {
            if (!value) {
                this.$nextTick(() => this.scrollToAnchor(`#${this.$route.query.a}`));
            }
        },
    },
    methods: {
        mediaSensor(minWidth) {
            let resizeWidth = (pMatchMedia) => this.$store.commit('setDeviceType', !pMatchMedia.matches);
            let mm = window.matchMedia(`(min-width: ${minWidth + 1}px)`);
            mm.addListener(resizeWidth);
            resizeWidth(mm);
        },
        mediaSensor2(minWidth) {
            let resizeWidth = (pMatchMedia) => this.$store.commit('setDeviceType2', !pMatchMedia.matches);
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
        this.mediaSensor2(1499);
    },
}
</script>

<style lang="scss">
@import '@/assets/sass/reset.scss';
@import '@/assets/sass/common.scss';

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main {
    margin: 0 auto;
    min-width: $min-width;
    max-width: $max-width;
    width: 100%;
    flex-grow: 1;
}
.container {
    // outline: 1px solid #0ff;
    margin: 0 auto;
    padding: 0 15px;
    max-width: $content-width;
    @media (min-width: $min-width + 1) {
        padding-right: 20px;
        padding-left: 20px;
    }
    @media (min-width: $content-width) {
        padding-right: 0;
        padding-left: 0;
    }
}
</style>
