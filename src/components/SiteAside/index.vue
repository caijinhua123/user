<template>
    <div class="sitea-side" >
        <div class="header" v-if="data.avatar">
            <Header :src="data.avatar" size='250'/>
        </div>
        <h1>{{ data.siteTitle }}</h1>
        <div class="menu">
            <Menu />
        </div>
        <div class="contact" >
        <Contact />
        </div>
        <p>
           {{ data.icp }}
        </p>
    </div>
</template>

<script>
import Menu from '@/components/SiteAside/Menu/index.vue'
import Contact from '@/components/SiteAside/Contact/index.vue'
import Header from '@/components/Header/index.vue'
import {mapState } from 'vuex'
export default {
    components:{
        Menu,
        Contact,
        Header
    },
    computed:{
        ...mapState('setting',['data'])
    },
}
</script>

<style lang='less' scoped>
@import '~@/style/var.less';
.sitea-side{
  width:500px;
  height: 100vh;
  border: 1px solid;
  position: relative;
  background-color: rgb(30,30,30);
  overflow-x: hidden;
  overflow-y: auto;
  p{
      text-align: center;
  }
  h1{
       text-align: center;
       font-size:2.5em ;
       color: aliceblue;
  }
  .header{
      padding: 0 0;
      margin-left: 50%;
      transform: translate(-50%);
  }
  .contact{
      padding: 5px 0;
  }
  .menu{
      padding: 0 0;
  }
}
</style>