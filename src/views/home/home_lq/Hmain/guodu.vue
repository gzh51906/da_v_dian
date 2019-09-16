<template>
        <div class="index-news">
            <!-- <van-row>
 
      <van-col span="6">

          <div class="index-news-left"></div>

      </van-col>
      <van-col span="18">span: 18</van-col>

 

</van-row> -->

        <div class="index-news-left">
            <img src="https://9i.dvmama.com/free/2019/06/04/112_132_2dea84887b0efc0422894662371d3fcc.png" alt="">
        </div>

            <div class="index-news-right">


                <div class="index-news-title" id="c1" style="margin-top: -0.5rem;"><span class="index-news-highlight ">最新</span>尖货|牛听听智能早教机，帮孩子轻松渡过升学衔接期！【9月3日早8点开抢】<br><span class="index-news-highlight ">最新</span>尖货|一本不到11元，就可以把多位国际童书大奖得主的经典绘本带回家！！《给孩子的大师绘本精选》不容错过的大师级绘本！【9月2日早8点开抢】</div>




                <div class="index-news-title" id="c2" style="margin-top: 0.1rem;"><span class="index-news-highlight ">最新</span>尖货返场|爆款尖货返场，看看买过的妈妈们高度评价！这一次千万别再错过！！！【9月1日早8点开抢】<br><span class="index-news-highlight ">最新</span>尖货|孩子爱的童鞋都在这里了，又到了换季时刻，巴布豆&amp;大嘴猴限时专场，低价等你!【8月31号 早8点开抢】</div>

            </div>




        </div>
</template>

<script>





export default {};


// setInterval(function () {
//     console.log('123');

// },3000)








</script>

<style scoped>
.index-news {
  margin: 0 0.1rem 0 0.1rem;
  height: 3rem;
  border-radius: 0.1rem;
  box-shadow: 0 0 0.1rem #eee;
  font-size: 0.14rem;
  text-align: left;
  padding: 0.1rem;
  overflow: hidden;
  line-height: 0.2rem;
  color: #666;
  margin-top:2.625rem;
}
.index-news-left {
  display: inline-block;
  padding-right: 0.2rem;
  width: 12%;
  float: left;
  height: 3rem;
  border-right: 0.01rem solid #eee;
}

.index-news-left img {
  width: 100%;
  height: 100%;
}

.index-news-right {
  display: inline-block;
  float: left;
  width: 87%;
}

.index-news-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 0.05rem;
  height: 3.2rem;
  line-height: 1.6rem;
  padding-top: 0.3125rem;
  z-index: 10;

}
 /* 方向 */
    /* animation-direction: alternate; */
    /* 速度曲线 */
    /* animation-timing-function: linear; */
        /* 动画名 */
    /* animation-name: ani_next; */
    /* 持续的时间 */
    /* animation-duration: 10s; */
    /* 循环次数 */
    /* animation-iteration-count: infinite; */


    
.index-news-title:nth-child(1){


       animation-name: ani_next;
           animation-duration: 12s;
              animation-iteration-count: infinite;
} 


 @keyframes ani_next {
    0% {

    }
     12.5% {
        margin-top: -4rem;
    }
     25%{
         margin-top: -4rem;
    }
     38%{
         margin-top: -4rem;
    }
    50%{
         margin-top: -4rem;
    }
      64%{
         margin-top: 0rem;
    }
 75%{
         margin-top: 0rem;
    }
      88%{
         margin-top: 0rem;
    }
    100% {
       margin-top: 0rem;
    }
}


.index-news-highlight {
  display: inline-block;
  background: #fee9ee;
  font-size: 0.8rem;
  color: #ff4a7d;
  padding: 0 0.05rem;
  margin-right: 0.05rem;
  border-radius: 0.05rem;
  line-height: 1.6rem;
}
</style>
