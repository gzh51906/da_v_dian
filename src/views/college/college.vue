<template>
    <div>
        
       <coll/>

       
    </div>
</template>

<script>
import coll from "./coll_lq"
export default {
  components:{
      coll
    },
   created() {
  this.$toast.loading({
  mask: true,
  message: '加载中...',
  duration:2000
});




  }
}
</script>

<style>

</style>
