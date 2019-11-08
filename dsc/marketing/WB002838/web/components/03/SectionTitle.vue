<template>
    <div class="sectionTitle" :style="{ 'padding-top': paddingTop, 'padding-bottom': paddingBottom }">
        <h1 v-html="title"></h1>
        <p v-show="desc" v-html="desc"></p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        desc: {
            type: String
        },
        paddingTop: {
            type: String,
            default: '3em'
        },
        paddingBottom: {
            type: String,
            default: '2em'
        }
    }
}
</script>

<style lang="scss" scoped>
.sectionTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        max-width: 100%;
        font-size: 30px;
        line-height: 1.3;
        @media (min-width: 769px) {
            font-size: 36px;
        }
    }
    p {
        margin-top: 0.5em;
        max-width: 100%;
        @media (min-width: 769px) {
            font-size: 20px;
        }
    }
}
</style>