<template>
    <div class="index">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <template v-if="isReady">

        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'WB002850',
    computed: {
        result() {
            return store.state.result.index;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
