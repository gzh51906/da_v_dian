<template>
  <div id="app">
    <!-- <h2>1</h2> -->
    <router-view />
    <tabbar />
  </div>
</template>

<script>
import tabbar from "./views/tabber";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    tabbar
  },methods: {
    changeActive(index, path) {
      console.log(index, path);
      this.active = index;
    },
    goto(path){
      this.$router.push({path})
    },
    logout(){
      this.$store.commit('logout');

      if(this.$route.meta.requiresAuth){
        this.$router.push({
          path:'/login',
          query:{targetUrl:this.$route.fullPath}
        })
      }
    }
  },
  created() {
    console.log(this.$route, this.$router); //this.$route获取当前路由信息
    this.active = this.$route.path;
  }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
</style>
