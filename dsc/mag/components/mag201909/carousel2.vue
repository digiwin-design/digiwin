<template>
    <div class="carousel2">
        <div class="swiper-container" ref="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in content" :key="item.imgSrc">
                    <section class="slideItem">
                        <div class="slideItem-img">
                            <img :src="item.imgSrc" alt />
                        </div>
                        <div class="slideItem-text">
                            <h2>{{item.subtitle}}</h2>
                            <h1 v-html="item.title"></h1>
                            <p>{{item.content}}</p>
                            <a :href="item.link" class="btn" target="_blank">more</a>
                        </div>
                    </section>
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'carousel2',
    props: {
        content: {
            type: Array,
            required: true
        }
    },
    data: function () {
        return {
            mySwiper: null,
        }
    },
    computed: {
        breakpoint: function () {
            return window.matchMedia('(min-width:1200px)');
        }
    },
    methods: {
        breakpointChecker: function () {
            // if larger viewport and multi-row layout needed
            if (this.breakpoint.matches === true) {

                // clean up old instances and inline styles when available
                if (this.mySwiper !== null) this.mySwiper.destroy(true, true);

                // or/and do nothing
                return;

                // else if a small viewport and single column layout needed
            } else if (this.breakpoint.matches === false) {

                // fire small viewport version of swiper
                return this.enableSwiper();

            }
        },
        enableSwiper: function () {
            this.mySwiper = new Swiper(this.$refs.swiper, {
                loop: true,
                autoHeight: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            });
        }
    },
    mounted: function () {
        // keep an eye on viewport size changes
        this.breakpoint.addListener(this.breakpointChecker);

        // kickstart
        this.breakpointChecker();
    },
}
</script>