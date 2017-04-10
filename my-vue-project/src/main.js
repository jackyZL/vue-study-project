import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './router.config'

import './assets/css/base.css'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior: () => ({    /* 每次切换，y轴滚动条变为0 */
    y: 0
  })
});
router.afterEach((to, from) => {
  document.title = to.name
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
