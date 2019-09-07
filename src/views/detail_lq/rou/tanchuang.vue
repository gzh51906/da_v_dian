<template>
    <div>
     <div class="con"   >
          <ul>
            <li>首页</li>
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
    height: 100px;
    background: #2f3236;
    position: absolute;
    top: 45px;
   right:10px;
}

</style>


