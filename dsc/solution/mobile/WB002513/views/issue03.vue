<template>
    <div class="issue03">
        <slider-banner-s :slides="result.banner" device="mobile"></slider-banner-s>
    </div>
</template>

<script>
module.exports = {
    name: 'issue03',
    computed: {
        result() {
            return store.state.result.issue03;
        }
    },
}
</script>
