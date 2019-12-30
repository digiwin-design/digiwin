<template>
    <div class="index">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <template v-if="isReady">
            <article class="section1">
                <div class="container">
                    <section-title title="化妝品同業反應建置資訊系統欲改善的問題" padding-bottom="1em"></section-title>
                    <p class="desc">統計今年度化妝品業反映的作業與管理困擾整理出相關數據，發現因為營運成長、新增多通路經營、網購電子商務等，而產生資訊系統重購或建置的需求，誠如下圖所示，尤其以<strong>門市專櫃通路管理、網購接單、多公司帳務、電子發票、營運分析</strong>等相關議題最受重視，並列入IT建置首要改善的重點。</p>
                    <progress-bar :progress-bar="result.progressBar"></progress-bar>
                </div>
                <div class="pains">
                    <pain :content="pain" v-for="pain in result.pains" :key="pain.imgSrc"></pain>
                </div>
            </article>

            <article class="section2 container">
                <section-title title="化妝品業生意經"></section-title>
                <div class="issue" v-for="issue in result.issues" :key="issue.imgSrc">
                    <img :src="issue.imgSrc" alt="">
                    <p class="issue__title">{{issue.title}}</p>
                    <p class="issue__content">{{issue.content}}</p>
                </div>
            </article>

            <article class="section3">
                <div class="container">
                    <section-title title="多通路經營管理" padding-bottom="1em"></section-title>
                    <p class="desc">
                        通路的差異，能接觸不同的消費族群；通路的差異，也有不同的經營管理方式。<br>
                        開架通路、百貨專櫃、藥妝店、網路商店、專業沙龍甚或是觀光工廠等是近年藥妝業不斷發展的通路型態，<br>
                        雖然重點都是把商品賣給消費者，但是過程中怎麼賣、通路該怎麼管理卻是大不同...
                    </p>
                    <div class="grid">
                        <div class="grid__item" v-for="item in result.channel" :key="item.imgSrc">
                            <div class="grid__item--img" :style="{ backgroundImage: `url(${item.imgSrc})` }"></div>
                            <p class="grid__item--caption">{{item.caption}}</p>
                        </div>
                    </div>
                </div>
            </article>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'WB002711',
    components: {
        'slider-banner-s': httpVueLoader('../components/index/slider-banner-s.vue'),
        'progress-bar': httpVueLoader('../components/index/progress-bar.vue'),
    },
    computed: {
        result() {
            return store.state.result.index;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
