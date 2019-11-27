<template>
    <div class="index">
        <slider-banner-s :slides="result.banner" device="mobile"></slider-banner-s>
    </div>
</template>

<script>
module.exports = {
    name: 'WB002513',
    computed: {
        result() {
            return store.state.result.index;
        }
    },
}
</script>
