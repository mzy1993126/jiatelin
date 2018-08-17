// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import ElementUI from "element-ui"
import App from "./App"
import Vuex from "vuex"
import "babel-polyfill"
import router from "@/router"
import "element-ui/lib/theme-chalk/index.css"
import "@/assets/css/main.scss"

// 引入vuex状态管理数据
import store from "@/store"

// 引入Api，并挂载到vue上
// 组件内使用this.$apis.apiName调用
import Apis from "@/apis"
Vue.prototype.$apis = Apis

// 引入服务器配置，挂载到vue上
import address from "*/address.config"
Vue.prototype.$address = address

// 引入公用方法，挂载到vue上
import utils from "@/utils"
Vue.prototype.$utils = utils

// 引入filters，并挂载到vue上
// 组件js代码和html属性上可以用this.$filters.filterName来调用
import filters from "@/filters"
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
Vue.prototype.$filters = filters

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
})
