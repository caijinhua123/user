<template >
    <Layout>
        <template #main>
    <div class="main" ref="main">
        <Blogcomment v-if="isLoad" :iscommentLoad="iscommentLoad"  :postcomment="postcomment" :getComment="data" v-on="{submit:handle}" id="Blogcomment"  />
    </div></template>
    </Layout>
</template>

<script>
import Blogcomment from '@/components/Blogcomment/index.vue'
import { mapState } from 'vuex'
import Totop from '@/mixins/ToTop.js'
import Layout from '@/components/Layout/index.vue'
export default {
    mixins:[Totop("main")],
    components:{
        Blogcomment,
        Layout
    },
    data(){
        return {
            isLoad:false,
            commentData:{},
            iscommentLoad:false,
            postcomment:{}
        }
    },
    computed:{
        ...mapState('message',['data','loading','postloading'])
    }
    ,
   async beforeCreate(){
        await this.$store.dispatch('message/getmessage')
       this.isLoad =true
       
    },mounted(){
        this.$refs.main.addEventListener('scroll',this.eventbus)
        this.$eventBus.$on('bottom',this.handled)
    },
    methods:{
      async  handle(id,contant,fn){
            await this.$store.dispatch('message/postmessage',{id,contant})
            fn()
        },
        eventbus(){
            // console.log("监听中");
            //触发事件.事件总线
            //当滚动条滑到底时
            if(this.$refs.main.scrollHeight >= this.$refs.main.scrollTop+this.$refs.main.clientHeight-10
             &&this.$refs.main.scrollHeight <= this.$refs.main.scrollTop+this.$refs.main.clientHeight+10){
                if(this.iscommentLoad){
                    return
                }
                console.log('到达底部');
                this.iscommentLoad=true
                this.$eventBus.$emit('bottom',this.$refs.main)
            }
        },
       async handled(){
           console.log(1111);
           
        await this.$store.dispatch('message/postmessage',this.postcomment)
         this.iscommentLoad =false
        }
    },
    
}
</script>

<style lang='less' scoped>
</style>