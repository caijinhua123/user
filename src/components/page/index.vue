<template>
  <div class="page">
    <!-- 当current === 1时为ture，disabled:ture，class添加disabled -->
    <a
      :class="{ disabled: current === 1 }"
      @click="handleClick(1)
      "
    >
      |<
    </a>
    <a :class="{ disabled: current === 1 }" @click="handleClick(current--)"><</a>
    <a v-for="key in creatpage" @click="handleClick(key) " :class="{active:key==current }">{{ key }}</a>
    <a
      :class="{ disabled: current === pageNumber }"
      @click="handleClick(current++)"
      >></a
    >
    <a
      :class="{ disabled: current === pageNumber }"
      @click="handleClick(pageNumber) "
      disabled
      >>|</a
    >
  </div>
</template>

<script>
export default {
  name: "Page",
  props: {
    total: {
      //总数据量
       Number,
      default: 10,
    },
    limit: {
      //每页显示数据量
       Number,
      default: 10,
    },
    current: {
      //当前页码
       Number,
      default: 1,
    },
    visibleNumber: {
       Number,
      default: 0,
    },
  },
  methods: {
     handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      // this.current=newPage
      // 抛出一个事件
      this.$emit("pageChange", newPage);
    },
  },
  computed: {
    //总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    //动态生成页码
    visibleMin() {
      let min = Math.floor(this.current - this.limit / 2);
      if (this.current >= this.pageNumber - this.limit / 2) {
        min = this.pageNumber - this.limit 
      }
      if (min <= 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = Math.floor(this.current/1 + this.limit / 2);
      if (this.visibleMin === 1) {
        max = this.visibleMin + this.limit/1 - 1;
      }
      if (max >= this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    creatpage() {
      let pageArr = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        pageArr.push(i);
      }
      return pageArr;
    },
  },
};
</script>

<style lang="less" scoped>
.page{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  a {
  color: rgb(0, 0, 0);
  margin-left: 10px;
  &:hover {
    cursor: pointer;
    color: rgb(0, 139, 211);
  }
  &.active {
    color: rgb(255, 49, 41);
    font-weight: bold;
  }
  &.disabled {
    cursor: not-allowed;
    color: rgb(171, 171, 179);
  }
}
}

</style>