<template>
    <div class="case">
        <div class="case-illust" :style="'background-image:url(images/case/case_' + id + '.jpg)'"></div>
        <div class="case-content">
            <h2>{{content.company}}</h2>
            <h3>{{content.category}}</h3>
            <vue-text-dot :msg="content.desc"></vue-text-dot>
            <a :href="content.url" target="_blank">繼續閱讀</a>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['id'],
    computed: {
        cases: function () {
            return store.state.result.cases;
        },
        content: function () {
            return this.cases.filter(function (val) {
                return val.id === this.id;
            }.bind(this))[0];
        }
    },
}
</script>