<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon(1)" />
    <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon(2)" />
    <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton(1)" />
    <van-goods-action-button type="danger" text="立即购买" @click="onClickButton(2)" />
  </van-goods-action>
</template>

<script>
export default {
  name: "sisa",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    onClickIcon(r) {
      if (r == 1) {
        alert("没有客服");
      } else {
        this.goto("/shopcart");
      }
    },
    onClickButton(r) {
      this.$store.commit("addgoods",this.goods)

      r == 2 && this.goto("/shopcart");
    }
  }
};
</script>

<style>
</style>