<template>
  <div id="my">
      <div class="e">
          <div class="tou" @click="gotoshang('/login')"></div>
          <div @click="gotoshang('/login')">点击登录</div>
      </div>
      <div class="ee">
         <div class="ee-1">
              <p class="ee-p"><span class="sp">我的订单</span><span class="spa">查看全部订单 ></span></p>
              <ul class="list">
                  <li> <img src="https://www.aizhiyi.com/wap/images/member/z15.png" alt=""><p> 付款</p></li>
                  <li> <img src="https://www.aizhiyi.com/wap/images/member/z16.png" alt=""> <p>发货</p></li>
                  <li> <img src="https://www.aizhiyi.com/wap/images/member/z17.png" alt=""> <p>收货</p></li>
                  <li> <img src="https://www.aizhiyi.com/wap/images/member/z18.png" alt=""> <p>评价</p></li>
                  <li> <img src="https://www.aizhiyi.com/wap/images/member/z19.png" alt=""> <p>退款/退货</p></li>
              </ul>
         </div>
      </div>
       <div class="ee-2">
             我的服务
         </div>
         <div class="ee-3">
              <ul class="list-1">
                  <li> <img src="https://www.aizhiyi.com/wap/images/member/z25.png" alt=""><p>拼团订单</p></li>
                  <li> <img src="https://www.aizhiyi.com/wap/images/member/z24.png" alt=""> <p>礼品卡</p></li>
                  <li> <img src="https://www.aizhiyi.com/wap/images/member/z30.png" alt=""> <p>我的足迹</p></li>
                  <li> <img src="https://www.aizhiyi.com/wap/images/member/z23.png" alt=""> <p>客服与帮助</p></li>
                  <li> <img src="https://www.aizhiyi.com/wap/images/member/z21.png" alt=""> <p>我的收藏</p></li>
                  <li> <img src="https://www.aizhiyi.com/wap/images/member/z20.png" alt=""><p> 代金券</p></li>
                  <li> <img src="https://www.aizhiyi.com/wap/images/member/z26.png" alt=""> <p>设置</p></li>
                  <li> <img src="https://www.aizhiyi.com/wap/images/member/z27.png" alt=""> <p>地址管理</p></li>
                  <li> <img src="https://www.aizhiyi.com/wap/images/member/z28.png" alt=""> <p>我的消息</p></li>
                  <li> <img src="https://www.aizhiyi.com/wap/images/coin/coin85.png" alt=""> <p>易瓷币</p></li>
              </ul>
         </div>
  </div> 
</template>
<script>
export default {
    data(){
        return{
            top:[{

            }],
            bottom:[{
                
            }]
        }
    },
    methods:{
        goto(name){
            this.$router.push(name)
        }
    }
}
</script>
<style scoped>
body{background: #F5F5F5;}
.e{width: 100%;height: 86px;background: #D33D3C;display: flex;line-height: 86px;color: #fff;}
/* .e div img{line-height:50px;} */
.tou{
    width: 68px;
    height: 68px;
    background: #fff;
    border-radius: 50%;
    background-image: url("https://www.aizhiyi.com/wap/images/icon_tx.png");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 60%;
    margin-left: 5%;
    margin-top: 10px;
    margin-right: 15px;
}
.ee-p{margin-bottom: 35px;padding-top: 15px;}
.ee-p .spa{font-size: 14px;float: right;color: #999999;}
.ee{width: 95%;margin: auto;background: #FFF;}
.list{display: flex;justify-content: space-around;justify-content: space-between;margin-bottom: 10px;}
.list li{flex-direction: column;text-align: center;}
.list li img{width: 50%;margin-bottom: 5px;}
.list li p{font-size: 12px;color: #666666;margin-bottom: 10px;background: #FFF;}
.ee-2{width: 95%;margin: auto;background: #FFF;padding: 15px 0;margin-bottom: 2px;}
.ee-3{width: 95%;margin: auto;background: #FFF;}
.list-1{display: flex;flex-wrap: wrap;padding: 10px 0;}
.list-1 li{text-align: center;width: 25%;}
.list-1 li img{width: 25%;margin-top: 20px;}
.list-1 li p{font-size: 14px}
</style>