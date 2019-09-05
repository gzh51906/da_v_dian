<template>
  <div id="app">
    <el-row :gutter="24" style="margin:0;width:100%;text-align:center" class="aaa">
      <el-col :span="4">
        <div class="grid-content bg-purple" @click="goto">
          <i class="el-icon-arrow-left"></i>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple" style="padding:5px 0;font-size: 20px;">阅读栏目</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple" style>
          <i class="el-icon-s-home"></i>
        </div>
      </el-col>
    </el-row>

    <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-top:40px;" class="tabs">
      <el-tab-pane class="tabs-1" label="哈爸讲故事" name="first">
        <div v-for="item in mai" :key="item">
          <img :src="item" alt style="width:100%" />
          <p>哈爸讲故事：《这不是我的帽子》</p>
          <p>2019-9-2</p>
        </div>
      </el-tab-pane>
      <el-tab-pane class="tabs-1" label="睡前故事" name="second">配置</el-tab-pane>
      <el-tab-pane class="tabs-1" label="故事小主" name="third">角色</el-tab-pane>
      <el-tab-pane class="tabs-1" label="晚安书语" name="fourth">
        <div>
          <img
            src="https://9i.dvmama.com/activity/2019/08/29/1125_600_7693047508dfeb50cbe2040ac0f00c17.jpg?x-oss-process=image/resize,m_fill,w_1065,h_579/format,webp"
            style="width:100%"
            alt
          />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName:"",
      mai: [
        "https://9i.dvmama.com/free/2019/02/23/1125_600_5c9d5824a9b428caff52619fcf4ccb04.png?x-oss-process=image/resize,m_fill,w_1065,h_579/format,webp",
        "https://9i.dvmama.com/free/2019/02/18/1125_600_d95fa8e70eefbb1aeb75fdeb3efc4c60.jpg?x-oss-process=image/resize,m_fill,w_1065,h_579/format,webp",
        "https://9i.dvmama.com/free/2019/02/18/1125_600_c3a595a6e7953e7f6fb9d3ea0ebb7f9b.jpg?x-oss-process=image/resize,m_fill,w_1065,h_579/format,webp",
        "https://9i.dvmama.com/free/2019/02/18/1125_600_58f338f146eab7b9085965ed51cf1e54.jpg?x-oss-process=image/resize,m_fill,w_1065,h_579/format,webp"
      ]
    };
  },
  methods: {
    goto() {
      this.$router.push("/book");
    },
    handleClick() {
      console.log(this.activeName);
    },
    // activeName() {}
  },
  created(){
    this.activeName="first"
  }
};
</script>
<style scoped>
#app {
  width: 96%;
  margin: auto;
}
.aaa {
  z-index: 88;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
}
.aaa i {
  font-size: 25px;
  padding: 5px 0;
}
.tabs .tabs-1 {
  padding: 0;
}
.tabs {
  width: 100%;
}
</style>