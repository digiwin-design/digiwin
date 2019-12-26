<template>
    <div class="index">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <template v-if="isReady">

        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'WB002711',
    components: {
        'slider-banner-s': httpVueLoader('../components/index/slider-banner-s.vue'),
    },
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
