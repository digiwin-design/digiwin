<template>
    <transition name="fade">
        <div class="cover">
            <img src="public/images/03/loading.svg" class="loading" alt />
        </div>
    </transition>
</template>

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
    background-color: #fff;
    justify-content: center;
    align-items: center;
}
.loading {
    margin-top: .5em;
    width: 50px;
}
</style>