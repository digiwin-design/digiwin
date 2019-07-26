<template>
    <div>
        <main-header>
            <template slot="content">
                <h1 v-html="content.title"></h1>
                <p v-html="content.desc"></p>
            </template>
        </main-header>

        <article class="section1">
            <h1>{{content.section1Title}}</h1>
            <p class="container">鼎新深耕流通買賣業多年，期許藉著各種不同議題的研討會，與流通業朋友們一同精進成長，也體會忙碌的工作讓您無法親自前來上課聽取新知，我們特別提供各場研討會講義資料索取，如您對任何一場有興趣了解，都可以點選[索取資料]，我們將盡快將資料送達您手中。知識就是力量，我們願意與您分享更多成功者的思考面向與成功密訣！</p>
            <accordion v-for="(accordion,index) in content.accordions" :accordion="accordion" :index="index" :key="accordion.title"></accordion>
        </article>

        <contact v-bind:multiple="false" source></contact>
    </div>
</template>

<script>
module.exports = {
    props: ['content'],
    components: {
        'accordion': httpVueLoader('components/seminar/accordion.vue'),
        'progress-bars': httpVueLoader('components/seminar/progressBars/progress-bars.vue'),
    },
    computed: {
        percentages: function () {
            if (!this.content.progressBars) return null;

            // 排序各組數值以取得最大值
            let percentages = [];
            this.content.progressBars.forEach(function (progressBar) {
                let percentage = [];
                progressBar.items.forEach(function (item) {
                    percentage.push(item.percentage);
                });
                percentage.sort(function (a, b) { return b - a; });
                percentages.push(percentage);
            });
            return percentages;
        },
        progressBars: function () {
            if (!this.content.progressBars) return null;

            // 取得各組最大值
            this.content.progressBars.forEach(function (progressBar, idx) {
                progressBar.items.forEach(function (item) {
                    if (item.percentage === this.percentages[idx][0]) {
                        item['highest'] = true;
                    }
                }.bind(this));
            }.bind(this));

            return this.content.progressBars;
        },
    },
    mounted: function () {
        if (typeof (NProgress) !== 'undefined') {
            NProgress.done();
        }
    },
};
</script>