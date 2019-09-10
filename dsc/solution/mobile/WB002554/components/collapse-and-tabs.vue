<template>
    <div class="collapse-and-tabs">
        <div ref="accordion" class="accordion">
            <template v-for="(order, idx) in orders">
                <h2 v-on:click="slideToggle" :key="order.title">{{order.title}}</h2>
                <div class="accordion-content" :key="order.troubled.desc">
                    <tabs :id="`t${idx+1}`" :nav="nav">
                        <template :slot="`t${idx+1}-0`">
                            <div class="accordion-troubled">
                                <p class="accordion-troubled-desc">{{order.troubled.desc}}</p>
                                <pain
                                    :content="pain"
                                    v-for="pain in order.troubled.pains"
                                    :key="pain.title"
                                ></pain>
                            </div>
                        </template>
                        <template :slot="`t${idx+1}-1`">
                            <div class="accordion-solution">
                                <p class="accordion-solution-desc">{{order.solution.desc}}</p>
                                <figure v-for="figure in order.solution.figures" :key="figure.imgSrc">
                                    <img :src="`images/orders/${figure.fileName}`" alt />
                                    <figcaption>▲ {{figure.figcaption}}</figcaption>
                                </figure>
                                <a href="#contact" class="js-nav">
                                    <i class="material-icons">arrow_forward</i>
                                    {{order.solution.linkText}}
                                </a>
                            </div>
                        </template>
                    </tabs>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
module.exports = {
    computed: {
        nav: function () {
            return ['常見困擾', '解決方案'];
        },
        orders: function () {
            return store.state.result.orders;
        }
    },
    methods: {
        slideToggle: function (event) {
            $(event.target).toggleClass('active').next().slideToggle();
        },
        scrollHandler: function (event) {
            $(event.target.hash).addClass('active').next().slideDown();
        }
    },
    mounted: function () {
        $(this.$refs.accordion).find('h2').eq(0).addClass('active');
    },
};
</script>
