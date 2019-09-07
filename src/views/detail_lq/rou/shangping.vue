<template>
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="lqwdls.goods_image" >
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{lqwdls.goods_commend_list[0].goods_name }}</div>
 
        <div class="goods-price">￥{{ lqwdls.goods_info.promotion_price }}  <span style="color:#a2a2a2">￥{{ lqwdls.goods_info.goods_price  }}</span> </div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">{{lqwdls.goods_hair_info.content}}</van-col>
      </van-cell>

       <van-cell class="goods-express" >
       <span style="color:#d33d3c">
          <van-col span="10">促销</van-col>
        <van-col span="10">直降￥100.00  最低一件起</van-col>
       </span>
      </van-cell>

 <van-cell class="goods-express">
        <van-col span="24">
          <van-icon name="passed" />正品保证 nbsp <van-icon name="passed" /> 原地产直选  nbsp  nbsp<van-icon name="passed" />7天无理由退货  
        </van-col>
      </van-cell>

    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

   <van-divider>为你推荐</van-divider>

     
            <ul  class="lq_lslq">
              <!-- goodsCommendNew -->
              <li   v-for="(item,index) in lqwdls.goodsCommendNew " :key="index">
                  <img :src="item.goods_image" alt="">
            <p>{{item.goods_name}}</p>
            <p>{{item.goods_jingle}}</p>
                <b>{{item.goods_promotion_price}}</b>
              </li>
              
            </ul>


        <div class="lslslqsa">
              <van-goods-action>
      <van-goods-action-icon icon="chat-o" @click="sorry">
        客服
      </van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-icon>
   
         <van-goods-action-button type="warning" @click="sorry" >
           
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
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  data() {
    return {
        lqwdls:[],

      goods: {
        title: '美国伽力果（约680g/3个）',
        price: 2680,
        express: '免运费',
        remain: 19,
        thumb: [
           "https://www.aizhiyi.com/data/upload/shop/store/goods/166/2018/12/26/166_05991397390945243_60.jpg",
          'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
        ]
      }
    };
  },
  methods: {
    // formatPrice() {
    //   return '¥' + (this.goods.price / 1).toFixed(2);
    // },
    onClickCart() {
      this.$router.push('cart');
    },
    sorry() {
      Toast('暂无后续逻辑~');
    }
  },

    async created() {
     
        let lq_wd = this.$route.params.id
    let kingkongList = await this.$axios.post( 
      // https://www.aizhiyi.com/mobile/index.php?act=goods&op=goods_detail&key=null&goods_id=107596&num=3
      `https://www.aizhiyi.com/mobile/index.php?act=goods&op=goods_detail&key=null&goods_id=${lq_wd}&num=3`
    );
  
   
      this.lqwdls = kingkongList.datas
   console.log(this.lqwdls);

  },
//  let  arrarr = kingkongList.datas.goods_list;
              

      //     for (var i = 0; i < arrarr.length; i++) {
      //  this.lqwdls = arrarr[i];
     
      //   if (this.$route.params.id==arrarr[i].goodsCommonid) {
          
      //             return     arrarr[i];
      //       }
      
      //     }

// console.log(this.lqwdls);

};
</script >




<style lang="less" scoped>

  .start{
   display:none;
     z-index: -999;
}



.goods {
  margin-top: 2.8125rem;
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}

.lq_lslq{
   width: 100%;
   height: 554px;
   list-style: none;
}
.lq_lslq>li{
  width: 50%;
  height: 50%;
  float: left;
}

.lq_lslq>li>img{
  width: 100%;
  height: 60%;
}


.lq_lslq>li>p{
      color: #8b8b8b;
    font-size: 0.24rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-indent: 0.2rem;
}


.lslslqsa{
  z-index: 999;
  position: absolute;
  bottom: 0;
  width: 100%;
height: 100px;  

}

</style>