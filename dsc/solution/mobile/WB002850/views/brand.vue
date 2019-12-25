<template>
    <div class="brand">
        <slider-banner-s :slides="result.banner" device="mobile"></slider-banner-s>
        <hover-boxs v-bind:boxs="result.hoverBoxs"></hover-boxs>
    </div>
</template>

<script>
module.exports = {
    name: 'brand',
    computed: {
        result() {
            return store.state.result.brand;
        }
    },
}
</script>
