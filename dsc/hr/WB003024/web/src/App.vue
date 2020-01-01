<template>
    <div>
        <div class="wrapper">
            <Header></Header>
            <MenuMask></MenuMask>
            <main>
                <div id="nav2">
                  <router-link to="/">進入頁</router-link> |
                  <router-link to="/ma">儲備MA招募</router-link> |
                  <router-link to="/school">校園招募</router-link> |
                  <a href="javascript:;">社會招募</a>
                </div>
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
        result() {
            return this.$store.state.result;
        },
        loading() {
            return this.$store.state.loading;
        },
    },
    watch: {
        result() {
            this.preloadImg([])
            .then(() => {
                setTimeout(() => {
                    this.$store.commit('setLoading', false);
                }, 500);
            });
        },
        loading() {
            this.$nextTick(() => this.scrollToAnchor());
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
    transition: opacity 0.5s;
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
    min-width: 360px;
    flex-grow: 1;
}
.container {
    margin: 0 auto;
    padding: 0 15px;
    max-width: 1200px;
    @media (min-width: 361px) {
        padding-right: 20px;
        padding-left: 20px;
    }
    @media (min-width: 1200px) {
        padding-right: 0;
        padding-left: 0;
    }
}
#nav2 {
    padding: 30px;
    a {
        color: #2c3e50;
        font-weight: bold;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
