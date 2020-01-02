<template>
    <div class="MA">
        <div class="hero" :style="{ backgroundImage: isMobile ? 'url(images/MA/hero-s.jpg)' : 'url(images/MA/hero.jpg)' }">
            <div class="logo">
                <div>
                    <picture>
                        <source media="(min-width: 769px)" :srcset="require('./hero-logo.png')">
                        <img :src="require('./hero-logo-s.png')" alt="2020儲備鼎尖數位人才養成計畫">
                    </picture>
                </div>
            </div>
            <h1>
                <div class="container">
                    <picture>
                        <source media="(min-width: 769px)" :srcset="require('./hero-title.png')">
                        <img :src="require('./hero-title-s.png')" alt="2020儲備鼎尖數位人才養成計畫">
                    </picture>
                </div>
            </h1>
        </div>

        <article class="section1">
            <div class="section1-1"></div>
            <div class="section1-2"><div></div></div>
        </article>
    </div>
</template>

<script>
export default {
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
    },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/common/variable';
@import '~@/assets/sass/common/helpers';
.hero {
    position: relative;
    height: 757px;
    background-position: 50% 0;
    background-size: cover;
    background-repeat: no-repeat;
    @media (min-width: $mobile-width + 1) {
        padding-bottom: percentage(1080 / 768);
        height: 0;
    }
    @media (min-width: $tablet-width + 1) {
        padding-bottom: percentage(1080 / 1920);
        background-size: 100% auto;
    }
    .logo {
        position: absolute;
        top: 25px;
        right: 15px;
        width: 171px;
        @media (min-width: $mobile-width + 1) {
            right: 20px;
            width: percentage(230 / 768);
        }
        @media (min-width: $tablet-width + 1) {
            right: 15.1%;
            width: percentage(290 / 1920);
        }
        > div {
            @include rwdElement(290, 42);
        }
    }
    h1 {
        position: absolute;
        top: 100px;
        right: 35px;
        left: 35px;
        @media (min-width: $mobile-width + 1) {
            top: 14.2%;
            right: auto;
            left: 50%;
            width: percentage(517 / 768);
            transform: translateX(-50%);
        }
        @media (min-width: $tablet-width + 1) {
            top: 28.7%;
            right: 16.9%;
            left: auto;
            width: percentage(645 / 1920);
            transform: translateX(0);
        }
        > div {
            @include rwdElement(517, 248) {
                @media (min-width: $tablet-width + 1) {
                    padding-bottom: percentage(297 / 645);
                }
            }
        }
        picture {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}
.section1 {
    position: relative;
    background-color: #ccc;
    &-1 {
        @include bg('section1-bg1-s.jpg');
        height: 640px;
        @media (min-width: $tablet-width + 1) {
            padding-bottom: percentage(834 / 1920);
            height: 0;
            background-image: url('section1-bg1.jpg');
            background-size: 100% auto;
        }
    }
    &-2 {
        @include bg('section1-bg2-s.jpg');
        height: 620px;
        @media (min-width: $tablet-width + 1) {
            position: absolute;
            right: 0;
            bottom: 0;
            width: percentage(1038 / 1920);
            height: auto;
            background-image: none;
            > div {
                padding-bottom: percentage(620 / 1038);
                background-image: url('section1-bg2.png');
                background-size: 100% auto;
            }
        }
    }
}
</style>
