<template>
  <div id="app">
    {{msg}}
    <div>
      <test></test>
    </div>
    <ul>
      <li>
        <router-link to="/home">主页</router-link>
        <router-link to="/news">新闻</router-link>
      </li>
    </ul>
    <div>
      <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Test from './components/Test.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    test : Test
  }
}
</script>

<style>
html,body{ overflow:hidden; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
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
</style>
