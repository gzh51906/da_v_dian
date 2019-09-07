<template>
  <div v-if="show">
    <gitem :goods="goods" />
  </div>
</template>

<script>
import { getgoodsinfo } from "@/network";
import gitem from "./item";
export default {
  name: "goodsinfo",
  data() {
    return {
      goods: {},
      show: false
    };
  },
  methods: {},
  components: {
    gitem
  },
  async created() {
    const {tab}=this.$parent.$refs
    tab&&tab.classList.add("unshow")
    const { basis } = await getgoodsinfo(this.$route.params.gid);
    this.goods = basis;
    this.show = true;
  },

  destroyed() {
    const {tab}=this.$parent.$refs
    tab&&tab.classList.remove("unshow")
  }
};
</script>

<style>
</style>