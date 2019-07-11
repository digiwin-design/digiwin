<template>
    <a href="" class="case">
        <section>
            <h1 v-html="title"></h1>
            <p>{{desc}}</p>
        </section>
    </a>
</template>

<script>
module.exports = {
    props: ['title', 'desc']
}
</script>

<style scoped>
    a {
        display: block;
        margin: 0 auto;
        width: 320px;
        min-height: 162px;
    }
    section {
        position: relative;
        display: flex;
        padding: 1em 2em 1em 1em;
        height: 100%;
    }
    section h1 {
        margin-right: .5em;
        width: 2.5em;
        color: #90f6ff;
        font-size: 32px;
        line-height: 40px;
        flex-shrink: 0;
    }
    section p {
        color: #fff;
        text-align: justify;
        font-weight: bold;
        line-height: 24px;
    }
    section::after {
        position: absolute;
        right: 1em;
        bottom: .5em;
        color: #90f6ff;
        content: '→';
        font-weight: bold;
        line-height: 1;
    }

</style>
