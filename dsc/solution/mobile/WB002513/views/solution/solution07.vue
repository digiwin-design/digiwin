<template>
    <div class="solution07">
        
    </div>
</template>

<script>
module.exports = {
    name: 'solution07',
    computed: {
        result() {
            return store.state.result.solution.find(item => item.name === this.$route.name);
        }
    },
}
</script>
