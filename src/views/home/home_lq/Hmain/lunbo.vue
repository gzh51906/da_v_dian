<template>
        <div  class="luobo_lq">
   <van-swipe :autoplay="3000" indicator-color="white" >
    <van-swipe-item  v-for="(item,index) in goodslist"    :key="index"    >
<img :src="item.imgUrl" alt="" >   
  </van-swipe-item>
</van-swipe>
        </div>
</template>

<script>
export default {
data() {
    return {
      current: 0,
      goodslist:[]
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  },


 async created() {
    let lunboList = await this.$axios.get( 
      "https://stc.davdian.com/topic/topic_31016.json?_=1567413576152"
    );
//  console.log(lunboList.data.list.slice(1,5));
     this.goodslist =lunboList.data.list.slice(1,5);

  },

}

       




</script>
<style  scoped>

.luobo_lq{
  width: 100%;
   height: 5.5rem;
}

  .luobo_lq img{
    width: 100%;
    height: 100%;
  }

</style>

