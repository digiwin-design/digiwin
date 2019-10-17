<template>
    <div class="wrapper">
        <Header></Header>
        <MenuMask></MenuMask>
        <main>
            <HeaderForm></HeaderForm>
            <h1>Hello World</h1>
            <Contact source=""></Contact>
        </main>
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
import HeaderForm from './components/HeaderForm.vue';
import Contact from './components/Contact.vue';

export default {
    name: 'app',
    components: {
        Header,
        MenuMask,
        Footer,
        HeaderForm,
        Contact,
    },
    mounted() {
        this.$store.commit('setDevice', new MobileDetect(window.navigator.userAgent).mobile());
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
    min-width: 320px;
    flex-grow: 1;
}
</style>
