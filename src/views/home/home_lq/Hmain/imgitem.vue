<template>
     <div>
       
         <div class="img_item">
      <img src="https://9i.dvmama.com/shop_logo/2019/09/01/src__7a80a10e61632cc4be2200d3d9c9d144.png" alt="">

</div>

        <div class="banner_lq">

   <img src=" https://9i.dvmama.com/shop_logo/2019/09/02/src__9f6d25ea39972667409be2431c283fd6.jpg" alt=""   >


                <div class="imgUrlList-slide">
            <img src="https://9i.dvmama.com/goods/2019/09/02/1065_400_2e24835d5619330c8eb5884f629bd272.png?x-oss-process=image/format,webp" alt="">

                </div>
            <div  class="imgUrlList-slide">
  <img src="https://9i.dvmama.com/goods/2019/09/02/1065_400_2b06766c1f28feb92964679465b5767d.png?x-oss-process=image/format,webp" alt="">

            </div>


            
        </div>
  
       

          
             <div class="lq_img">
                 <img src="https://9i.dvmama.com/shop_logo/2019/09/03/src__011008e304f9d776168f2cb6c61c6fee.jpg?x-oss-process=image/format,webp" alt="">

             </div>


                 <div class="lq_img_1">
                 <img src="https://9i.dvmama.com/shop_logo/2019/09/02/src__c7672812e2fb4c02a2bdfaec41052865.png" alt="">

             </div>
       
     <div class="lq_img_2">
                 <img src="https://9i.dvmama.com/shop_logo/2019/09/03/src__b7351c8106cd3e0c866b9580baa3de1a.png" alt="">

             </div>



    <div class="lq_img_3">
            <img src="https://9i.dvmama.com/shop_logo/2019/09/04/src__57df777901d33dbb6c905a330766314d.jpeg" alt="">

             </div>

             <div class="lq_img_4">
            <img src="https://9i.dvmama.com/shop_logo/2019/08/31/src__529d7e07bd16f1622ba12dcfaf6d45f1.jpeg" alt="">

             </div>
              <div class="lq_img_5">
            <img src="https://9i.dvmama.com/shop_logo/2019/04/30/src__09e6977b84483e912c581467f71b87a4.jpg" alt="">

             </div>
      <div class="lq_img_6">
            <img src="https://9i.dvmama.com/shop_logo/2019/09/03/src__3463429bb33ade1a2f0bcbec88a7dd14.jpg" alt="">
             </div>














    <div class="ls_img_l"></div>



     </div>
</template>

<script>
export default {
data() {
    return {
      current: 0,
      goodslist:[]
    }
  },


 async created() {
    let lunboList = await this.$axios.get( 
      "https://stc.davdian.com/topic/topic_31016.json?_=1567413576152"
    );
  this.goodslist =lunboList.data.list.slice(10,15);
  },

}
</script>

<style scoped>
 

    .img_item{
        margin-top: 0.9375rem;
        width: 100%;
        height: 10.4375rem;
    }
       .img_item>img{
            width: 100%;
            height: 100%;
        }

        .banner_lq{
              margin-top: 0.9375rem;
    position: relative;
    width: 100%;
    height: 8.5625rem;
        }
.banner_lq>img{
    width: 96%;
    height: 100%;
        padding-left: 1.7%;
 }


   .imgUrlList-slide{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;



    }


img{
    width: 100%;
    height: 100%;
}
.lq_img{
    width: 100%;
    height:17.5625rem;
}

.lq_img_1{
       width: 100%;
    height:11.8125rem;
}

.lq_img_2{
        width: 100%;
    height:12.5625rem;
}
.lq_img_3{
    width: 100%;
    height:  5.1875rem;
}

.lq_img_4{
    width: 100%;
 height: 16.375rem;
}
.lq_img_5{
    width: 100%;
  height: 2.4375rem;
}
.lq_img_6{
    width: 100%;
    height: 18.8125rem;
}




.ls_img_l{
    width: 100%;
    height:5rem ;
}



</style>
