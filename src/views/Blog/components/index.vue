<template>
    <Layout>
        <template #main >
            <div class="main" ref="main">
            <Load  v-if="!isLoad" />
            <Detail :detail='detaildata' :creatdata='creatdata' to='Blogcomment' />
            <Blogcomment v-if="isLoad" :iscommentLoad="iscommentLoad"  :postcomment="postcomment" :getComment="getcomment" v-on="{submit:handle}" id="Blogcomment" />
        </div></template>
        <template #right>
            <div class="right">
                <h2  >目录
                </h2>
            <BlogRight :rightlist="change" @select="selectType" />
            </div>
        </template>
    </Layout>
</template>

<script>
import Layout  from '@/components/Layout/index.vue'
import Detail from '@/components/detail//detail.vue'
import BlogRight from '@/components/List/index.vue'
import Load from '@/components/Load/index.vue'
import {blogdetail,comments,getComment} from '@/api/blog.js'
import Blogcomment from '@/components/Blogcomment/index.vue'
import Debounce from "@/utils/Debounce.js"
import Totop from '@/mixins/ToTop.js'
import set from '@/utils/title.js'
export default {
    mixins:[Totop('main')],
    components:{
        Layout,
        Detail,
        BlogRight,
        Load,
        Blogcomment
    }
    ,
    beforeDestroy(){//销毁组件后
        // console.log("销毁");
        console.log(this.$refs.main);
        this.$refs.main.removeEventListener('scroll',this.eventbus)
        this.$eventBus.$off('bottom',Debounce(this.addcomment))
         this.$eventBus.$off('busScroll',Debounce(this.moveSelect))

    }
    ,
    data(){
        return {
            detaildata:()=>{},//文章详情
            postcomment:()=>{},//提交评论
            getcomment:()=>{},//获取评论
            isLoad:false,
            creatdata:0,
            toc:[],
            tocSelect:'',//选中目录的id,将目录数组添加属性后获取
            Doms:[],
            iscommentLoad:false
        }   
    },
   async beforeCreate(){ 
       console.log(this.$route.params.id);
       let data =await blogdetail(this.$route.params.id)//文章详情
       this.detaildata = data.data
       
         set.setRouter(this.detaildata.title)
       this.isLoad=true
       this.getcomment =await getComment() //获取评论
       this.addchange(this.detaildata.toc) 
       this.doms();
    //    console.log(this.Doms);
    this.$refs.main.addEventListener('scroll',this.eventbus)
        //添加事件总线，并且监听
    },created(){
        //监听//监听到后执行事件
        //函数防抖
        this.$eventBus.$on('busScroll',Debounce(this.moveSelect))
        this.$eventBus.$on('bottom',Debounce(this.addcomment))
        //监听回到顶部事件
    },
    methods:{
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
     async  addcomment(){
         const adddata = await getComment()
         this.iscommentLoad=false
         if(adddata.data.rows.length >=100){//当数量超过100后不再展示
             return
         }
           adddata.data.rows.map((item) => { 
                this.getcomment.data.rows.push(item)
            })
        }
        ,
        doms(){//生成dom的列表
            const get=arr => { 
                arr.map((item) => { 
                    this.Doms.push(document.getElementById(item.anchor))
                if(item.children &&item.children){
                    get(item.children)
                }
             })
             }
            return get(this.toc)
        }
        ,
        selectType(i){
          location.hash = i.anchor
          this.tocSelect = i.anchor
          this.changeSelect(this.toc)
        },
      async  handle(name,content,fn){
            let nickname=name
            this.postcomment = await comments({blogId:this.$route.params.id,nickname,content}) //评论
            console.log(this.postcomment);
            this.getcomment.data.rows.unshift(this.postcomment.data)
            fn()
        },
        addchange(toc){//改变toc属性

         this.toc= toc.map(item => { 
                item.isSelect = false
                if(item.children && item.children.length){
                    this.addchange(item.children)
                }
                return item
             })
            return this.toc
        },
        changeSelect(toc){
            //清空选中
            this.addchange(toc)
            this.toc=toc.map(item => { 
                if(item.anchor === this.tocSelect){
                    item.isSelect = true
                }
                if(item.children && item.children.length){
                    this.changeSelect(item.children)
                }
                return item
             })
             return this.toc
        },
        moveSelect(){//滑动滚动条事件//判断到哪个dom了
        this.tocSelect=''
          for (const dom of this.Doms) {
              //判断dom的位置
              if(!dom){
                  continue;
              }
              if(dom.getBoundingClientRect().top<300 && dom.getBoundingClientRect().top>0){//在一定范围内
                  this.tocSelect = dom.id
              }else if(dom.getBoundingClientRect().top>300 && dom.getBoundingClientRect().top<document.querySelector('body').clientHeight){
                 //在下
                 if(this.Doms[this.Doms.indexOf(dom)-1]){
                    this.tocSelect = this.Doms[this.Doms.indexOf(dom)-1].id
                  } 
              } else if(dom.getBoundingClientRect().top<0 
              && this.Doms[this.Doms.indexOf(dom)+1] 
              &&this.Doms[this.Doms.indexOf(dom)+1].getBoundingClientRect().top>300){
                 //在上
                this.tocSelect = dom.id
              } 
                  this.changeSelect(this.toc)
          }
        }
    },
    computed:{
         change(){//改变toc属性
         const newtoc = (toc =[]) => { 
             return toc.map(t => ({ 
                 ...t,
                 isSelect:t.anchor === this.tocSelect,
                 children:newtoc(t.children)
              }))
          }
            return newtoc(this.toc)
        },
        changeLoad(){
            console.log("改变");
            return this.iscommentLoad
        }
    }
}
</script>

<style lang='less' scoped>
.right{
     height: 100vh;
     width:300px;
     right:0;
     background-color: rgba(30,30,30,0.7);
     h2{
         margin-left: 40px;
    cursor: pointer;
    p{
      margin: 0;
      margin-left: 15px;
      font-size: 16px;
      display: inline-block;
    }
    &.active{
    color: rgb(251,83,47);
    // font-weight: bold;
  }
  }
 }
</style>