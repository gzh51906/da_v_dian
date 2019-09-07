<template>
  <div id="app">
    <!-- <h2>1</h2> -->
    <router-view />
    <div ref="tab"><tabbar /></div>
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




.clearfix::before {
  content: "";
  clear: both;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.unshow{
  display: none;
}

</style>
