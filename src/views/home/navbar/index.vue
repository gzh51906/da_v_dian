<template>
  <div class="navbar">
    <van-nav-bar>
      <left slot="left"></left>
      <title1 slot="title"></title1>
      <right  slot="right"></right>
    </van-nav-bar>
  </div>
</template>

<script>
import left from "./Znavbar/left"
import title1 from "./Znavbar/title"
import right from "./Znavbar/right"
export default {
  data() {
    return{
      value:""
    }
  },
  methods: {
  },
  components:{
    left,
    title1,
    right
  }
};
</script>

<style scoped>
.navbar {
  background-image: url(https://9i.dvmama.com/app/wechatSkin/20190515/hometop.png);
}
.van-nav-bar {
  background-color: #ff92ad;
  height: 44px;
}
.van-nav-bar__right{
    right: 10px;
}

</style>