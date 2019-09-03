<template>
  <van-icon>
    <form action="/" class="form">
      <van-search shape="round" background="#ff92ad" v-model="value" placeholder="请输入搜索关键词" />
    </form>
  </van-icon>
</template>

<script>
export default {
  name: "titlel",
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style scoped>
.van-nav-bar__title {
  height: 100%;
  line-height: 44px;
}
.van-icon {
  margin-bottom: 3px;
}
.van-search {
  padding: 0;
}
.van-search__content {
  background-color: #fab2c2;
}
</style>