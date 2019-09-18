<template>
    <div  class="touming">
      <div class="con1"    @click = lqs()>
     
      </div>
     <div class="con"   >
          <ul>
            <li >首页</li>
            <li >购物车</li>
            <li   @click = lqs()> 关闭</li>
          </ul>
       <!-- <div class="lss" @click = lqs()>*</div> -->
     </div>
    </div>
</template>
<script>
export default {
  props:['father'],
     data() {
    return {
    }
  },
   methods:{
        lqs(){
          this.father.bol = false;
        },
    },
}
</script>

<style scoped>

.con{
    width: 60px;
    background: #2f3236;
    position: absolute;
    top: 45px;
   right:10px;
}
.con1{
    width: 60%;
    height: 300px;
    position: absolute;
    top: 45px;
   right:80px;
}
</style>


