<template>
    <div class="smartFactory-collapse-and-tabs">
        <div ref="accordion" class="accordion">
            <template v-for="(item, idx) in content">
                <h2 v-on:click="slideToggle" :key="item.title">{{item.title}}</h2>
                <div class="accordion-content" :key="item.tab1.desc">
                    <tabs :id="`t${idx+1}`" :nav="nav">
                        <template :slot="`t${idx+1}-0`">
                            <div class="accordion-tab1">
                                <h3>{{item.tab1.subtitle}}</h3>
                                <p class="accordion-tab1-desc">{{item.tab1.desc}}</p>
                                <hover-box
                                    :content="pain"
                                    v-for="pain in item.tab1.pains"
                                    :key="pain.title"
                                ></hover-box>
                            </div>
                        </template>
                        <template :slot="`t${idx+1}-1`">
                            <div class="accordion-tab2">
                                <img :src="`images/smartFactory/${item.tab2.fileName}`" alt />
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
    name: 'CollapseAndTabs',
    components: {
        'hover-box': httpVueLoader('components/smartFactory/hover-box.vue'),
    },
    props: {
        content: {
            type: Array
        }
    },
    computed: {
        nav: function () {
            return ['提升生產現場應變速度', '如何自動報工'];
        },
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
