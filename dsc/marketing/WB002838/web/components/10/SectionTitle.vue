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
            default: '2.7em'
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
        text-align: center;
        font-weight: bold;
        font-size: 36px;
        line-height: 1.3;
        @media (min-width: 1101px) {
            font-size: 42px;
        }
    }
    p {
        margin-top: 1em;
        max-width: 100%;
        text-align: center;
        font-size: 22px;
        line-height: 30px;
        br {
            display: none;
            @media (min-width: 1101px) {
                display: block;
            }
        }
    }
}
</style>