import Vue from 'vue'
import App from '@/App.vue'
import '@/mock/index.js'
import router from '@/router/index'
import '@/api/banner.js'
import showMessage from '@/utils/showMessage'
import Lazy from "@/directives/Lazy.js"
import store from '@/store/index.js'
window.showMessage =showMessage
store.dispatch("setting/getdata")
//注册全局自定义指令,图片懒加载
Vue.directive('Lazy',Lazy)

 new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

