<template>
    <transition name="fade">
        <div v-if="loading" class="cover">
            <img src="images/loading.svg" class="loading" alt />
        </div>
    </transition>
</template>

<script>
export default {
    computed: {
        loading() {
            return this.$store.state.loading;
        }
    },
}
</script>

<style lang="scss" scoped>
.cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000000; // override Header
    display: flex;
    flex-direction: column;
    background-color: rgba(#000, .9);
    color: #fff;
    font-size: 20px;
    justify-content: center;
    align-items: center;
}
.loading {
    margin-top: .5em;
    width: 50px;
}
</style>