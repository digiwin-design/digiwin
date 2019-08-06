<template>
    <div class="wrapper">
        <Header></Header>
        <MenuMask></MenuMask>
        <div class="main">
            <Desk></Desk>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import './assets/js/modernizr-custom';
import './assets/js/mobile-detect';
import './assets/js/mobile-detect-modernizr';
import Header from './components/Header.vue';
import MenuMask from './components/MenuMask.vue';
import Footer from './components/Footer.vue';
import Desk from './components/Desk.vue';

export default {
    name: 'app',
    components: {
        Header,
        MenuMask,
        Footer,
        Desk,
    },
    mounted() {
        this.$store.commit('setDevice', new MobileDetect(window.navigator.userAgent).mobile());
    },
}
</script>

<style lang="scss">
@import '@/assets/sass/common.scss';
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.main {
    position: relative;
    display: flex;
    min-width: 320px;
    font-size: 18px;
    line-height: 1.6;
    flex-grow: 1;
}
</style>
