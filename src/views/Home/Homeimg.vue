<template>
  <div class="image_back">
      <div class="imgLoad" ref="imgLoad" @mousemove="move">
            <imageLoader @load="this.load_img" :src='src' :size="size" :placeholder='placeholder' ref="imageLoad" />
      </div>

      <span class="title" ref="title"    >{{ title }}</span>
      <span class="description" ref="description">{{ description }}</span>
  </div>
</template>

<script>
import  imageLoader  from "@/components/ImageLoader";  
export default {
    components:{
        imageLoader,
    },
    data(){
        return{
        descriptionX:0,   
        titleX:0,
        }
        
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
        },
        description:{
            String,
            default:'无数据',
        },
        title:{
            String,
            default:'无数据',
        }

    },
    mounted() {
     this.descriptionX = this.$refs.description.clientWidth
     this.titleX =  this.$refs.title.clientWidth
        this.load_img()
         this.$refs.imgLoad.addEventListener('transitionend',() => { 
                this.$refs.imgLoad.style.left ='50%'
                this.$refs.imgLoad.style.left ='50%'
             })
     },
    methods:{
      async  load_img(){
            console.log('加载完成');
        this.$refs.description.style.width=0
        this.$refs.title.style.width=0

         this.$refs.description.clientWidth;
        this.$refs.title.style.transition = 'all 2s';
        this.$refs.title.style.width=this.titleX +'px'


         this.$refs.title.clientWidth;//reflow，重排，防止之间变成下方的宽度
                this.$refs.description.style.transition = 'all 2s';
                this.$refs.description.style.width=this.descriptionX +'px'
        // setTimeout(() => { 
        //     if(this.$refs.title){
        //         this.$refs.title.clientWidth;//reflow，重排，防止之间变成下方的宽度
        //         this.$refs.description.style.transition = 'all 2s';
        //         this.$refs.description.style.width=this.descriptionX +'px'
        //     }
        // },2000)
        
        },
        move(e){
            this.$refs.imgLoad.style.transition = 'all 2s';
            // console.log(e.offsetX > this.$refs.imgLoad.clientWidth/2);
                this.Ismove=true
                if(e.offsetX<this.$refs.imgLoad.clientWidth/2 ){
               this.$refs.imgLoad.style.left = '55%'
                }else{
                    this.$refs.imgLoad.style.left ='45%'
                }
                if(e.offsetY < this.$refs.imgLoad.clientHeight/2){
                    this.$refs.imgLoad.style.top = '55%'
                }else{
                    this.$refs.imgLoad.style.top ='45%'
                }
           

        }
    }
}
</script>

<style lang='less' scoped>
@import '@/style/var.less';
.image_back{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    color: rgb(134, 131, 131);
    // border: 1px solid;
    // border-color:rgb(251,84,48) ;
    .imgLoad{
        width: 110%;
        height: 110%;
        .self-center()
    }
    .description,.title{
        position: absolute;
        display: block;
        left: 30px;
        top: 50%;
        font-weight: bold;
         font-size:30px ;
          position: absolute;
        letter-spacing: 3px;
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
            0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
        white-space: nowrap;//文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止
        overflow: hidden;
    };
    .title{
        top: 40%;
    };
};
</style>