<template>
    <div class="lqsassddd">
     
        {{this.lqwdls}}
    </div>
</template>

<script>
export default {

data() {
    return {
        lqwdls:[],
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
      console.log( this.lqwdls);


  },


}
</script>

<style scoped>
.lqsassddd{
margin-top: 2.8125rem;
}
.start{
   display:none;
}
</style>
