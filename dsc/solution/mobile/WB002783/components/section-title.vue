<template>
    <div class="sectionTitle" :style="customStyle">
        <h1>{{title}}</h1>
        <p v-show="desc" v-html="desc"></p>
    </div>
</template>

<script>
module.exports = {
    props: ['title', 'desc', 'customStyle']
}
</script>

<style scoped>
    .sectionTitle {
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        padding-bottom: 2em;
        align-items: center;
    }
    h1 {
        max-width: 100%;
        font-size: 30px;
    }
    p {
        margin-top: .5em;
        max-width: 100%;
    }
</style>