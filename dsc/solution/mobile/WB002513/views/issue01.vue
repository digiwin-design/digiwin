<template>
    <div class="issue01">
        <slider-banner-s :slides="result.banner" device="mobile"></slider-banner-s>
    </div>
</template>

<script>
module.exports = {
    name: 'issue01',
    computed: {
        result() {
            return store.state.result.issue01;
        }
    },
}
</script>
