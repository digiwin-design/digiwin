<template>
    <div class="WB00247601_Industry01">
        <main-header>
            <template slot="content">
                <h1>機械設備業<br>智慧工廠全場景</h1>
                <h2>採購進貨</h2>
            </template>
        </main-header>

        <article class="section1">
            <div class="container">
                <h1 class="title">如果有一個工具，能將這一段段的收料作業串起來那就好了</h1>
                <slider :slides="result.WB00247601_Industry01.slider1">
                    <swiper-slide v-for="slide in result.WB00247601_Industry01.slider1" :key="slide.id">
                        <div class="slide" :class="`slide${slide.id}`">
                            <p class="slide-tag" :data-text="slide.tag"></p>
                            <figure>
                                <img :src="slide.imgSrc" alt="">
                                <figcaption>{{slide.figcaption}}</figcaption>
                            </figure>
                            <div class="slide-text" v-html="slide.text"></div>
                        </div>
                    </swiper-slide>
                </slider>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'WB00247601_Industry01',
    computed: {
        result() {
            return store.state.result;
        }
    },
}
</script>
