/**
 * 入口配置文件
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Element  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(Element, { size: 'small', zIndex: 3000 });



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
