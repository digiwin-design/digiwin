<template>
    <div class="carousel">
        <!-- desktop -->
        <el-carousel
            ref="carousel"
            :interval="4000"
            type="card"
            :autoplay="false"
            :height="carouselHeight"
            trigger="click"
            arrow="never"
            indicator-position="outside"
            v-show="!isMobile"
        >
            <el-carousel-item v-for="item in 6" :key="item">
                <div class="item">
                    <img src="@/assets/images/recommended-list/01.jpg" alt />
                    <ul class="hashtag">
                        <li>#tag1</li>
                        <li>#tag2</li>
                    </ul>
                </div>
            </el-carousel-item>
        </el-carousel>

        <!-- mobile -->
        <el-carousel
            ref="carouselM"
            :interval="4000"
            :autoplay="false"
            :height="carouselHeight"
            trigger="click"
            arrow="never"
            indicator-position="outside"
            v-show="isMobile"
        >
            <el-carousel-item v-for="item in 6" :key="item">
                <div class="item">
                    <img src="@/assets/images/recommended-list/01.jpg" alt />
                    <ul class="hashtag">
                        <li>#tag1</li>
                        <li>#tag2</li>
                    </ul>
                </div>
            </el-carousel-item>
        </el-carousel>

        <a href class="carousel__left" @click.prevent="onChange(-1)"></a>
        <a href class="carousel__right" @click.prevent="onChange(1)"></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            carouselHeight: '',
        }
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        carousel() {
            return this.$refs.carousel;
        },
        carouselM() {
            return this.$refs.carouselM;
        }
    },
    methods: {
        setCarouselHeight() {
            let scaleW = this.isMobile ? 1 : 0.5;
            let cardWidth = this.$el.offsetWidth * scaleW;
            this.carouselHeight = cardWidth * 0.6 + "px";
        },
        onChange(type) {
            let el = this.isMobile ? this.carouselM : this.carousel;
            if (type === -1) {
                el.prev();
            }
            else {
                el.next();
            }
        }
    },
    mounted() {
        this.setCarouselHeight();
        window.addEventListener("resize", () => this.setCarouselHeight());
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/common.scss';
.carousel {
    position: relative;
    padding: 0 20px;
    @media (min-width: $tablet-width + 1) {
        padding-right: 40px;
        padding-left: 40px;
    }
    &__left,
    &__right {
        position: absolute;
        top: 50%;
        width: 23px;
        height: 23px;
        border-bottom: 5px solid rgba(255,255,255,.75);
        border-left: 5px solid rgba(255,255,255,.75);
        border-radius: 0;
        background-color: transparent;
        content: '';
    }
    &__left {
        left: -20px;
        transform: rotate(45deg) translateY(-50%);
        @media (min-width: $tablet-width + 1) {
            left: 10px;
        }
    }
    &__right {
        right: -20px;
        transform: rotate(-135deg) translateY(-50%);
        @media (min-width: $tablet-width + 1) {
            right: 10px;
        }
    }
}
/deep/ .el-carousel {
    &__item {
        border-radius: 10px;
        background-color: #d3dce6;
    }
    &__mask {
        z-index: 1;
        background-color: #000;
        opacity: .4;
    }
    &__indicators {

    }
}
/deep/ .item {
    display: flex;
    flex-direction: column;
    padding: 15px 15px 0;
    height: 100%;
    @media (min-width: $tablet-width + 1) {
        padding: 27px 27px 0;
    }
}
/deep/ .hashtag {
    display: flex;
    color: #fff6dc;
    letter-spacing: getLetterSpacing(30);
    font-weight: bold;
    flex-grow: 1;
    align-items: center;
    @media (min-width: $tablet-width + 1) {
        font-size: 22px;
    }
    li + li {
        margin-left: 1em;
    }
}
</style>