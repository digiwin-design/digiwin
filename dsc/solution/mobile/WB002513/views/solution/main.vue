<template>
    <div class="solution">
        <slider-banner-s :slides="result.banner"></slider-banner-s>
        <router-view></router-view>        
    </div>
</template>

<script>
module.exports = {
    name: 'solution',
    computed: {
        result() {
            return store.state.result.solution.find(item => item.name === this.$route.name);
        }
    },
}
</script>
