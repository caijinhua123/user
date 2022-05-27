<template>
  <ul class="right_list" >

      <li v-for="(item,i) of rightlist" >
           <span @click="handleClick(item)"  :class="{active:Select(item,i)}">
             {{ item.name }}   <p>{{ item.articleCount }} </p></span>
          
          <List :rightlist='item.children'  @select="handleClick"/>
      </li>
  </ul>
</template>

<script>
export default {
  name:'List',
  props:{
    rightlist:{
      Array,
      default:()=>[]
    },
    total:{
      Number,
      default:0
    },
    isSelect:{
      Number,
      default:-1
    }
  },
  computed:{
  }
  ,
  methods:{
    
    handleClick(i){
      this.$emit('select',i)//选中事件
    },
    Select(item,i){
      if(item.isSelect){
        return item.isSelect
      }else if(this.isSelect===i){ 
        return true
      }
      return false
    }
  }
}
</script>

<style  lang="less" scoped>
.right_list{
  list-style: none;
  width: 100%;
  li{
    width: 100%;
    // min-height: 40px;
    line-height: 45px;
    cursor: pointer;
    span{
      // width: 50%;
      height: 100%;
      display: inline-block;
      font-size: 20px;
      
    p{
      margin: 0;
      margin-left: 15px;
      font-size: 16px;
      display: inline-block;
    }
    }
    .active{
    color: rgb(251,83,47);
    font-weight: bold;
  }
  }
}
</style>