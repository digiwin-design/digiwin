<template>
    <div class="sectionTitle" :style="{'padding-top':paddingTop, 'padding-bottom':paddingBottom}">
        <h1 v-html="title"></h1>
        <p v-show="desc" v-html="desc"></p>
    </div>
</template>

<script>
module.exports = {
    props: ['title', 'desc', 'paddingTop', 'paddingBottom']
}
</script>

<style scoped>
.sectionTitle {
    display: flex;
    flex-direction: column;
    padding-top: 52px;
    padding-bottom: 2em;
    align-items: center;
}
h1 {
    max-width: 100%;
    font-size: 26px;
}
p {
    margin-top: 0.5em;
    max-width: 100%;
}
</style>