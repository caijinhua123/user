<template>
  <div id="app">
    
    <div class="layout">
      <Layout>
      <template #left> <div class="left">
    <div>
      <SiteAside />
    </div>
       </div> </template>
     <template #main> <div class="main" ref="main">
      <RouterView />
       </div> </template>
       <!-- <template #right> <div class="right">
       right
       </div>  -->
       <!-- </template> -->
      </Layout>
    </div>
    <Top />
  </div>
</template>

<script>
import SiteAside from '@/components/SiteAside/index.vue'
import Layout  from '@/components/Layout/index.vue'
import Top from '@/components/ToTop/index.vue'
import '@/utils/eventBus.js'
export default {
  name: 'App',
  components: {
    SiteAside,
    Layout,
    Top
  },
   data() {
    return {
      // classMap,
    }},
    beforeCreate(){
      window.document.body.style.margin =0
    }
    ,
    methods:{
      checkImage(){
        console.log('图片加载完成');
      }
    }
}
</script>

<style lang="less" scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  margin-left: 0;
  padding: 0;
  .Empty{
  width:500px;
  height: 500px;
  border: 1px solid;
  position: relative;
}
.contant{
  width: 500px;
  height: 500px;
  border: 1px solid;
}
.menu{
  width:500px;
  height: 500px;
  border: 1px solid;
  position: relative;
}
.layout{
  width: 100vw;
  height: 100vh;
  // border: 1px solid; 
  // display: flex;
}
}

</style>
