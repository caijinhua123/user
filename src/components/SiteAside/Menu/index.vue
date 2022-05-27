<template>
<ul class="contact">
    <li v-for="item in items" >
        <Router-link :to='item.name' :exact='item.exact'>
            <div class="icon">
                <Icon :type="item.icon" :size="25"/>
            </div>
            <span>{{ item.title }}</span>
        </Router-link>
    </li>
</ul>
</template>
<script>
import Icon from "@/components/Icon/Icon.vue"
const items=[
             {
                 name:'/',
                 title:'首页',
                 icon:'home',
                 exact:true//是否精确匹配
             },
             {
                 name:'/Blog',
                 title:'文章',
                 icon:'blog',
                 exact:false
             },
             {
                 name:'/about',
                 title:'关于我',
                 icon:'about',
                 exact:true
             },{
                 name:'/project',
                 title:'项目&&效果',
                 icon:'code',
                 exact:true
             },{
                 name:'/message',
                 title:'留言板',
                 icon:'chat',
                 exact:true
             },
         ]
export default {
    components:{
        Icon
    },
    methods:{
         clickli(link){
             if(link ===location.pathname){
                return 'clcik' 
             }
            
         }
    },
    data(){
        return { items }
    }
}
</script>

<style lang='less' scoped>
    .contact{
        list-style: none;
        font-size: 25px;
        margin: 0;
        padding:0;
        background-color: rgb(30,30,30);
        li{
        line-height: 50px;
        a{
        position: relative;
        padding-left: 120px ;
        display: block;
        // width: 100%;
        height: 100%;
        text-decoration: none;
        color: rgb(133,133,133);
        span{
            margin-left: 20px;
        }       
        .icon{
            display: inline-block;
            
        }}
        &:hover{
            a{
                color: aliceblue
            }
        }
        }
        .router-link-active{
            color: aliceblue;
             background-color: rgb(53, 53, 53);
        }
    };
</style>