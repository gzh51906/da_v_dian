<template>
    <div class="lqsassddd" v-html="lqwdls">
     
        <div> {{this.lqwdls}}</div>

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
        // html:'<div>123432321312<div/>',
        lqwdls:'',
    };
  },

// mounted(){
//             let lqsassddd=document.getElementsByClassName("lqsassddd");
//             console.log(lqsassddd);
//             lqsassddd.innerHTML = this.lqwdls
//         },
    async created() {
     
        let lq_wd = this.$route.params.id
    let kingkongList = await this.$axios.post( 
      // https://www.aizhiyi.com/mobile/index.php?act=goods&op=goods_detail&key=null&goods_id=107596&num=3

` https://www.aizhiyi.com/mobile/index.php?act=goods&op=goods_body&goods_id=${lq_wd}`

    );
  
      this.lqwdls = kingkongList

  },


}
</script>

<style scoped>
.lqsassddd{
     width: 375px;
    height: 100%;
margin-top: 2.8125rem;
}
.start{
   display:none;
     z-index: -999;
}

.default{
     width: 375px;
    height: 100%;
}
.default img{
       width: 375px;
    height: 100%;
}
img{
     width: 375px;
}
.lslslqsa{
  z-index: 999;
  position: absolute;
  bottom: 0;
  width: 100%;
height: 100px;  

}
</style>
