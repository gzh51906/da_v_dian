<template>
  <div id="dushu">
    <el-row :gutter="24" style="margin:0;width:100%;text-align:center" class="a">
      <el-col :span="2">
        <div class="grid-content bg-purple" @click="goto">
          <i class="el-icon-arrow-left"></i>
        </div>
      </el-col>
      <el-col :span="20">
        <div
          class="grid-content bg-purple"
          style="padding:8px 0;font-size: 18px;text-overflow: ellipsis;"
        >热门打卡活动</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple" style>
          <i></i>
        </div>
      </el-col>
    </el-row>
    <div class="big" style="margin-top:50px">
        <div class="big-1">
           <div class=""> <img src="https://9i.dvmama.com/free/2019/06/27/561_282_c3f8d2428d15bcabaac20fd79815d06e.jpg" alt="" style="width:108px;height:75px;"></div>
           <div class="div1" style=""> <p class="p">数独训练营六期作业打卡</p>
            <p class="pp">2个打卡团</p>
            <p class="ppp">163人参加 <span>|</span> 打卡653次</p></div>
            </div>
        <div></div>
        <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goto() {
      this.$router.push("/book");
    }
  }
};
</script>
<style>
body{background: #F4F5F6;}
#dushu{width: 95%;margin: auto;background: #fff;border-bottom:1px dashed #E5E5E5;}
.a {
  z-index: 88;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
}
.a i {
  font-size: 25px;
  padding: 8px 0;
}
.big-1{display: flex;}
.big-1 div{margin-right: 5px;}
.div1 p{margin-bottom: 8px;}
.p{font-size: 18px}
.pp{font-size: 14px}
.ppp{font-size: 15px;word-spacing:30px;}
.ppp span{margin: 0 10px;display: inline-block;}
</style>