<template>
  <div >
      <Form v-on="$listeners" />
      <Comment :postcomment="postcomment" :getComment="getComment" :iscommentLoad='iscommentLoad' />
  </div>
</template>

<script>
import Form from '@/components/Blogcomment/form.vue'
import Comment from "@/components/Blogcomment/comment.vue"
export default {
    components:{
        Form,
        Comment
    },
    props:{
        postcomment:{
            Array,
            default:[]
        },
        getComment:{
            Array,
            default:[]
        },
        iscommentLoad:{

        }
    },

}
</script>

<style>

</style>