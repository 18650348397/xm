// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'style/reset.css'   //引入样式初始化
import  'style/border.css'
import  'style/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper' //在此引入swiper后,全局都可以使用swiper
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
