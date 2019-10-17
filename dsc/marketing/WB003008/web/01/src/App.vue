<template>
    <div class="wrapper">
        <Header></Header>
        <MenuMask></MenuMask>
        <main>
            <HeaderForm></HeaderForm>
            <div class="container">
                <h1>Hello World</h1>
            </div>
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
import HeaderForm from '@/components/HeaderForm.vue';
import Contact from '@/components/Contact.vue';

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
</style>
