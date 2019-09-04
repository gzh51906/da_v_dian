<template>
  <div>
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="goto('home')">
      <van-icon name="wap-home" slot="right" :size="20"/>

    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "shopcart",
  data(){
    return{
      
    }
  }
};
</script>

<style>
</style>