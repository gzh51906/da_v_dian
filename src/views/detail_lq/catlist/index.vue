<template>
    <div>
         <van-row   class=" lqsad" v-for="item in cartlist" :key="item.goods_id" >

 <van-col span="2">  
<input type="checkbox" name="" id=""     :checked="item.checked" @click="singerShop(item)" >
      </van-col>
  <van-col span="8"><img :src="item.img" alt=""></van-col>
  <van-col span="12" offset='2' >
      <p>{{item.goodsp}}</p>
      <p>
      <van-stepper v-model="item.qty"   :max='10' @change="changejia(item)"  />
      </p>
 <p>     <van-row>
  <van-col span="12">￥{{item.price}}</van-col>
  <van-col   span="12"  @click="shanchu2221(item.goods_id)" >删除</van-col>

</van-row></p>
  </van-col>
</van-row>


  <div class="zongjie">

<van-row>
<input type="checkbox" name="" id=""  :checked="ischecked" @click = 'selected(ischecked)'  > 全选
  总价:￥{{totalPrice}}
</van-row>

  </div>


    </div>
</template>

<script>
export default {
  data() {
    return {
      ischecked:false,
      totalPrice:'0'

    };
  },

  computed: {
    cartlist() {
      return this.$store.state.cart.cartlist;
    },

    cartlist1cont() {
      return this.$store.state.cart.cont;
    },

    total21() {
      return this.$store.getters.total21;
    }
  },

  //
  methods: {
    shanchu2221(id) {
 
      this.$store.commit("removeItem", id);
    },



selected(flag){
        this.ischecked = !flag;
      this.$store.state.cart.cartlist.forEach((value,index)=>{
        if (typeof value.checked ==='undefined') {
          this.$set(value,'checked',!flag)
        }else{
          value.checked = !flag
        }
      })

    this. getAllshop();

},

 

      getAllshop(){
          let totalPrice = 0;
       this.$store.state.cart.cartlist.forEach((value,index)=>{
            if (value.checked) {
              totalPrice += value.price*value.qty
            }
 
      });
      this.totalPrice = totalPrice;

      },



singerShop(shop){
   if(typeof shop.checked==='undefined'){
     this.$set(shop,'checked',true)
   }else{
     shop.checked = !shop.checked;
   }
   this.getAllshop();
  this.hasSele();
},



hasSele(){
  let flag = true;
    
       this.$store.state.cart.cartlist.forEach((value,index)=>{
            if (!value.checked) {
             flag = false
            }
      });
      this.ischecked = flag;
},




    changejia(item){
          if(item.checked){
  this.totalPrice = item.qty*item.price
          }

    },








  }

  //
  //            jia(){
  //  this.$store.commit('contjia')
  //            },

  //                 jian(){
  //  this.$store.commit('contjian')
};
</script>

<style scoped>
span {
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-left: 10px;
}

/* input {


.

  
  width: 25px;
  height: 25px;

  display: inline-block;
} */
input[type="checkbox"] {
  width: 1.62rem;
  height: 1.42rem;
  border: 10px none;
  background-size: 100%;
  margin-top: 2.9rem;
}
.zongjie {
  margin-top: 20px;
}
.lqsad {
  margin-top: 20px;
}
.start {
  display: none;
}
img {
  width: 100%;
  height: 100%;
}

p {
  margin-top: 8px;
}

/* .lqsad{
    width: 100%;
    height: 100%;
}

 .varts{
     width: 100%;
     height: 100px;
 }
 ul{
     list-style: none;
 }
 li{
     height: 100px;
     float: left;
 }
    li:nth-child(1){
        width: 10%;
        line-height: 100px;
    }
        li:nth-child(2){
        width: 30%;
        border-radius: 5px;
    
    }

    li:nth-child(3){
        margin-left: 30px;
        width: 50%;
    } */
</style>
