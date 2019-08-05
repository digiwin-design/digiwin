<template>
    <div id="section2" class="section section2 fp-auto-height-responsive">
        <section class="container">
            <h1 class="title">儲備菁英<br> 計畫特色</h1>
            <h2 class="subtitle">鼎新引領走向薪價值，選擇從這裡開始</h2>
            <h3>專案特色</h3>
            <div class="illust">
                <div class="illust-item js-animated"></div>
                <div class="illust-item js-animated delay-1s"></div>
                <div class="illust-item js-animated delay-2s"></div>
                <div class="illust-item js-animated delay-3s"></div>
                <div class="illust-item js-animated delay-4s"></div>
                <div class="illust-item js-animated delay-5s"></div>
            </div>
            <img src="~/assets/images/section2-illust-s.png" class="illust-s" alt="">
            <a href class="anchor" @click.prevent="refs.fullpage.api.moveSectionDown()"></a>
        </section>
    </div>
</template>

<script>
export default {
    props: ['refs'],
}
</script>


<style lang="scss" scoped src="~/assets/sass/components/section2.scss"></style>
