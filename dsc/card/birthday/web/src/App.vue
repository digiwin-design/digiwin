<template>
    <div class="wrapper">
        <div class="main">
            <div class="container">
                <h1>請憑直覺抽出一張卡，看您的生日幸運星降落在何處！</h1>
                <Desk></Desk>
            </div>
        </div>
    </div>
</template>

<script>
import './assets/js/modernizr-custom';
import './assets/js/mobile-detect';
import './assets/js/mobile-detect-modernizr';
import Desk from './components/Desk.vue';

let images = [];

export default {
    name: 'app',
    components: {
        Desk,
    },
    mounted() {
        this.$store.commit('setDevice', new MobileDetect(window.navigator.userAgent).mobile());

        // preload image                
        for (let i = 1; i <= 6; i++) {
            images[i] = new Image();
            images[i].src = 'images/popup-card'+ i + '.png';
        }
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
.main {
    display: flex;
    overflow: hidden;
    min-width: 320px;
    letter-spacing: getLetterSpacing(25);
    flex-grow: 1;
}
.container {
    margin: auto;
    padding: 36px 15px 15px;
    transform: translateX(6px);
}
h1 {
    margin-bottom: .5em;
    color: #381818;
    text-align: center;
    letter-spacing: getLetterSpacing(25);
    font-size: 28px;
    line-height: 1.3;
}
</style>
