<template>
  <div class="imgDiv">

      <img  :src="imgurl+placeholder" style='filter:blur(10px)' class="main-img" @load="Isload=true">
    <img :src="imgurl+src" :style='{
      transition: "all "+this.duration*0.001+"s",
      opacity:ImgOpacity
    }' @load="checkimg" class="main-img">
  </div>
</template>

<script>
import imgurlconfig from "@/utils/imgurlconfig"
export default {
    component:{
    },
    props:{
        src:{
            String,
            required: true, // 属性必传
        },
        size:{
            Number,
            default:800,
        },
        placeholder:{//占位图片地址
            String,
            required:true,
        },
        duration:{//间隔时间
            Number,
            default:5000,
        }
    },
    data(){
      return {ImgOpacity:0,//图片透明度变化
      imgurl:imgurlconfig(),
      } 
    },
    methods:{
        checkimg(){
            this.ImgOpacity=1
        },
    }
}
</script>

<style>
    .main-img{
        width: 100%;
        height: 100%;
        position: absolute;
    }
    .imgDiv{
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>