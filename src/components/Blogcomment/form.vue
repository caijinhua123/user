<template>
  <form @submit.prevent="postForm"  ref="sumb">
      <input type="text" maxlength="10" placeholder="请填写昵称" class="name" v-model="name" @input="clear"> 
      <span class="name_number">{{ name.length }}/10</span>
      <p >{{errName}}</p>
      <textarea class="content" maxlength="300" placeholder="请填写评论"  v-model="content"  @input="clear" >{{ content }}</textarea>
      <span class="content_number">{{ content.length }}/300</span>
      <p>{{errcontent}}</p>
      <button class="submit" :disabled='isLoad' >提交</button>
  </form>
</template>

<script>
export default {
    components:{
    },
    data(){
        return {
            name:'',
            content:'',
            errName:'',
            errcontent:'',
            isLoad:false
        }
    },
    methods:{
        postForm(e){
            // console.log(e);
            if(this.name===''){
                this.errName='请填写昵称'
                return
            }
            if(this.content===''){
                this.errcontent='请填写内容'
                return
            }

            this.isLoad = true;
            this.$emit('submit',this.name,this.content,()=>{//向上抛出事件 ，事件名为submit
                showMessage({content:'成功发表',type:'info',duration:1000,container:this.$refs.sumb})
                 this.name=''
                 this.content=''
                this.isLoad = false;
            })
        },
        clear(){
            this.errcontent=''
            this.errName=''
        }
    }
}
</script>

<style lang='less' scoped>
form{
    overflow-x: hidden;
    padding: 40px;
    position: relative;
    .name_number{
        position: absolute;
        font-size: 12px;
        right: 610px;
        top: 50px;
    }
    .content_number{
        position: absolute;
        font-size: 12px;
        right: 210px;
        bottom: 150px;
    }
    .name{
        display: block;
        width: 400px;
        height: 30px;
        border: 1px dashed;
        border-color: rgb(138, 138, 138);
        &:focus{
            border: 1px dashed ;
            outline:none;
            border-color: rgb(24, 24, 24);
        }
    }
    .content{
        display: block;
        width: 800px;
        height: 150px;
        line-height: 30px;
        border: 1px dashed ;
        border-color: rgb(138, 138, 138);
        &:focus{
            border: 1px dashed ;
            outline:none;
            border-color: rgb(24, 24, 24);
        }
    }
    p{
        padding: 5px 0;
        color: #d73a49;
    }
    .submit{
        width: 120px;
        height: 40px;
        font-size: 18px;
        color: white;
        border-radius: 10px;
        background-color: rgb(64, 147, 202);
        border: none;
       &:disabled {
        background-color: rgb(121, 162, 189);
        cursor: not-allowed;
        } 
    }
}
</style>