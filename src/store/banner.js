import {getBanners} from '@/api/banner.js'
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
        async getbanner(ctx){
            if(ctx.state.data.length){
                return
            }
            ctx.commit('setLoad',true)
           const res =  await getBanners()
           console.log(res);
           ctx.commit('setData',res)
            ctx.commit('setLoad',false)
        }
    }
}