<template>
    <div class="multichannel">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <template v-if="isReady">

        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'multichannel',
    computed: {
        result() {
            return store.state.result.multichannel;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
