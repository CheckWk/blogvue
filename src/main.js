// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/style.less'
import store from './store'
import MavonEditor from 'mavon-editor'

//解决qq跨域测试
// Vue.prototype.HOST='/api'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(MavonEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
