<template>
  <div class="Home" @resize="" @wheel="get_clienty">
             <Load v-show="!Isload" /> 
    <ul class="li_main" ref="li_img" @transitionend='check_Ismove'>
      <li v-for="(item, index) of data">
        <Home :src='item.bigImg' :size="800" :placeholder='item.midImg' :description="item.description" :title="item.title" />
      </li>
    </ul>
    <div @click="get_clientY(page - 1)" class="arrowUp" v-show="page !== 0">
      <Icon type="arrowUp" />
    </div>
    <div
      @click="get_clientY(page + 1)"
      class="arrowDown"
      v-show="page !== data.length - 1"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="li_button">
      <li
        v-for="(item, index) of data"
        :class="getpage(index)"
        @click="get_clientY(index)"
      ></li>
    </ul>
  </div>
</template>
<script>
import Icon from "@/components/Icon/Icon.vue";
import Home from './Homeimg.vue'
import Load from '@/components/Load/index.vue';
import { mapState  } from 'vuex'
export default {
  components: {
    Icon,
    Home,
    Load
  },
  data() {
    return {
      // Banners: [],//获取数据生成页面
      page: 0,//当前页数
      li_ClientY: 0,//对应页数的top
      Ismove:false,//是否在移动中
        Isload:false,//是否加载完成
    };
  },
  computed:{
    ...mapState('banner',['data'])
  },
  methods: {
    getpage(index) {
      //选中样式
      if (index === this.page) {
        return "active  ";
      }
    },
    get_clientY(to) {
      //页面点击后切换
      this.page = to;
      this.li_ClientY = this.$refs.li_img.clientHeight;
      console.log(this.li_ClientY);
      this.$refs.li_img.style.marginTop = `-${this.page * this.li_ClientY}px`;
    },
    get_clienty() {
      //滑动页面切换
      this.$refs.li_img.addEventListener("wheel", this.mousewheel);
    },
    check_Ismove(){
        this.Ismove=false;
    },
    mousewheel(e) {
    //   console.log(e);
      if(!this.Ismove ){
          
       //判断是否超出
          if (e.deltaY > 100) {
              this.Ismove=true;
              this.page++
              if (this.page > this.data.length - 1) {
                this.page = this.data.length - 1;
                this.Ismove=false;
            } 
            this.get_clientY(this.page);
      }
      if (e.deltaY < -100) {
              this.Ismove=true;
              this.page--
              if (this.page < 0) {
                    this.page = 0;
                    this.Ismove=false;
                }
        this.get_clientY(this.page);
      }
      }
      
    },
  },
  async beforeCreate() {
    //加载数据，生成虚拟dom树之前
    await this.$store.dispatch("banner/getbanner")
    this.Isload=true
    console.log(this.data);
  },
};
</script>

<style lang='less' scoped>
@import "@/style/var.less";
@move: 10px;
.Home {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  .li_main {
    width: 100%;
    height: 100%;
    transition: 1s;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .arrowUp {
    .self-center();
    top: 5%;
    padding: 15px;
    transform: translate(-50%);
    animation: move_up 2s infinite;
    color: rgb(170, 170, 170);
  }
  .arrowDown {
    .self-center();
    color: rgb(170, 170, 170);
    top: 95%;
    transform: translate(-50%);
    animation: move_down 2s infinite;
    padding: 15px;
  }
  .li_button {
    list-style: none;
    position: fixed;
    .self-center();
    left: 93%;
    li {
      width: 10px;
      height: 10px;
      background-color: white;
      border: 2px solid;
      border-radius: 50%;
      margin-bottom: 5px;
      &.active {
        background-color: rgb(7, 7, 7);
        border: 2px solid;
        border-color: white;
      }
    }
  }
}
@keyframes move_down {
  0% {
    transform: translateY(-@move);
  }
  30% {
    transform: translateY(@move);
  }
  50% {
    transform: translateY(5px);
  }
  70% {
    transform: translateY(@move);
  }
  100% {
    transform: translateY(-@move);
  }
}
@keyframes move_up {
  0% {
    transform: translateY(@move);
  }
  30% {
    transform: translateY(-@move);
  }
  50% {
    transform: translateY(-5px);
  }
  70% {
    transform: translateY(-@move);
  }
  100% {
    transform: translateY(@move);
  }
}
</style>