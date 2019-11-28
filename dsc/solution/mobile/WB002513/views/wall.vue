<template>
    <div class="wall">
        <slider-banner-s :slides="result.banner"></slider-banner-s>
    </div>
</template>

<script>
module.exports = {
    name: 'wall',
    computed: {
        result() {
            return store.state.result.wall;
        }
    },
}
</script>
