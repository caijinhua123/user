import {getSetting} from '@/api/setting.js'
import  set  from '@/utils/title'
export default {
    namespaced:true,
    state:{
        loading:false,
        data:[]
    },
    mutations:{
        setLoad(state,payload){
            state.loading = payload
        },
        setData(state,payload){
            state.data = payload
        }
    },
    actions:{
        async getdata(ctx){
            ctx.commit('setLoad',true)
           const res =  await getSetting()
           ctx.commit('setData',res.data)
            ctx.commit('setLoad',false)
            set.setSite(res.data.siteTitle)
            // console.log();
        }
    }
}