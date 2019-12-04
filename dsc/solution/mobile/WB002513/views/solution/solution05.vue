<template>
    <div class="solution05">
        
    </div>
</template>

<script>
module.exports = {
    name: 'solution03',
    computed: {
        result() {
            return store.state.result.solution.find(item => item.name === this.$route.name);
        }
    },
}
</script>
