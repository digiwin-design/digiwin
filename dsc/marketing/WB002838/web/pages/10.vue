<template>
    <main :style="getBgStyle('main-bg')">
        <transition name="fade">
            <div v-if="isReady">
                <div class="section1">
                    <div class="container">
                        <div class="hero">
                            <h1><img src="public/images/10/main-title.png" alt="新零售數據賦能 做對的事"></h1>
                            <div class="hero__link">
                                <a href="#contact" class="js-nav">預約專人諮詢</a>
                                <a href="/tw/zlsq.html?id=2059" target="_blank"><div>線上觀看<strong>【鼎新新零售發佈會】</strong><br>立即預約</div></a>
                            </div>
                        </div>
                    </div>
                </div>
                <article class="section2">
                    <div class="container"></div>
                </article>
                <article class="section3">
                    <div class="container"></div>
                </article>
                <!-- <Contact></Contact> -->
            </div>
            <Loading v-else></Loading>
        </transition>
    </main>
</template>

<script>
import Contact from '~/components/10/Contact';
import Loading from '~/components/10/Loading.vue';

export default {
    head: {
        title: '標題',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: '描述'
            }
        ],
    },
    components: {
        Contact,
        Loading,
    },
    data() {
        return {
            isReady: false,
        }
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        isMediumWidth() {
            return this.$store.state.isMediumWidth;
        },
        result() {
            return this.$store.state.result && this.$store.state.result['10'];
        },
    },
    methods: {
        preloadImg() {
            let loaded = 0;
            let images = [
                'public/images/10/main-bg.jpg',
                'public/images/10/main-bg-s.jpg',
                'public/images/10/main-title.png',
            ];
            images.forEach(img => {
                let image = new Image();
                image.src = img;
                image.onload = () => {
                    loaded++;
                    if (loaded === images.length) {
                        this.isReady = true;
                    }
                };
            });
        },
        getBgStyle(fileName) {
            let url = this.isMediumWidth ? `public/images/10/${fileName}-s.jpg` : `public/images/10/${fileName}.jpg`;
            return { 'background-image': `url(${url})` };
        }
    },
    mounted() {
        this.preloadImg();
    },
};
</script>

<style lang="scss">
@import '~assets/sass/common';
$content-width: 1100px;

main {
    background-position: 50% 0;
    background-repeat: no-repeat;
}
.container {
    padding-right: 10px;
    padding-left: 10px;
    height: 100%;
    outline: 1px solid #f00;
    @media (min-width: $content-width) {
        padding-right: 50px;
        padding-left: 50px;
    }
}

// debug
// .section1 {
//     height: 2400px;
//     @media (min-width: $content-width + 1) {
//         height: 1700px;
//     }
// }
// .section3 {
//     height: 3087px;
//     @media (min-width: $content-width + 1) {
//         height: 2260px;
//     }
// }

.section1 {
    padding-top: 170px;
    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        &__link {
            display: flex;
            flex-direction: column;
            margin-top: 32px;
            width: 100%;
            align-items: center;
            @media (min-width: $content-width + 1) {
                flex-direction: row;
                margin-top: 44px;
                justify-content: center;
            }
            a {
                display: flex;
                max-width: 370px;
                width: 100%;
                height: 86px;
                border: 2px solid #fff;
                border-radius: 5px;
                color: #fff;
                text-align: center;
                font-weight: bold;
                font-size: 26px;
                justify-content: center;
                align-items: center;
                &:nth-of-type(1) {
                    background-color: #5d51cb;
                }
                &:nth-of-type(2) {
                    margin-top: 20px;
                    background-color: #ad0a89;
                    line-height: 1.3;
                    @media (min-width: $content-width + 1) {
                        margin-top: 0;
                        margin-left: 42px;
                    }
                    > div {
                        position: relative;
                        top: 2px;
                        &::first-line {
                            font-size: 22px;
                        }
                    }
                    strong {
                        color: #ffeb9e;
                    }
                }
            }
        }
    }
}
.section2 {
    @include bg('~@/assets/images/10/section2-bg-s.png');
    height: 2409px;
    @media (min-width: $content-width + 1) {
        height: 1137px;
        background-image: url('~@/assets/images/10/section2-bg.png');
    }
}
.section3 {
    background-color: #ffdfb8;
}
</style>