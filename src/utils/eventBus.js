import Vue from 'vue'
Vue.prototype.$eventBus =new Vue({})
const  eventBus=Vue.prototype.$eventBus
export default eventBus