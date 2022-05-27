<template>
  <ul>
      <li v-for="(item,index) of blog.rows" :key='index' >
        <div class="thumb">
          <Router-link :to="{name:'BlogDetail',
          params:{
            id:item.id
          }}" >
            <img
              src="@/assets/default.gif"
              v-Lazy:src="item.thumb"
              :alt="item.title"
              :title="item.title"
            />
          </Router-link>
        </div>
        <div class="main">
          <Router-link :to="{name:'BlogDetail',
          params:{
            id:item.id
          }}" >
            <h2>{{ item.title }}</h2>
          </Router-link>
          <div class="aside">
            <span>日期：{{ getMoent(item.createDate) }} </span>
            <span>浏览：{{item.scanNumber}}</span>
            <span>评论 {{item.commentNumber}}</span>
            <a  class="">分类{{item.category.id}}</a>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
</template>

<script>
import imgurlconfig from "@/utils/imgurlconfig"
import Creatdata from '@/utils/Creatdata.js'
export default {
  props:{
    blog:{
            String,
            required: true, // 属性必传
        },
  },
  data(){
        return {
          imgurl:imgurlconfig(),
        }
        
    },
  methods:{
   getMoent(e){
        return  Creatdata(e)
        },
    detail(item){
          console.log(item.category.id);
          if(this.$route.path==`/Blog/cate/${item.category.id}`){
            return
          };
          this.$router.push(`/Blog/cate/${item.category.id}`)
        },
  },

  
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
     width:400px;
    //  position: absolute;
     right:0;
     background-color: rgba(30,30,30,0.7);
 }
}

</style>