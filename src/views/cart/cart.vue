<template>
  <div id="cart">
    <div class="ab">购物车</div>
    <div class="abb">
        <img src="../../../public/img/noLogin.png" alt="">
        <p class="ap">愿望满满，登录后好货才能送到手中！</p>
        <p class="app"><button @click="goto('/login')">去登录</button></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
     goto(name) {
      this.$router.push(name);
    }
  }
};
</script>
<style scoped>
#cart{background: #F5F5F5;}
.ab{width: 100%;;font-size: 17px;background: #D33D3C;color: #fff;text-align: center;padding: 10px 0;}
.abb{text-align: center;margin-top: 100px;}
.abb img{width: 80%;}
.ap{font-size: 15px;margin-top: 10px;}
.app{margin-top: 15px}
.app button{
    width: 60%;
    padding: 10px;
    background: #fff;
    border: solid 1px #ff0000;
    color: #ff0000;
    font-size: 14px;
    border-radius: 5px}
</style>