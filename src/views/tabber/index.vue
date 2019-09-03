<template>
  <div class="start">
        <van-tabbar v-model="active" active-color="#fc345f">
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
        },
      ]
    };
  }
}
</script>

<style scoped>
.start{
   position:fixed;
    bottom:0;
    z-index: 9;
}
</style>