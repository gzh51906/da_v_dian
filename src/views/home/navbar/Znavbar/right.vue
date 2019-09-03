<template>
  <van-icon>
    <ul>
      <li @click="goto('goodslist')">
        <van-icon name="apps-o" size="20px" color="#ffe8ed"></van-icon>
        <P>分类</P>
      </li>
      <li @click="goto('shopcart')">
        <van-icon name="shopping-cart-o" size="20px" color="#ffe8ed"></van-icon>
        <P>购物车</P>
      </li>
    </ul>
  </van-icon>
</template>

<script>
export default {
    name: 'right',
};
</script>

<style scoped>
li {
  float: left;
  margin-left: 15px;
}
p {
  font-size: 12px;
  color: #ffe8ed;
}
</style>