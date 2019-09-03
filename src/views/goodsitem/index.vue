<template>
  <div>
    <van-nav-bar :title="bar" left-arrow @click-left="goto(-1)"></van-nav-bar>
    <van-tabs v-model="activeName">
      <van-tab title="新品" name="a">
        <itemcomps :data="this.new.list" />
      </van-tab>
      <van-tab title="销量" name="b">
        <itemcomps :data="this.sell.list" />
      </van-tab>
      <van-tab title="价格" name="c">
        <itemcomps :data="this.price.list" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import itemcomps from "./itemcomps";
export default {
  name: "goodsitem",
  data() {
    return {
      new: { page: 0, list: [] },
      sell: { page: 0, list: [] },
      price: { page: 0, list: [] },
      currentI: 1,
      activeName: "a"
    };
  },
  components: {
    itemcomps
  },
  computed: {
    bar() {
      return this.$route.query.title;
    }
  },
  methods: {
    fetch(type) {
      const { p_id, cat_id } = this.$route.query;
      if (type == "new") this.currentI = 1;
      if (type == "sell") this.currentI = 2;
      if (type == "price") this.currentI = 3;
      const page = this[type].page + 1;
      const url = `https://bravetime.davdian.com/categorySync-${p_id}-${cat_id}-1.html?sort=${this.currentI}&page_size=10&page=${page}&rp=catergory_search&rl=list`;
      this.$axios.get(url).then(({ data }) => {
        this[type].list.push(...data);
      });
      this[type].page++;
    }
  },
  created() {
    this.fetch("new");
    this.fetch("sell");
    this.fetch("price");
  }
};
</script>

<style>
</style>