<template>
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item>
        <img :src="goods.goodsImg " class="img" />
      </van-swipe-item>
      <van-swipe-item v-for=" item of goods.pictures" :key="item.imgUrl">
        <img :src="item.imgUrl" class="img" />
      </van-swipe-item>
    </van-swipe>
    <section>
      <span class="memPrice">{{memPrice}}</span>
      <del class="originPrice">{{originPrice}}</del>
      <span class="discountPrice">{{discountPrice}}折</span>
    </section>
    <span class="goods_name">{{goods.goodsShortName}}</span>
    <div class="shareRecommend">{{goods.shareRecommend}}</div>
    <serve/>
    <div>
        <img :src="e.detailUrl" v-for="e of goods.details" :key="e.detailPos" class="img">
    </div>
  </div>
</template>

<script>
import serve from "./serve"
export default {
  name: "ccc",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    },
    active: {
      type: Number,
      default: 0
    }
  },
  computed: {
    memPrice() {
        return this.goods.sales[this.goods.goodsId].shopPrice;
    },
    originPrice() {
      return this.goods.sales[this.goods.goodsId].marketPrice;
    },
    discountPrice() {
      return parseFloat(this.memPrice / this.originPrice).toFixed(1);
    }
  },
  components:{
      serve
  }
};
</script>

<style scoped>
.goods{
    margin-top: 46px;
    height: 567px;
    overflow-y: scroll;
}
.img {
  width: 100%;
}
.memPrice {
  font-size: 25px;
  color: #ff4a7d;
  font-family: "PingFangSC-Medium";
}
.memPrice::before {
  content: "￥";
  font-size: 14px;
}
.originPrice {
  text-decoration: line-through;
  font-size: 12px;
  color: #999;
  font-weight: 300;
  margin: 0 5px;
  margin-right: 0;
  top: -2px;
}
.originPrice::before {
  content: "￥";
}
.discountPrice {
  font-size: 12px;
  background: #ff4a7d;
  padding: 3px 7px;
  line-height: 1;
  color: #fff;
  font-weight: 500;
  border-radius: 15px;
  display: inline-block;
  -webkit-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
  margin-top: -3px;
}
.goods_name {
    line-height: 22px;
    font-size: 16px;
    color: #333333;
    vertical-align: middle;
}
.shareRecommend{
    font-size: 14px;
    line-height: 20px;
    margin-top: 10px;
    color: #666;
    text-align: justify;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
}
</style>