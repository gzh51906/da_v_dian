<template>
  <div>
    <van-nav-bar left-arrow @click-left="goto(-1)" fixed>
      <van-tabs v-model="active" slot="title">
        <van-tab title="商品"></van-tab>
        <van-tab title="详情"></van-tab>
      </van-tabs>
      <van-icon name="wap-home" slot="right" color="#195" :size="20" />
    </van-nav-bar>
    <info :goods="goods" :active="active"/>
    <sisa :goods="goods"/>
  </div>
</template>

<script>
import info from "./iteminfo"
import sisa from "./sisa"
export default {
  name: "gitem",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
      return {
          active:0
      }
  },
  components:{
      info,
      sisa
  }
};
</script>

<style scoped>
</style>