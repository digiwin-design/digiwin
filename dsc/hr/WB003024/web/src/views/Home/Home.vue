<template>
    <div class="home">
        <div class="nav">
            <router-link to="/">進入頁</router-link> |
            <router-link to="/ma">儲備MA招募</router-link> |
            <router-link to="/school">校園招募</router-link> |
            <a href="javascript:;">社會招募</a>
        </div>
        <img alt="Vue logo" src="@/assets/logo.png">
    </div>
</template>

<script>
export default {
    name: 'home',
    components: {
    },
}
</script>

<style lang="scss" scoped>
.nav {
    padding: 30px;
    a {
        color: #2c3e50;
        font-weight: bold;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>