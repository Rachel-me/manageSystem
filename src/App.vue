<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<h1>{{ msg }}</h1>-->
    <!--<h2>Essential Links</h2>-->
    <!--<ul>-->
    <!--<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
    <!--<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
    <!--<li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>-->
    <!--<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
    <!--</ul>-->
    <!--<h2>Ecosystem</h2>-->
    <!--<ul>-->
    <!--<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
    <!--<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
    <!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
    <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
    <!--</ul>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px !important;
  width: 100%;
  height: 100%;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

body .el-table th.gutter {
  display: table-cell !important;
}

body .el-table colgroup.gutter {
  display: table-cell !important;
}
</style>
