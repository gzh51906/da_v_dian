<template>
  <div>
    <div class="navsrc">
    <div class="vanicon" @click="goto('home')"><van-icon name="arrow-left" /></div>
      <div class="vansrc"><van-search placeholder="请输入搜索关键词" v-model="value" slot="title" shape="round" background="#f9f9f9"/></div>
  </div>
  <sideBarl :sidebar="sidebar" class="sidebar"/>
  </div>
</template>

<script>
import {getCatNavList} from "@network"
import sideBarl from "./goodscopms/sidebar"
export default {
  name: "goodslist",
  data() {
    return {
      value: "",
      sidebar:[]
    };
  },
  components:{
    sideBarl
  },
  methods:{
    async getCatNavList(){
      const {data}=await getCatNavList();
      this.sidebar=data;
    }
  },
  created(){
    this.getCatNavList()
  }
};
</script>

<style scoped>
.navsrc{
  display: flex;
  height: 44px;
  background-color: #f9f9f9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 6;
}
.vanicon{
  height: 100%;
  width: 10%;
  text-align: center;
}

.van-icon::before{
  line-height: 44px;
}
.vansrc{
  width: 90%;
  display: flex;
  align-content: center;
  background-color: #f9f9f9;
}
.van-search{
  padding:0;
  width: 90%;
}
.van-search__content{
  background-color: #ffffff;
}
.sidebar{
  padding-top: 44px;
  text-align: center;
}

</style>
