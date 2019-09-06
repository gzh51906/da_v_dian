<template>
     <div>
        <div class="header-wrap">
                    会员福利
        </div>

    <van-tabs>
  <van-tab title="拼团">

    <bingtuan/>

  </van-tab>

  <van-tab title="限时购">
<xianshigou/>


  </van-tab>
</van-tabs>


     </div>
</template>

<script>
import xianshigou from "./xianshigou"
import bingtuan from "./bingtuan"
export default {

components:{
     xianshigou,
     bingtuan
    }


}
</script>

<style scoped>
 .header-wrap{
     width: 100%;
     height: 2.75rem;
     text-align: center;
     background: #d33d3c;
     line-height:2.75rem;
     color: #fff;
}
 
</style>
