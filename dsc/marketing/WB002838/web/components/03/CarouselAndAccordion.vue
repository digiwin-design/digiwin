<template>
    <div class="carouselAndAccordion" :class="type">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide js-slide" v-for="n in 3">
                    <div>
                        <h2 @click="accordionSlideToggle" class="container">Slide 1</h2>
                        <div>
                            <div class="row container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae quis obcaecati earum. Itaque, assumenda. Ex fuga, aut ut laborum, vel sapiente rem consequatur laudantium porro eligendi reiciendis, dolor eaque.</div>
                            <div class="row container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae quis obcaecati earum. Itaque, assumenda. Ex fuga, aut ut laborum, vel sapiente rem consequatur laudantium porro eligendi reiciendis, dolor eaque.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    data() {
        return {
            mySwiper: null,
        }
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        type() {
            return this.isMobile ? 'accordion' : 'carousel';
        },
    },
    watch: {
        isMobile: {
            handler(val) {
                if (val) {
                    this.destroySwiper();
                }
                else {
                    this.removeAccordionSlideHeight();
                    this.initSwiper();
                }
            },
            immediate: true
        }
    },
    methods: {
        initSwiper() {
            this.$nextTick(() => {
                this.mySwiper = new Swiper(".swiper-container", {
                    pagination: {
                        el: ".swiper-pagination"
                    }
                });
            });
        },
        destroySwiper() {
            this.mySwiper && this.mySwiper.destroy();
        },
        accordionSlideToggle() {
            let target = event.target;
            let titleHeight = target.offsetHeight;
            let contentHeight = target.nextElementSibling.offsetHeight;
            let slide = target.parentElement.parentElement;

            if (slide.style.height === 'auto') {
                slide.style.height = `${contentHeight + titleHeight}px`;
                setTimeout(() => {
                    slide.style.height = `${titleHeight}px`;
                }, 1);
            }
            else {
                slide.style.height = `${contentHeight + titleHeight}px`;
                setTimeout(() => {
                    slide.style.height = 'auto';
                }, 500);
            }
        },
        removeAccordionSlideHeight() {
            document.querySelectorAll('.js-slide').forEach(el => {
                el.style.height = '';
            });
        }
    },
}
</script>

<style lang="scss" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css');
.container {
    @media (min-width: 769px) {
        padding-right: 0;
        padding-left: 0;
    }
}
h2 {
    background-color: #0685ad;
    color: #fff;
    letter-spacing: (60 / 1000) + em;
    font-weight: bold;
}
.row {
    &:nth-child(1) {
    }
    &:nth-child(2) {
        background-color: #08acb2;
        color: #fff;
    }
}
.carouselAndAccordion {
    &.accordion {
        $titleHeight: 97px;
        .swiper-wrapper {
            flex-direction: column;
        }
        .swiper-slide {
            display: block;
            overflow: hidden;
            height: $titleHeight;
            transition: height .4s;
            & + .swiper-slide {
                margin-top: 2px;
            }
        }
        h2 {
            height: $titleHeight;
            font-size: 26px;
            line-height: $titleHeight;
        }
    }
    &.carousel {
        .swiper-container {
            padding-bottom: 3em;
        }
        .swiper-slide {
            position: relative;
            > div {
                margin: 0 auto;
                max-width: 1200px;
            }
        }
        .swiper-pagination {
            display: flex;
            justify-content: center;
        }
        /deep/ .swiper-pagination-bullet {
            margin: 0 5px !important;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: #b1b1b1;
            &-active {
                background-color: #14a7a9;
            }
        }
        h2 {
            position: absolute;
            width: 354px;
            height: 74px;
            border-radius: 0 0 20px 20px;
            text-align: center;
            font-size: 24px;
            line-height: 74px;
        }
        .row {
            &:nth-child(1) {
                padding-left: 408px;
                height: 150px;
            }
            &:nth-child(2) {
                height: 465px;
                border-radius: 20px;
            }
        }
    }
}
</style>