<template>
  <div class="empty_canontianer">
      <Icon type='empty' />
      <span> {{ text }} </span>
  </div>
</template>

<script>
import Icon from '@/components/Icon/Icon.vue'
export default {
    name:"Empty",
    components:{
        Icon
    },
    props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
}
</script>

<style lang='less' scoped>
@import '~@/style/var.less';
.empty_canontianer{
    .self-center();
     text-align: center;
     color: rgb(135,139,153);
}
</style>