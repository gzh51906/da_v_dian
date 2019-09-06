<template>
  <div>
    <van-card
      v-for="e of $store.state.shopcart.cartlist"
      :key="e.goods_id"
      :num="e.qty"
      :price="e.price"
      :title="e.alt"
      :thumb="e.img"
    >
      <div slot="footer">
        <van-button size="small" @click="dec(e.goods_id)">-</van-button>
        <van-button size="small" @click="add(e.goods_id)">+</van-button>
      </div>
      <div slot="bottom">
        <van-checkbox-group v-model="result">
          <van-checkbox :name="e.goods_id" @click="changel(e.goods_id)"></van-checkbox>
        </van-checkbox-group>
      </div>
    </van-card>
    <van-submit-bar :price="$store.getters.total*100" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" @click="all(checked)">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { SubmitBar, Checkbox, CheckboxGroup } from "vant";
Vue.use(SubmitBar)
  .use(Checkbox)
  .use(CheckboxGroup);
export default {
  name: "showshopgoods",
  data() {
    return {
      checked: false,
      result: []
    };
  },
  methods: {
    add(a) {
      this.$store.commit("addgoods", a);
    },
    dec(a) {
      this.$store.commit("decgoods", a);
    },
    onSubmit() {
      alert("?");
    },
    changel(a) {
      this.$store.commit("changecheck", a);
      this.isallcheck();
    },
    initcheck() {
      const { cartlist } = this.$store.state.shopcart;
      this.result = [];
      cartlist.forEach(e => {
        e.ischeck && this.result.push(e.goods_id);
      });
    },
    isallcheck() {
      const { cartlist } = this.$store.state.shopcart;
      const res = cartlist.every(e => e.ischeck);
      this.checked = res ? true : false;
    },
    all(r) {
      if (!r) {
        this.$store.commit("checkall");
      } else {
        this.$store.commit("cancelcheckall");
      }
      this.initcheck();
    }
  },
  created() {
    this.initcheck();
    this.isallcheck();
  }
};
</script>

<style>
</style>