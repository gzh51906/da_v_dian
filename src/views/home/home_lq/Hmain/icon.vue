<template>
    <div  class="lq_cion">

<van-grid :border="false" :column-num="5">
  <van-grid-item  v-for="(item,index) in goodslist1"    :key="index"  text="文字" >
    <van-image :src="item.img" />
<span class="icon_title">{{item.lq}}</span>

  </van-grid-item>
  <!-- <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </van-grid-item>
   <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </van-grid-item>
   <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </van-grid-item> -->
</van-grid>



      <!-- <a href="#"   >
          <img src="https://9i.dvmama.com/nemo/20190605/2.jpg" alt="">
            <p>成长玩具</p>

      </a> -->

        </div>





</template>

<script>
export default {
    data() {
    return {
        goodslist1:[]
    }
  },


 async created() {
    let icondata = await this.$axios.get( 
      "https://www.easy-mock.com/mock/5d6e0eb0e1b7901d4dfd568c/lq/lq"
    );
     this.goodslist1 =icondata.data;
  },




}
</script>

<style scoped>
.icon_title {
    font-size: 0.11rem;
    line-height: 0.2rem;
    display: inline-block;
    margin-top: 1.625rem; 
}

</style>
