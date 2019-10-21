<template>
    <div class="industry">
        <main-header>
            <template slot="content"></template>
        </main-header>
    </div>
</template>

<script>
module.exports = {
    name: 'industry',
    computed: {
        result() {
            return store.state.result;
        }
    },
}
</script>
