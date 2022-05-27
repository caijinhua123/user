<template>
  <i class="iconfont " :class="setIcon" :style='{
      fontSize:size + "px"
    }'></i>
</template>

<script>
export const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};
export default {
  name:'Icon',
  props:{
      type:{
          String,//字符串
          required: true,//不为空
      },
      size:{
          String,//字符串
          default:20,//默认20
      }
  },
  computed:{
      setIcon(){
           return classMap[this.type]
      }  
      
  },
  method:{
      setIcon(name){
          return classMap[name]
      }
  }
}
</script>

<style scoped>
    @import '//at.alicdn.com/t/font_2164449_nalfgtq7il.css';
</style>