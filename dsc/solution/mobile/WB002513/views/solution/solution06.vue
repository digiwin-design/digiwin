<template>
    <div class="solution06">
        
    </div>
</template>

<script>
module.exports = {
    name: 'solution06',
    computed: {
        result() {
            return store.state.result.solution.find(item => item.name === this.$route.name);
        }
    },
}
</script>
