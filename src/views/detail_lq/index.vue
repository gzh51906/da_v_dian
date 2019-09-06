<template>


 <div class="lq_body">
<div class="deta_main">
<van-row>
  <van-col span="6">
    <div class="lqsxn">
       <i @click="goback"><van-icon name="arrow-left" size ='28'/></i>
    </div>
  </van-col>
  <van-col span="12">
    <div class="lqsssw" >
 
        <span  v-for="item in users" :key="item" @click="current221(item)"> {{item}}</span>
        <!-- <span>详情</span>
        <span>评价</span> -->
    </div>
  </van-col>
  <van-col span="6">
   <div class="lsls">
     <span>   <van-icon name="cart-o" size ='28'/></span>
  <span>  <van-icon name="more-o" size ='28'/></span>
   </div>
  </van-col>
</van-row>
     
   </div>
     <component :is="current"></component>


 </div>
   

    
</template>

<script>
   import shangping from "../detail_lq/rou/shangping.vue"
   import xiangqing from "../detail_lq/rou/xiangqing.vue"
   import pingjia from "../detail_lq/rou/pingjia.vue" 
export default {
    data() {
    return {
   users:['商品','详情',"评价"],
                current:'shangping'
    }
  },
  methods:{






  goback(){
    this.$router.go(-1)
  },







    current221(e){
      switch (e) {
        case '商品':
          this.current="shangping"
          break;
          case '详情':
          this.current="xiangqing"
          break;
          case '评价':
          this.current="pingjia"
          break;
      }
    }
  },










  components:{
     shangping,
     xiangqing,
     pingjia
     
    },
  

}
</script>

<style scoped>
.start{
   display:none;
}
.lq_body{
  width: 100%;
  height: 100%;
}
.deta_main{
   width: 100%;
        height: 2.8125rem;
    line-height:  2.8125rem;
  background: #d33d3c;
  text-align: center;
  position: absolute;
    top:0;
    z-index: 9;
      color: #f3cdcd;
}

 .lqsxn>i{
   display: inline-block;
   float: left;
  margin-top: 0.4375rem;
    margin-left: 0.625rem;
 }

 .lqsssw{
   text-align: center;

 }
.lqsssw>span{
  color: #f3cdcd;
}

.lsls>span>i {
 display: inline-block;
   float: left;
 margin-top: 0.4375rem;
    margin-left: 0.325rem;
}


.deta_weibu{
  position: absolute;
  bottom: 0;
    width: 100%;
    height: 100px;
   background: #d33d3c;
}



</style>