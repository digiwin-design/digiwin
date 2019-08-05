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
        mediaSensor: _.throttle(function () {
            let mm = window.matchMedia("(min-width: 769px)");
            mm.addListener(this.resizeWidth);
            this.resizeWidth(mm);
        }, 100),
        resizeWidth(pMatchMedia) {
            let isMobile = pMatchMedia.matches ? false : true;
            this.$store.commit('updateDevice', isMobile);
            if (!isMobile) {
                this.$store.commit('toggleMask', false);
            }
        },
    },
    mounted() {
        window.addEventListener('resize', this.mediaSensor);
        this.mediaSensor();
        this.isMounted = true;
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.mediaSensor);
    }
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
