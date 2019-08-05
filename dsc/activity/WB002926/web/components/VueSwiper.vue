<template>
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <a
                :href="slide.link"
                v-for="slide in slides"
                :key="slide.year"
                class="swiper-slide"
                target="_blank"
            >
                <figure>
                    <img :src="require(`~/assets/images/review-${slide.year}.jpg`)" alt="">
                    <figcaption>{{slide.year}}年</figcaption>
                </figure>
            </a>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
export default {
    props: ['slides'],
    data() {
        return {
            swiperOption: {
                initialSlide: 5,
                slidesPerView: 5,
                spaceBetween: 1,
                navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                },
                breakpoints: {
                    960: {
                        slidesPerView: 4
                    },
                    720: {
                        slidesPerView: 3
                    },
                    480: {
                        slidesPerView: 2
                    },
                }
            }
        }
    },
}
</script>

<style lang="scss" src="~/assets/sass/components/_swiper2.scss" scoped></style>
