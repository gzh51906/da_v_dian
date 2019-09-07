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
  }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
    /* overflow-x: hidden;
            overflow-y: scroll; */
}
.default{
     width: 375px;
    height: 100%;
}
.default img{
       width: 375px;
    height: 100%;
}

/* .inner-container::-webkit-scrollbar {
    display: none;
     overflow-x: hidden;
    overflow-y: scroll;
} */


</style>
