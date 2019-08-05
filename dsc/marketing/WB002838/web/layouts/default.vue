<template>
    <transition name="fade">
        <div class="wrapper" v-show="result">
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
    head: {
        script: [
            { src: `${process.env.BASE_URL}public/vendor/eform/xcConfirm.js`, defer: 'defer' },
        ],
        link: [
            { rel: 'stylesheet', href: `${process.env.BASE_URL}public/vendor/font-awesome/css/font-awesome.min.css` },
            { rel: 'stylesheet', href: `${process.env.BASE_URL}public/vendor/eform/xcConfirm.css` }
        ]
    },
    components: {
        Header,
        MenuMask,
        Footer,
    },
    computed: {
        result() {
            return this.$store.state.result;
        }
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
    },
};
</script>