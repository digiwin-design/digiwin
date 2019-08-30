<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div v-for="cast in result.casts" :key="cast.id" class="swiper-slide cast-slide">
                <div class="cast-content js-cast-content">
                    <div class="cast-col">
                        <img :src="require(`@/assets/images/cast${cast.id}.png`)" alt />
                    </div>
                    <div class="cast-col">
                        <h2 class="cast-company">{{cast.company}}</h2>
                        <h1 class="cast-name" v-html="cast.name"></h1>
                        <p class="cast-desc" v-html="cast.desc"></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
let mySwiper;
export default {
    props: ['id'],
    computed: {
        result() {
            return this.$store.state.result;
        },
    },
    methods: {
        init() {
            mySwiper = new Swiper('.swiper-container', {
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                initialSlide: this.id,
            });
        }
    },
    mounted() {
        this.init();
    },
    beforeDestroy() {
        mySwiper.destroy();
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/common.scss';
.swiper-container {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: #ffd368;
}
.swiper-button-prev {
    background-image: url('~@/assets/images/arrow-l.png');
}
.swiper-button-next {
    background-image: url('~@/assets/images/arrow-r.png');
}
/deep/ .swiper-pagination-bullet {
    margin-right: 5px;
    margin-left: 5px;
    width: 14px;
    height: 14px;
    background-color: #fff;
    opacity: 1;
    &-active {
        background-color: #f05a28;
    }
}
.cast {
    &-slide {
        display: flex;
        padding-right: 8%;
        padding-left: 8%;
        justify-content: center;
        align-items: center;
        @media (max-width: $tablet-width) {
            padding-top: 2em;
            padding-right: 28px;
            padding-left: 28px;
            align-items: flex-start;
        }
    }
    &-content {
        display: flex;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        width: 100%;
        height: calc(100% - 120px);
        color: #fff;
        flex-wrap: wrap;
        @media (max-width: $tablet-width) {
            height: calc(100% - 60px);
        }
    }
    &-col {
        &:first-of-type {
            margin-right: 25px;
            flex-shrink: 0;
            @media (max-width: $tablet-width) {
                display: none;
                margin-right: 0;
                margin-bottom: 20px;
                width: 100%;
                text-align: center;
            }
            img {
                display: block;
                margin: 0 auto;
            }
        }
        &:last-of-type {
            width: calc(100% - 270px);
            @media (max-width: $tablet-width) {
                width: 100%;
            }
        }
    }
    &-company {
        margin-bottom: 10px;
        color: #f05a28;
        font-size: 24px;
        @media (max-width: $tablet-width) {
            margin-bottom: .5em;
            text-align: center;
        }
    }
    &-name {
        margin-bottom: 10px;
        color: #535353;
        font-weight: bold;
        font-size: 25px;
        line-height: 38px;
        @media (max-width: $tablet-width) {
            text-align: center;
        }
        /deep/ br {
            display: none;
        }
    }
    &-desc {
        color: #535353;
        text-align: justify;
        font-size: 20px;
        line-height: 28px;
    }
}
</style>