<template>
    <div class="slider">
        <swiper ref="awesomeSwiperA" :options="swiperOptionA">
            <swiper-slide
                v-for="slide in slides"
                :key="slide.id"
            >
                <slot :name="'slot' + slide.id"></slot>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
module.exports = {
    props: {
        slides: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            swiperOptionA: {
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 6,
            }
        }
    },
    computed: {
        swiperA() {
            return this.$refs.awesomeSwiperA.swiper;
        }
    },
}
</script>