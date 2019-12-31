<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">進入頁</router-link> |
      <router-link to="/ma">儲備MA招募</router-link> |
      <router-link to="/school">校園招募</router-link> |
      <a href="javascript:;">社會招募</a>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
