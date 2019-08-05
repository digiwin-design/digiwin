<template>
    <transition name="fade">
        <div class="wrapper" v-show="isMounted">
            <Header/>
            <nuxt/>
            <MenuMask></MenuMask>
        </div>
    </transition>
</template>

<script>
import _ from 'lodash';
import Header from '~/components/Header.vue';
import MenuMask from '~/components/MenuMask.vue';
export default {
    components: {
        Header,
        MenuMask,
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
        this.$store.commit('setDevice', new MobileDetect(window.navigator.userAgent).mobile());
        this.mediaSensor();
        this.isMounted = true;
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.mediaSensor);
    }
};
</script>
