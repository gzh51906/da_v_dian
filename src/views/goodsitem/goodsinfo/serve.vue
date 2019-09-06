<template>
  <div class="vux-cell-box clearfix">
      <div class="activity_t_title">服务</div>
      <div class="activity_t_common clearfix serviceWid">
        <div class="clearfix activitys" >
          <span class="service">
            <span>
              <span class="service_icon"></span>59包邮
            </span>
          </span>
          <span class="service">
            <span class="services_middle">
              <span class="service_icon"></span>15天退换货
            </span>
          </span>
          <span class="service">
            <span>
              <span class="service_icon"></span>极速退款
            </span>
          </span>
        </div>
        <div class="clearfix activitys">
          <span class="service">
            <span class="service_m_o">
              <span class="service_icon"></span>
              <span>PICC 承保</span>
            </span>
          </span>
          <span class="service servicesStyle">
            <span class>
              <span class="service_icon"></span>
              <span>大V店发货</span>
            </span>
          </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:"aa"
}
</script>

<style scoped>
.vux-cell-box{
    box-sizing: border-box;
    width: 100%;
    padding:10px;
    overflow: hidden;
    position: relative;
}
.activity_t_common ::after{
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #C8C8CD;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    -ms-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: 17px;
}
.activity_t_title {
    float: left;
    width: 20%;
    color: #333;
    font-size: 14px;
    min-width: 50px;
}
.serviceWid {
    padding-right: 0;
    float: left;
    width: 78%;
}
.activitys .service {
    float: left;
    margin-bottom: 10px;
    white-space: nowrap;
    font-size: 12px;
    color: #333;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-right: 2px;
}
.activitys .service .service_icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    background: url(https://9i.dvmama.com/free/memberPrice/icon.png) no-repeat center;
    background-size: 100%;
    margin-bottom: -2px;
    margin-right: 4px;
}
</style>