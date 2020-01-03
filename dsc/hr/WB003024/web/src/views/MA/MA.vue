<template>
    <div v-if="!loading">
        <div class="hero" :style="{ backgroundImage: isMobile ? 'url(images/MA/hero-s.jpg)' : 'url(images/MA/hero.jpg)' }">
            <div class="logo">
                <div>
                    <picture>
                        <source media="(min-width: 769px)" :srcset="require('./hero-logo.png')">
                        <img :src="require('./hero-logo-s.png')" alt="DigiWIN Your Future">
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
            <a href class="arrow" @click.prevent="scrollToAnchor('#section1')"></a>
        </div>

        <article id="section1" class="section1">
            <section-title
                title="<strong>賦能</strong>，夢想更接近"
                desc="人才養成與發展是鼎新一直以的堅持，與我們一起引領企業數字化轉型"
                :padding-top="isMobile ? '55px' : '80px'"
                class="container"
            ></section-title>
            
            <Section1Content></Section1Content>
        </article>

        <article class="section2"></article>
    </div>
</template>

<script>
import mixins from '@/mixins';
import SectionTitle from '@/components/SectionTitle.vue';
import Section1Content from '@/components/MA/Section1Content/Section1Content.vue';

export default {
    name: 'ma',
    mixins: [mixins],
    components: {
        SectionTitle,
        Section1Content,
    },
    methods: {
        loadImg() {
            let images = [
                "images/MA/hero-s.jpg",
                "images/MA/hero.jpg"
            ];
            this.preloadImg(images)
                .then(() => {
                    setTimeout(() => {
                        this.$store.commit('setLoading', false);
                    }, 500);
                });
        }
    },
    created() {
        if (!this.$store.state.loading) {
            this.$store.commit('setLoading', true);
        }
        this.loadImg();
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
    .arrow {
        position: absolute;
        bottom: 70px;
        left: 50%;
        width: 44px;
        height: 44px;
        transform: translateX(-50%);
        @media (min-width: $tablet-width + 1) {
            bottom: 3.7%;
        }
        &::before,
        &::after {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 15px;
            height: 15px;
            border-bottom: 2px solid #fff;
            border-left: 2px solid #fff;
            content: '';
            @media (min-width: $tablet-width + 1) {
                width: 20px;
                height: 20px;
            }
        }
        &::before {
            transform: translate(-50%, calc(-50% - 10px)) rotate(-45deg);
        }
        &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }
}
.section1 {
    background-color: #e2e9ef;
    .sectionTitle {
        position: absolute;
        z-index: 1;
        width: 100%;
        @media (min-width: $tablet-width + 1) {
            position: relative;
        }
    }
}
.section2 {
    
}
</style>
