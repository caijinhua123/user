<template>
<div class="Layout">
    <slot name='left'></slot> 
    <slot name='main'></slot>
    <slot name='right' ></slot>
         
</div>
  
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
    .Layout{
        width: 100%;
        height: 100vh;
        display: flex;
        margin: 0;
        overflow-x: hidden;
        .right,
        .left{
        overflow: hidden;
        flex: 0 0 auto;
        }
        .main{
        overflow: auto;
        flex:1 1 auto;
        }
    }

</style>