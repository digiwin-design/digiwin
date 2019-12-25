<template>
    <div class="solution">
        <slider-banner-s :slides="result.banner" device="mobile"></slider-banner-s>
    </div>
</template>

<script>
module.exports = {
    name: 'solution',
    computed: {
        result() {
            return store.state.result.solution;
        }
    },
}
</script>
