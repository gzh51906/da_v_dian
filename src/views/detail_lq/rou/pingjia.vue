<template>
    <div class="lqsadqws">
 
     <ul class = 'ul_li'>
         <li>
          
         </li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
     </ul>
    </div>
</template>

<script>
export default {
data() {
    return {
        lqwdls:[],
    };
  },

   async created() {
     
        let lq_wd = this.$route.params.id
    let kingkongList = await this.$axios.post( 
`https://www.aizhiyi.com/mobile/index.php?act=goods&op=goods_evaluate&goods_id=${lq_wd}&type=&curpage=1&page=10`
    );
  

      this.lqwdls = kingkongList
      console.log( this.lqwdls);


  },


}
</script>

<style scoped>
.lqsadqws{
    margin-top: 2.8125rem;
}
.start{
   display:none;
}
.ul_li{
    width: 100%;
     height:57px;
}
li{
    width: 20%;
      height:100%;
}




</style>
