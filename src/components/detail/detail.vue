<template>
  <div class="main" v-if="detail && detail.title">
    <h1>{{ detail.title }} </h1>
    <span>日期：{{ creat(detail.createDate) }}</span>
    <span>浏览：{{ detail.scanNumber }}</span>
    <a :href="`#${to}`">评论:{{ detail.commentNumber }}</a >
    <span>分类: {{ detail.id}}</span>
    <div v-html="detail.htmlContent" class="markdown-body">
      
    </div>
  </div>
</template>

<script>
import Creatdata from '@/utils/Creatdata.js'
export default {
  props:{
    detail:{
          String,
          required: true, // 属性必传  
    },
    creatdata:{
      Number,
      default:0
    },
    to:{
      String
    }
  },
  data(){
    return {
      // creat:Creatdata(this.detail.createDate)
    }
    
  },
methods:{
  creat(e){
   return Creatdata(e)
  }
}
}
</script>

<style lang="less" scoped>
@import '@/style/markdown.css';
@import  'highlight.js/styles/github.css';
.main{
  box-sizing: border-box;
  padding: 30px;
  width: 100%;
  // height: 100%;
  position: relative;
  overflow-x: hidden;
  scroll-behavior: smooth;
  span{
    font-size: 16px;
    color: rgb(127, 130, 133);
    margin-left: 15px;
  }
  a{
    font-size: 16px;
    color: rgb(127, 130, 133);
    margin-left: 15px;
    text-decoration: none;
  }
}
</style>