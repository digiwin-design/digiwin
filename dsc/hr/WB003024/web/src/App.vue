<template>
    <div>
        <div class="wrapper">
            <Header></Header>
            <MenuMask></MenuMask>
            <main>
                <router-view v-if="!loading" />
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
import Header from '@/components/Header.vue';
import MenuMask from '@/components/MenuMask.vue';
import Footer from '@/components/Footer.vue';
import Loading from '@/components/Loading.vue';

export default {
    name: 'app',
    components: {
        Header,
        MenuMask,
        Footer,
        Loading,
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        viewData() {
            return this.$store.getters.viewData;
        },
        loading() {
            return this.$store.state.loading;
        },
        routeName() {
            return this.$store.state.route.name;
        },
    },
    watch: {
        viewData(value) {
            if (!value) return;
            this.preloadImg(value.preloadImg)
                .then(() => {
                    setTimeout(() => {
                        this.$store.commit('setLoading', false);
                    }, 500);
                });
        },
        loading() {
            this.$nextTick(() => this.scrollToAnchor());
        },
        routeName() {
            this.$store.commit('setLoading', true);
        },
    },
    methods: {
        mediaSensor(minWidth) {
            let resizeWidth = (pMatchMedia) => this.$store.commit('setDeviceType', !pMatchMedia.matches);
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
        scrollToAnchor(behavior = 'smooth') {
            const target = document.querySelector(`#${this.$route.query.a}`);
            if (target) {
                let targetPos = target.getBoundingClientRect().top + window.pageYOffset;
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
    outline: 1px solid #0ff;
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
