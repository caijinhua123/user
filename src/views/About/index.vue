<template>
    <div class="about"><iframe :src="aboutData.data" frameborder="0"></iframe>
    <Load v-if="Loading" />
    </div>
</template>

<script>
import {getAbout} from '@/api/about'
import Load from '@/components/Load'
export default {
    components:{
        Load
    },
    data(){
        return{
            aboutData:{},
            Loading:true
        }
    }
    ,
   async beforeCreate(){
      this.aboutData =  await getAbout()
      this.Loading=false
      console.log(this.aboutData);
    }
}
</script>

<style>
.about{
    position: relative;
    height: 100vh;
}
iframe{
    width: 100%;
    height: 100%;
}
</style>