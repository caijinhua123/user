import {getMessages,postMessage} from '@/api/message'
export default {
    namespaced:true,
    state:{
        loading:false,
        data:[],
        postloading:false,
        pushloading:false
    },
    mutations:{
        setLoad(state,payload){
            state.loading = payload
        },
        postLoad(state,payload){
            state.postloading = payload
        },
        setData(state,payload){
            state.data = payload
        },
        pushload(state,payload){
            state.pushloading = payload
        }
        ,
        upData(state,payload){
            state.data.data.rows.unshift(payload)
        },
        pushData(state,payload){
            state.data.data.rows.push(...payload)
        }
    },
    actions:{
        async getmessage(ctx){
            if(ctx.state.data.length){
                return
            }
            ctx.commit('setLoad',true)
           const res =  await getMessages()
           console.log(res);
           ctx.commit('setData',res)
            ctx.commit('setLoad',false)
        },
        async postmessage(ctx,payload){
            ctx.commit('postLoad',true)
            console.log(payload);
           const res =  await postMessage({'nickname':payload.id,'content':payload.contant})
           console.log(res);
           ctx.commit('upData',res.data)
           ctx.commit('postLoad',false)
        },
        async getmessageagin(ctx){
            ctx.commit('pushload',true)
           const res =  await getMessages()
           ctx.commit('pushData',res.data.rows)
           ctx.commit('pushload',false)
        }
    }
}