// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import VueLazyload from 'vue-lazyload'

Vue.prototype.$ajax = axios;

Vue.use(VueAwesomeSwiper)
Vue.use(VueCookies)
Vue.use(Element)
Vue.use(VueLazyload)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
