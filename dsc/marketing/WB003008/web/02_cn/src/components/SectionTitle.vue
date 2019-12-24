<template>
    <div class="sectionTitle" :style="{ paddingTop: paddingTop, paddingBottom: paddingBottom }">
        <h1 v-html="title" :style="{ color }"></h1>
        <div class="underscore" :style="{ backgroundColor: color }"></div>
        <p v-show="desc" v-html="desc"></p>
    </div>
</template>

<script>
module.exports = {
    props: {
        title: {
            type: String
        },
        desc: {
            type: String
        },
        paddingTop: {
            type: String,
            default: '3.5em'
        },
        paddingBottom: {
            type: String,
            default: '2em'
        },
        color: {
            type: String,
            reqired: true
        },
    }
}
</script>

<style scoped>
.sectionTitle {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sectionTitle h1 {
    max-width: 100%;
    font-weight: bold;
    font-size: 40px;
}
.underscore {
    margin: 10px auto 0;
    width: 100px;
    height: 5px;
}
.sectionTitle p {
    margin-top: .5em;
    max-width: 100%;
    font-size: 24px;
    line-height: 34px;
}
.sectionTitle /deep/ br {
    display: none;
}
@media (min-width: 1200px) {
    .sectionTitle h1 {
        font-size: 36px;
    }
    .sectionTitle /deep/ br {
        display: block;
    }
}
</style>