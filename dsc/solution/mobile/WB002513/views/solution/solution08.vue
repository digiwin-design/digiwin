<template>
    <div class="solution08">
        
    </div>
</template>

<script>
module.exports = {
    name: 'solution08',
    computed: {
        result() {
            return store.state.result.solution.find(item => item.name === this.$route.name);
        }
    },
}
</script>
