<template>
    <img :src="imgurl+src" :style='{
      width:size + "px",
      height:size + "px"
    }' class="header">
</template>

<script>
import imgurlconfig from "@/utils/imgurlconfig"
export default {
  name: 'headers',
  data(){
    return {
      imgurl:imgurlconfig(),
    }
  },
  props: {
    src:{
      String,//字符串格式
      required: true, // 属性必传
    },
    size:{
      default:150,
      Number
    }
  }
}
</script>
<style lang="less">
img.header{
  border-radius: 50%;
}
</style>
