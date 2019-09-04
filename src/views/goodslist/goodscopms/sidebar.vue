<template>
  <div class="df">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item
        :title="item.title"
        v-for="(item,i) of sidebar"
        :key="item.title"
        :style="i==activeKey?'color:#f44':''"
      ></van-sidebar-item>
    </van-sidebar>

   <div class="boxright">
        <van-grid :border="false" :column-num="3" v-for="(item,i) of sidebar" :key="item.title" v-show="i==activeKey">
        <van-grid-item v-for="cz of item.content.category" :key="cz.text" :to="`goodsitem${gid(cz.link)}&title=${cz.text}`">
            <van-image :src="cz.img" />
            <span>{{cz.text}}</span>
        </van-grid-item>
    </van-grid>
   </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  props: {
    sidebar: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      activeKey: 0,
      index: 0
    };
  },
  methods: {
    gid(a) {
      return "?"+ a.split("?")[1]
    }
  }
};
</script>

<style scoped>
.df {
  display: flex;
}
.boxright{
    flex: 1;
}
.boxright span {
font-size: 12px;
}
</style>