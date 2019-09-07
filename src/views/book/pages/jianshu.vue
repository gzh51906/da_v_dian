<template>
    <div>
<el-row :gutter="24" style="margin:0;width:100%;text-align:center" class="aa">
      <el-col :span="3">
        <div class="grid-content bg-purple" @click="goto"><i class="el-icon-arrow-left"></i></div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple" style="padding:8px 0;font-size: 16px;text-overflow: ellipsis;">【大V书单】大咖给你最好的童书</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple" style=""><i class="el-icon-s-home"></i></div>
      </el-col>
    </el-row>
    <el-row style="margin-top:36px">
  <el-col :span="24" v-for="item in jian" :key="item"><div class="grid-content bg-purple-dark bb"><img :src="item" alt=""></div></el-col>
</el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            jian:[
                "https://9i.dvmama.com/shop_logo/2019/04/22/src__a9141ac75688eeedaa9c38bfc8542e35.jpg?x-oss-process=image/format,webp",
                "https://9i.dvmama.com/shop_logo/2019/04/22/src__aef6e39819a6d1a03c13ee593218b660.jpg?x-oss-process=image/format,webp",
                "https://9i.dvmama.com/shop_logo/2019/04/22/src__e39945ce73320a11b7df261b94c84b9a.jpg?x-oss-process=image/format,webp",
                "https://9i.dvmama.com/shop_logo/2019/04/22/src__16fc6094f823f1c650db42be15f4d663.jpg?x-oss-process=image/format,webp",
                "https://9i.dvmama.com/shop_logo/2019/04/22/src__03e00625ad8ba5d4d080052c50ecac2d.jpg?x-oss-process=image/format,webp", 
                "https://9i.dvmama.com/shop_logo/2019/04/22/src__248a77fb68bafb44b4ba46e4c2a154d2.jpg?x-oss-process=image/format,webp",
                "https://9i.dvmama.com/shop_logo/2019/04/22/src__36f5917ec0acf0985b108d808b758c5d.jpg?x-oss-process=image/format,webp",
                "https://9i.dvmama.com/shop_logo/2019/04/22/src__ab75c2a162b8c773020a2ce261337191.jpg?x-oss-process=image/format,webp",
                "https://9i.dvmama.com/shop_logo/2019/04/22/src__c83771465f477c3b39667404d269b6b1.jpg?x-oss-process=image/format,webp", 
                "https://9i.dvmama.com/shop_logo/2019/04/22/src__5bafe93a4b10a86bca6ce22f924c5cff.jpg?x-oss-process=image/format,webp",  
                "https://9i.dvmama.com/shop_logo/2019/04/22/src__dcb96c66a8ed17f7b547ecae1587c419.jpg?x-oss-process=image/format,webp"       ]
        }
    },
    methods:{
        goto(){
            this.$router.push('/book')
        }
    }
}
</script>
<style scoped>
.aa{z-index: 88;position: fixed;top: 0;left: 0;background: #fff;}
.aa i{font-size: 30px;padding: 5px 0;}
.bb img{width: 100%;}
</style>