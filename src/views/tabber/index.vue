<template>
  <div class="start">
        <van-tabbar v-model="active" active-color="#fc345f"
        v-if="this.$route.name=='home' | this.$route.name=='book' | this.$route.name=='cart'| this.$route.name=='my'| this.$route.name=='search'"
        >
          <van-tabbar-item 
          v-for="(ele,index) in datalist"
            :key="index" 
            :to="ele.url"
            :name="ele.home" 
          :icon="ele.icon"
            >
          {{ele.text}}
          </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  name: 'tabber',
data() {
    return {
      active: "home",
      datalist: [
        {
          name: "home",
          text: "首页",
          url: "/home",
          icon: "home-o"
        },
        {
          name: "search",
          text: "学院",
          url: "/college",
          icon: "search"
        },
        {
          name: "friends",
          text: "小书库",
          url: "/book",
          icon: "friends-o"
        },{
          name: "cart",
          text: "购物车",
          url: "/cart",
          icon: "shopping-cart-o"
        },
        {
          name: "my",
          text: "我的",
          url: "/my",
          icon: "contact"
        },
      ]
    };
  }
}
</script>

<style >
.start{
   position:fixed;
   width: 100%;
   height: 50px;
    bottom:0;
    z-index: 9;
}
</style>