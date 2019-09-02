<template>
  <div id="app">
    <router-view/>
    <tabbar/>
  </div>
</template>

<script>
  import tabbar from "./views/tabber"

export default {
  name: 'app',
data() {
    return {
      
    };
  },
  components: {
   tabbar
  }
}
</script>
<style>
    *{
      padding: 0;
       margin: 0;
    }
</style>
