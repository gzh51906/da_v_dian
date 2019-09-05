<template>
        
        <div id="like_group">
                    <ul class="Btuan">
<!-- item.goods_id2 -->
   <li   v-for="(item,index) in goodslist"    :key="index">
           <div class="Btuan-list" > 

                <a href="#" class="Btuan-img">

                     <img :src="item.goods_image" alt="" data-lazyload-id="5" >
                <i class="mark"></i>
                </a>

        <a href="#" class="Btuan-text">

                <p>{{item.groupbuy_name2}} </p>

<h3 style="font-size: 0.26rem; color: #d33d3c; margin-bottom: 2.5rem;">邀请好友，共赢拼团福利</h3>
            <span class="freebug-test"><i>￥<font>{{item.groupbuy_price5}}</font></i></span> 
<em class="original"><del>￥&nbsp;{{item.goods_price}}</del></em>

    <em class="saleNum"><i s="" class="hadbuy_num" style="color: #999; font-size: 0.28rem">{{item.sale_fic_count}}人已团</i></em>

<span class="link">去拼团</span>


        </a>

    </div>
   </li>

                    </ul>

        </div>

</template>

<script>
export default {

    data() {
    return {
      goodslist:[]
    }
  },

 async created() {
    let lunboList = await this.$axios.get( 
      "https://www.aizhiyi.com/mobile/index.php?act=group_buy&op=group_buy_hug&key="
    );
     this.goodslist =lunboList.data.datas.group_list;
  },








}

</script>







<style scoped>

.Btuan {
    background: #f5f5f5;
}

.Btuan li {
    width: 100%;
     height: 9.125rem;
    position: relative;
    border-bottom: solid 1px rgba(0,0,0,0.10);
}
.Btuan-list {
    width: 100%;
    height: 100%;
    padding: 0.3rem 0;
}

.Btuan-img {
     width:8.25rem;
    
     height: 8.25rem;
    
    position: relative;
    display: table-cell;
}
.Btuan li a img {
    /* width:8.25rem;
    
     height: 8.25rem; */
    
    width: 100%;
    height: 100%;
    border-radius: 6px;
    display: block;
    position: relative;
    border: solid 1px #e5e5e5;
}

.Btuan li i.mark {
    position: absolute;
    display: block;
    width: 0.8rem;
    height: 0.72rem;
    left: 0.1rem;
    color: #fff;
    font-size: 0.3rem;
    font-weight: 700;
    line-height: 0.64rem;
    text-align: center;
    top: 0rem;
    padding: 0 0.05rem;
    font-family: Microsoft Yahei;
}



em{font-style:normal}
.Btuan li .Btuan-text {
      position: relative;
    padding: .8rem .8rem 0rem 1rem;
    display: table-cell;
    vertical-align: top;
    width: 13.3125rem;
    height: 8.25rem;
}


.Btuan li .Btuan-text p {
    color: #666666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0.1rem 0 0.52rem 0;
    font-size: 1rem;
}

.Btuan li .Btuan-text span {
    font-size: 0.3rem;
    color: #D62327;
    margin-right: 0.24rem;
    margin: 0.1rem 0 0.1rem 0;
}
.Btuan li .Btuan-text span i {
    font-size: 0.32rem;
}


.Btuan li .Btuan-text .original {
   margin-left: .6rem;
    color: #ababab;
    font-size: 0.32rem;
}

.Btuan li .Btuan-text .saleNum {
    font-size: 0.28rem;
    color: #FCB75A;
    position: absolute;
      right: 1rem;
    bottom: 3.6rem;
    font-style:normal;
}
 /* .item{
     height: 8.25rem;
} */

.Btuan li .Btuan-text .link {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    color: #fff;
    background: #D33d3c;
    border-radius: 0.28rem;
    font-size: 0.26rem;
    color: #FFFFFF;
    width: 4.4rem;
    line-height: 2.2rem;
    text-align: center;
    display: block;
}




</style>
