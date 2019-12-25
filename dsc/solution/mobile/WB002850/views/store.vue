<template>
    <div class="store">
        <slider-banner-s :slides="result.banner" device="mobile"></slider-banner-s>
    </div>
</template>

<script>
module.exports = {
    name: 'store',
    computed: {
        result() {
            return store.state.result.store;
        }
    },
}
</script>
