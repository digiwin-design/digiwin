<template>
    <div class="wrapper">
        <Header></Header>
        <MenuMask></MenuMask>
        <main>
            <MainContent></MainContent>
            <Contact source=""></Contact>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import '@/assets/vendor/modernizr-custom';
import '@/assets/vendor/mobile-detect';
import '@/assets/vendor/mobile-detect-modernizr';
import Header from '@/components/Header.vue';
import MenuMask from '@/components/MenuMask.vue';
import Footer from '@/components/Footer.vue';
import Contact from '@/components/Contact.vue';
import MainContent from '@/components/MainContent.vue';

export default {
    name: 'app',
    components: {
        Header,
        MenuMask,
        Footer,
        Contact,
        MainContent,
    },
    mounted() {
        this.$store.commit('setDevice', new MobileDetect(window.navigator.userAgent).mobile());
    },
}
</script>

<style lang="scss">
@import '@/assets/sass/reset.scss';
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main {
    min-width: 360px;
    flex-grow: 1;
}
</style>
