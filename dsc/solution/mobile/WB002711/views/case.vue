<template>
    <div class="case">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <template v-if="isReady">

        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'case',
    computed: {
        result() {
            return store.state.result.case;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
