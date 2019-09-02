<template>
    <div class="sectionTitle" :style="{'padding-top':paddingTop, 'padding-bottom':paddingBottom}">
        <h1 v-html="title"></h1>
        <p v-show="desc" v-html="desc"></p>
    </div>
</template>

<script>
export default {
    props: ['title', 'desc', 'paddingTop', 'paddingBottom']
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/common.scss';
.sectionTitle {
    display: flex;
    flex-direction: column;
    padding-top: 52px;
    padding-bottom: 2em;
    align-items: center;
    @media (min-width: $tablet-width + 1) {
        padding-top: 58px;
    }
}
.sectionTitle h1 {
    max-width: 100%;
    font-size: 34px;
    @media (max-width: $tablet-width) {
        font-size: 35px;
    }
}
.sectionTitle p {
    margin-top: .5em;
    max-width: 100%;
}
</style>