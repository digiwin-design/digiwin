<template>
    <transition name="fade">
        <div class="wrapper" v-show="isMounted">
            <Header/>
            <nuxt/>
            <MenuMask></MenuMask>
            <Footer/>
        </div>
    </transition>
</template>

<script>
import _ from 'lodash';
import Header from '~/components/Header.vue';
import MenuMask from '~/components/MenuMask.vue';
import Footer from '~/components/Footer.vue';
export default {
    components: {
        Header,
        MenuMask,
        Footer,
    },
    data() {
        return {
            isMounted: false,
        };
    },
    methods: {
        mediaSensor() {
            let mm = window.matchMedia("(min-width: 769px)");
            mm.addListener(this.resizeWidth);
            this.resizeWidth(mm);
        },
        resizeWidth(pMatchMedia) {
            let isMobile = pMatchMedia.matches ? false : true;
            this.$store.commit('updateDevice', isMobile);
            if (!isMobile) {
                this.$store.commit('toggleMask', false);
            }
        },
    },
    mounted() {
        this.$store.commit('setDevice', new MobileDetect(window.navigator.userAgent).mobile());
        this.mediaSensor();
        this.isMounted = true;
    },
};
</script>

<style scoped>
/* footer置底 */
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>

