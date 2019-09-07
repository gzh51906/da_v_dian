<template>
    <div class="lqsadqws">
    <div class="lqssss">
                <van-row justify="center" align = "center">
  <van-col span="6"  style=" color: #f9493c;">全部</van-col>
  <van-col span="6">好评</van-col>
  <van-col span="6">中评</van-col>
  <van-col span="6">差评</van-col>
</van-row>
 </div>
    <div class="lqssss">
                <van-row justify="center" align = "center">
  <van-col span="6"  style=" color: #f9493c;">{{lqwdls.datas.count_info.all}}</van-col>
  <van-col span="6">{{lqwdls.datas.count_info.bad}}</van-col>
  <van-col span="6">{{lqwdls.datas.count_info.good}}</van-col>
  <van-col span="6">{{lqwdls.datas.count_info.normal}}</van-col>
</van-row>
 </div>
   

<div class="lqsaasdf" v-for="(item,index) in lqwdls.datas.goods_eval_list"    :key="index">

 
<p>    <van-row type="flex" justify="space-between">
  <van-col span="8">{{item.geval_frommembername}}</van-col>
  <van-col span="6">{{item.geval_addtime_date}}</van-col>

</van-row></p>
<p><van-rate v-model="value" readonly  color="#d13d41" void-color="#eee" :size="16" /></p>

<p>{{item.geval_content}}</p>



 <p  style="color:#b78d47"    v-if="item.geval_explain">回复:{{item.geval_explain}}</p>


</div>

      <div class="lslslqsa">
              <van-goods-action>
      <van-goods-action-icon icon="chat-o" @click="sorry">
        客服
      </van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-icon>
      <van-goods-action-button type="warning" @click="sorry">
           加入购物车
      </van-goods-action-button>
      <van-goods-action-button type="danger" @click="sorry">
        立即购买
      </van-goods-action-button>
    </van-goods-action>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value: 4,
      lqwdls: []
    };
  },



  async created() {
    let lq_wd = this.$route.params.id;
    let kingkongList = await this.$axios.post(
      `https://www.aizhiyi.com/mobile/index.php?act=goods&op=goods_evaluate&goods_id=${lq_wd}&type=&curpage=1&page=10`
    );

    this.lqwdls = kingkongList;
    console.log(this.lqwdls);
  }
};
</script>

<style scoped>
.start {
  display: none;
  z-index: -999;
}

.lqsadqws {
  margin-top: 3.8125rem;
}

.lqssss {
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
}

.lqsaasdf {
  font-size: 12px;
}
.lqsaasdf p {
  margin-top: 6px;
}
.lqsaasdf p:nth-child(1) {
  border-top: 1px solid #bebebe;
  border-bottom: 1px solid #bebebe;
}

.lslslqsa{
  z-index: 999;
  position: absolute;
  bottom: 0;
  width: 100%;
height: 100px;  

}


</style>
