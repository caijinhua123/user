<template>

<div class="blog">
 <Layout>
      <template #main> <div class="main" ref="main">
            <Load v-if="!Isload" />
        <Blogmain v-if="Isload" :blog='blog' />
       <Page  v-show="Isload"  :total='total' :current='current'  :limit='limit'  @pageChange="Chagepage" />
       </div> 
       </template>
     <template #right> <div class="right">
      <h1>目录</h1>
          <h2 :class="{active:categoryid===-1?true:false}" @click="selectType(-1)">总数  <p>{{ blog.total }}</p></h2>
    <BlogRight :rightlist='blog_data' :total="blog.total" @select="selectType" :isSelect="categoryid" />
       </div> </template>
      </Layout>
</div>

</template>

<script>
import BlogRight from '@/components/List/index.vue'
import {Blog,getBlog} from '@/api/blog.js'
import Load from '@/components/Load/index.vue'
import Layout  from '@/components/Layout/index.vue'
import Page from '@/components/page/index.vue'
import Blogmain from './main.vue'
import Totop from '@/mixins/ToTop.js'
export default {
    mixins:[Totop("main")],
    components:{
        BlogRight,
        Load,
        Layout,
        Page,
        Blogmain
    },
    data(){
        return {
            blog:[],//文章详情列表
            blog_data:[],//文章目录
            categoryid:-1,
            current:1,
            limit:10,
            total:1,
            Isload:false,
        }
        
    },
    methods:{
        
        //根据类型改变路由
        selectType(i){
          
          if(i===-1){
            i=i
          }else{
            i= i.id-1
          }
          if(this.categoryid === i){
            return
          }
          this.current=1
          this.categoryid = i
          if(this.categoryid === -1){
            this.$router.push({
            name:'Blog',
            query:{
           page:this.current,
            limit:this.limit,
        }
          })
          }else{
            this.$router.push({
            name:'CategoryBlog',
            query:{
           page:this.current,
            limit:this.limit,
        },
            params: {
            categoryId:this.categoryid,
          },
          })
          this.total=this.blog_data[i].articleCount
          }
        },
        async getBlogdata(){
          this.blog =await Blog(this.categoryid,this.current,this.limit)
        } ,
      async  Chagepage(newPage){
        // 页码
        this.current=newPage
         //改变页码
        //  改变路由
        const query={
           page:this.current,
            limit:this.limit,
        }
        if(this.categoryid ===-1){
          this.$router.push({
            name:'Blog',
            query
          })
        }else{
          await this.getBlogdata()
          this.$router.push({
            name:'CategoryBlog',
            query,
            params: {
            categoryId:this.categoryid,
          },
          })
        }
        },
        
    },
     async beforeCreate() {
    //加载数据，生成虚拟dom树之前
    this.blog_data = await getBlog();//目录
    this.blog =await Blog()//文章详情
    console.log(this.blog_data);
    this.total=this.blog.total
    this.Isload=true
  }
  ,
   watch:{
    //监听路由变化
    //路由变化获取文章列表
    //右侧目录切换选中
    $route:{
     async handler(){
       const query=this.$route.query
       this.Isload=false
      console.log(this.categoryid);
      this.blog = await Blog(this.categoryid,query.page,query.limit);//目录
      this.Isload=true
      console.log(this.blog);

      }
    } 
  }
}
</script>

<style lang='less' scoped>
@import '@/style/var.less';
.blog{
  .main{
    line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
  }
}
     .right{
     height: 100vh;
     width:300px;
    //  position: absolute;
     right:0;
     background-color: rgba(30,30,30,0.7);
     h2{
    cursor: pointer;
    margin-left: 40px;
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
}

</style>