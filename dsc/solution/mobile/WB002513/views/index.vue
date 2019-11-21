<template>
    <div class="index">
        <main-header>
            <template slot="content"></template>
        </main-header>
    </div>
</template>

<script>
module.exports = {
    name: 'WB002513',
    computed: {
        result() {
            return store.state.result;
        }
    },
}
</script>
