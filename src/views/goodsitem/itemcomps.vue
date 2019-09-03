<template>
  <div class="df">
    <a class="good_item" v-for="item of data" :key="item.goods_id">
      <div class="good_img_container">
        <div class="img_container good_img_container">
          <img :src='item.goods_img' lazy="loaded" />
          <span class="img_label_sale">已售{{item.parentSaleVolumes}}</span>
        </div>
      </div>
      <div class="good_con">
        <div class="good_title">{{item.goods_name}}</div>
        <div class="goods4_price_bar">
              <span>{{item.shop_price}}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "itemcomps",
  props: {data:{
      type:Array,
      default(){
          return []
      }
  }},
  data() {
    return {};
  }
};
</script>

<style scoped>
.df{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.good_item{
    width: 45%;
}
.good_item img{
    width: 100%;
}
.good_img_container{
    position: relative;
}
.img_label_sale{
    position: absolute;
    right: 3px;
    bottom: 2px;
    font-size: 10px;
    color: #fff;
    background: rgba(0,0,0,.4);
    border-radius: 2px;
    padding: 2px;
    box-sizing: border-box;
    line-height: 1;
}
.good_title{
        margin-bottom: 6px;
    line-height: 19px;
    font-size: 12px;
    color: #666;
    white-space: inherit;
    -webkit-box-orient: vertical;
    height: 38px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-clamp: 2;
    padding-top: 5px;
}
.goods4_price_bar span{
    color: #ff4a7d;
}
.goods4_price_bar span::before{
    content: "￥"
}
</style>