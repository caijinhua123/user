<template>
  <ul class="data-list-container" v-if="getComment && getComment.data && getComment.data.rows"> 
    <li  v-for="(item) of getComment.data.rows" >
      <Header :src="item.avatar" :size="44" />
      <div class="data">
        <div class="nickname">{{ item.nickname }}</div>
        <div class="content">{{ item.content }}</div>
        <div class="time">{{Creatdata(item.createDate,true)}}</div>
      </div>
    </li>
    <div class="load" v-if="iscommentLoad">
    <Load  v-if="iscommentLoad" />
    </div>
  </ul>
</template>

<script>
import Header from "@/components/Header/index.vue"
import Creatdata from "@/utils/Creatdata.js"
import Load from '@/components/Load/index.vue'
export default {
    components:{
        Header,
        Load
    },
    data(){
        return {
            url:"https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg"
        }
    },
    props:{
        // postcomment:{
        //     Array,
        //     default:[]
        // },
        getComment:{
            Array,
            default:[]
        },
        iscommentLoad:{
        }
    },
    methods:{
        Creatdata
    }
}
</script>

<style lang="less" scoped>

.data-list-container {
  list-style: none;
  margin: 0;
  padding: 0 30px;
}
li {
  display: flex;
  border-bottom: 1px solid lighten(#b4b8bc, 20%);
  padding: 20px 0;
}
.avatar-container {
  margin-right: 15px;
}
.nickname {
  color: darken(#7ebf50, 10%);
  margin-bottom: 10px;
}
.content {
  font-size: 14px;
}
.data {
    padding: 0 15px;
  flex: 1 1 auto;
  position: relative;
}
.time {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: #b4b8bc;
}
.load{
 display: block;
 width: 100%;
 height: 50px;
 position: relative;
}
</style>