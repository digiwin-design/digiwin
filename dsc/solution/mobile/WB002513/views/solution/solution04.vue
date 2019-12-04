<template>
    <div class="solution04">
        
    </div>
</template>

<script>
module.exports = {
    name: 'solution04',
    computed: {
        result() {
            return store.state.result.solution.find(item => item.name === this.$route.name);
        }
    },
}
</script>
