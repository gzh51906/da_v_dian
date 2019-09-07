<template>
  <div>
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="goto(-1)">
      <van-icon name="wap-home" slot="right" :size="20" @click="goto('home')"/>
    </van-nav-bar>
    <div v-if="isShow">{{isShow}}<Zempty/></div>
      <div v-else><fullcart/></div>
  </div>
</template>

<script>
import Zempty from "./isShow"
import fullcart from "./fullcrat"
export default {
  name: "shopcart",
  data() {
    return {}
  },
  computed: {
    isShow() {
      const len=this.$store.state.shopcart.cartlist.length
      if ( len == 0) {
        return true
      } else {
        return false
      }
    }
  },
  components: {
    Zempty,
    fullcart
  },
  created(){
  },
  mounted(){
    const {tab}=this.$parent.$refs
    tab&&tab.classList.add("unshow")
  },
  destroyed() {
    const {tab}=this.$parent.$refs
    tab.classList.remove("unshow")
  }
};
</script>

<style>
</style>