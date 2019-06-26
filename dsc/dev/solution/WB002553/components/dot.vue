<template>
    <div class="dot">
        <slot></slot>
    </div>
</template>

<script>
module.exports = {
    mounted: function () {
        $(this.$el).dotdotdot({ truncate: 'letter' });
    },
}
</script>

<style scoped>
.dot {
    height: 150px;
}
</style>
