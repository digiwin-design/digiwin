<template>
    <div class="business">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <template v-if="isReady">

        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'business',
    computed: {
        result() {
            return store.state.result.business;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
