import vue from 'vue'
import vuex from 'vuex'
import setting from './setting'
import banner from './banner'
import message from './message'
import project from './project'
vue.use(vuex)
const store =new vuex.Store({
    strit:true,
    modules:{
        setting,
        banner,
        message,
        project
    },
    
})
// window.store=store
export default store