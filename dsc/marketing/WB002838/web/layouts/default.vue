<template>
    <div class="wrapper">
        <Header/>
        <nuxt/>
        <MenuMask></MenuMask>
        <Footer/>
    </div>
</template>

<script>
import _ from 'lodash';
import Header from '~/components/Header.vue';
import MenuMask from '~/components/MenuMask.vue';
import Footer from '~/components/Footer.vue';

export default {
    head: {
        link: [
            { rel: 'stylesheet', href: `${process.env.BASE_URL}public/vendor/font-awesome/css/font-awesome.min.css` },
            { rel: 'stylesheet', href: `${process.env.BASE_URL}public/vendor/eform/xcConfirm.css` },
        ],
        script: [
            { src: `${process.env.BASE_URL}public/vendor/eform/xcConfirm.js`, defer: 'defer' },
        ],
    },
    components: {
        Header,
        MenuMask,
        Footer,
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
};
</script>