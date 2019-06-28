<template>
    <div ref="accordion" class="accordion">
        <template v-for="(item, idx) in accordion">
            <h2 v-on:click="slideToggle" :key="item.title">
                <span class="accordion-title" v-html="item.title"></span>
                <span class="accordion-more">
                    <i>more</i>
                </span>
            </h2>
            <div class="accordion-content" :key="item.text">
                <div class="container">
                    <div class="accordion-col">
                        <div class="accordion-illust">
                            <img :src="'images/seminar/accordion/illust'+(idx+1)+'.jpg'" alt>
                        </div>
                        <div class="accordion-btns">
                            <a
                                v-for="link in item.links"
                                :href="link.href"
                                :class="{'js-nav':btnClass(link.href)}"
                                :key="link.href"
                                target="_blank"
                            >{{link.text}}</a>
                        </div>
                    </div>
                    <div class="accordion-col" :class="'text'+(idx+1)">
                        <template v-for="content in item.contents">
                            <h3 v-if="content.title" :key="content.title">{{content.title}}</h3>
                            <h4 v-if="content.subtitle" :key="content.subtitle">{{content.subtitle}}</h4>
                            <div v-html="content.html" class="accordion-detail" :key="content.html"></div>
                        </template>
                    </div>
                </div>
            </div>
        </template>
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
