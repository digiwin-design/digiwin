<template>
    <div class="case">
        <p class="kind">{{kind}}<strong>{{company}}</strong></p>
        <p class="desc">{{desc}}</p>
        <a :href="url" target="_blank">more</a>
    </div>
</template>

<script>
module.exports = {
    props: ['kind', 'company', 'desc', 'url']
}
</script>

<style scoped>
    .kind {
        font-weight: bold;
        font-size: 16px;
    }
    strong {
        margin-left: 5px;
        font-size: 20px;
    }
    .desc {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        line-height: 27px;
    }
    a {
        display: block;
        height: 40px;
        text-align: center;
        font-weight: bold;
        font-size: 15px;
        line-height: 40px;
    }
</style>
