<template>
    <div class="carousel">
        <!-- desktop -->
        <el-carousel
            ref="carousel"
            :interval="4000"
            type="card"
            :height="carouselHeight"
            trigger="click"
            arrow="never"
            indicator-position="outside"
            v-show="!isMobile"
        >
            <el-carousel-item v-for="item in items" :key="item">
                <div class="item">
                    <img :src="require(`./${item}`)" alt="">
                </div>
            </el-carousel-item>
        </el-carousel>

        <!-- mobile -->
        <el-carousel
            ref="carouselM"
            :interval="4000"
            :height="carouselHeight"
            trigger="click"
            arrow="never"
            indicator-position="outside"
            v-show="isMobile"
        >
            <el-carousel-item v-for="item in items" :key="item">
                <div class="item">
                    <img :src="require(`./${item}`)" alt="">
                </div>
            </el-carousel-item>
        </el-carousel>

        <a href class="carousel__arrow carousel__arrow--left" @click.prevent="onChange(-1)"></a>
        <a href class="carousel__arrow carousel__arrow--right" @click.prevent="onChange(1)"></a>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            imgSize: {
                width: 600,
                height: 350
            },
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
        setCarouselHeight: _.throttle(function () {
            let scaleW = this.isMobile ? 1 : 0.5; // .el-carousel__item 預設寬度
            let cardWidth = getComputedStyle(this.$el).width.replace('px', '') * scaleW;
            this.carouselHeight = cardWidth * (this.imgSize.height / this.imgSize.width) + 'px';
        }, 100),
        onChange(type) {
            let el = this.isMobile ? this.carouselM : this.carousel;
            if (type === -1) {
                el.prev();
            }
            else {
                el.next();
            }
        },
    },
    mounted() {
        window.addEventListener("resize", () => this.setCarouselHeight());
        this.setCarouselHeight();
    },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/common/variable';
@import '~@/assets/sass/common/helpers';

.carousel {
    position: relative;
    box-sizing: content-box;
    margin: 0 auto;
    padding: 0 22px;
    max-width: 600px;
    @media (min-width: $mobile-width + 1) {
        padding-right: 64px;
        padding-left: 64px;
    }
    @media (min-width: $tablet-width + 1) {
        padding-right: 150px;
        padding-left: 150px;
        max-width: none;
    }
    &__arrow {
        position: absolute;
        top: 50%;
        width: 17px;
        height: 17px;
        background: url('arrow.svg') no-repeat;
        content: '';
        @media (min-width: $mobile-width + 1) {
            width: 36px;
            height: 36px;
        }
        &--left {
            left: 0;
            transform: scaleX(-1) translateY(-50%);
            @media (min-width: $mobile-width + 1) {
                left: 18px;
            }
            @media (min-width: $tablet-width + 1) {
                left: 104px;
            }
        }
        &--right {
            right: 0;
            transform: translateY(-50%);
            @media (min-width: $mobile-width + 1) {
                right: 18px;
            }
            @media (min-width: $tablet-width + 1) {
                right: 104px;
            }
        }
        &::before {
            @include clickableArea(17px, 17px);
            @media (min-width: $mobile-width + 1) {
                @include clickableArea(36px, 36px);
            }
        }
    }
}
/deep/ .el-carousel {
    overflow-y: hidden; /* for ie */
    &__mask {
        z-index: 1;
        background-color: #000;
        opacity: .4;
    }
    &__indicators {
        display: none;
    }
}
</style>