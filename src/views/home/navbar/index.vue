<template>
  <div class="navbar">
    <van-nav-bar>
      <left slot="left"></left>
      <titlel slot="title"></titlel>
      <right  slot="right"></right>
    </van-nav-bar>
  </div>
</template>

<script>
import left from "./Znavbar/left"
import titlel from "./Znavbar/titlel"
import right from "./Znavbar/right"
export default {
  name: 'Znavbar',
  data() {
    
    return{
      value:""
    }
  },
  methods: {
  },
  components:{
    left,
    titlel,
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