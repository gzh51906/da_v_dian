<template>
  <div id="tingshu">
    <el-row :gutter="24" style="margin:0;width:100%;text-align:center" class="aaa">
      <el-col :span="4">
        <div class="grid-content bg-purple" @click="goto"><i class="el-icon-arrow-left"></i></div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple" style="padding:5px 0;font-size: 20px;">购买小书库</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple" style=""><i class="el-icon-s-home"></i></div>
      </el-col>
    </el-row>
    <el-row style="margin-top:40px">
  <el-col :span="24"><div class="grid-content bg-purple-dark bbb"><img src="https://9i.dvmama.com/zhy/-s-%E5%84%BF%E7%AB%A5%E9%98%85%E8%AF%BB%E4%B8%8E%E6%95%99%E8%82%B2%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%402x.png" alt=""></div></el-col>
  <el-col :span="24"><div class="grid-content bg-purple-dark bbb"><img src="https://9i.dvmama.com/zhy/-s-%E7%B2%BE%E9%80%89%E5%88%86%E7%BA%A7%E4%B9%A6%E5%8D%95%402x.png" alt=""></div></el-col>
  <el-col :span="24"><div class="grid-content bg-purple-dark bbb"><img src="https://9i.dvmama.com/zhy/%E5%B0%8F%E4%B9%A6%E5%BA%93%E7%A6%8F%E5%88%A9%402x.png" alt=""></div></el-col>
  <el-col :span="24"><div class="grid-content bg-purple-dark bbb"><img src="https://9i.dvmama.com/zhy/%E5%A4%A7V%E5%BA%97%E7%AE%80%E4%BB%8B%402x.png" alt=""></div></el-col>
  <el-col :span="24"><div class="grid-content bg-purple-dark bbb"><img src="https://9i.dvmama.com/zhy/%E8%AE%A2%E8%B4%AD%E9%A1%BB%E7%9F%A5.png" alt=""></div></el-col>
</el-row>


    <el-row class="zzz">
        <el-col :span="10"><div class="grid-content bg-purple z-1">邀请好友购买小书库</div></el-col>
        <el-col :span="14"><div class="grid-content bg-purple-light z-2">¥439订购小书库</div></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        goto(){
            this.$router.push('/book')
        }
    }
};
</script>
<style scoped>
.aaa{z-index: 88;position: fixed;top: 0;left: 0;background: #fff;}
.aaa i{font-size: 30px;padding: 5px 0;}
.bbb img{width: 100%;}
.zzz{width: 100%;;z-index: 99;position: fixed;bottom: 0;text-align: center;line-height: 50px;font-size: 14px;color: #fff;}
.z-1{height: 50px;;background: linear-gradient(to right,#FFB21B,#FF7C32);}
.z-2{height: 50px;background: linear-gradient(to right,#FF5C5C,#FA1862)}
</style>