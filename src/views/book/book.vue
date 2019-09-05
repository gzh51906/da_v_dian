<template>
  <div id="book">
    <el-row
      type="flex"
      class="row-bg"
      justify="space-between"
      style="padding:10px 0;box-sizing: border-box"
      ref="toubu"
    >
      <el-col :span="5">
        <div class="grid-content bg-purple-1">
          <i class="el-icon-full-screen"></i>
          <span>扫码听书</span>
        </div>
      </el-col>
      <el-col :span="14" style="text-align:center;">
        <div class="grid-content bg-purple-light">小书库</div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple-1">
          <i class="el-icon-bell"></i>
          <span>消息提醒</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <img
            src="https://9i.dvmama.com/activity/2019/04/20/1125_579_cbd1d00cc906a30dc74c881ac2c070db.png"
            alt
          />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin:0">
      <el-col :span="6">
        <div class="grid-content bg-purple-im" style="display:block" @click="goto('/maishu')">
          <img src="https://9i.dvmama.com/free/2019/04/22/11.png" alt />
          <div>买书</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-im" style="display:block" @click="goto('/tingshu')">
          <img src="https://9i.dvmama.com/free/2019/04/22/33.png" alt />
          <div>听书</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-im" style="display:block" @click="goto('/jianshu')">
          <img src="https://9i.dvmama.com/free/2019/04/22/22.png" alt />
          <div>荐书</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-im" style="display:block" @click="goto('/dushu')">
          <img src="https://9i.dvmama.com/free/2019/04/22/44.png" alt />
          <div>读书</div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark-1">
          <img
            src="https://9i.dvmama.com/goods/2019/08/31/1005_120_6c64d1658fe232a8065da6f155fdd65d.jpg"
            alt
          />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <img
            src="https://9i.dvmama.com/free/2019/08/24/1125_242_395b5e02871ecf18664e09565cf5e8b9.jpeg"
            alt
          />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <img
            src="https://9i.dvmama.com/activity/2019/04/22/1125_30_cfdd601cc9048363b3f8c11602a969ef.jpg"
            alt
          />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark-2">
          <div>
            <span class="left">听书</span>
            <span class="right">全部内容 ></span>
          </div>
          <p>给孩子精心准备的好故事</p>
        </div>
      </el-col>
    </el-row>
    <el-row class="aaa grid-content">
      <el-col :span="12" v-for="item in menus" :key="item.names" style="margin-top:10px">
        <div class="grid-content bg-purple">
          <img :src="item.img" />
          <p>{{item.names}}</p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <img
            src="https://9i.dvmama.com/activity/2019/04/22/1125_30_cfdd601cc9048363b3f8c11602a969ef.jpg"
            alt
          />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark-2">
          <div>
            <span class="left">故事妈妈</span>
            <span class="right"></span>
          </div>
          <p>带上孩子，来参加一场故事会吧</p>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-top:10px">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <img
            src="https://9i.dvmama.com/free/2019/08/30/1080_309_4af7cd0d72be0eb1a74b6ae9747d12d9.png"
            alt
          />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <img
            src="https://9i.dvmama.com/activity/2019/04/22/1125_30_cfdd601cc9048363b3f8c11602a969ef.jpg"
            alt
          />
        </div>
      </el-col>
    </el-row>
    <!-- <el-row class="aaa grid-content">
  <el-col :span="12" v-for="item in menus" :key="item.img" style="margin-top:10px"><div class="grid-content bg-purple"><img :src="item.img"><p>{{item.names}}</p></div></el-col>
    </el-row>-->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark-2">
          <div>
            <span class="left">荐书</span>
            <span class="right">全部书单 ></span>
          </div>
          <p>大咖书单，给你推荐最好的童书</p>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-top:10px">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <img
            src="https://9i.dvmama.com/activity/2019/04/22/1125_700_c5d8d2b44397cd9426d85b4c24f1f116.jpg"
            alt
          />
          <img
            src="https://9i.dvmama.com/free/2019/04/23/1125_348_b09e8d7d1752c820038d803b74462118.png"
            alt
          />
          <img
            src="https://9i.dvmama.com/free/2019/04/23/1125_321_b1b5a17e6f334d277f9df2588a0e4e41.png"
            alt
          />
        </div>
      </el-col>
    </el-row>
    <el-row
      style="margin-bottom:20px;width:90%"
      class="grid-content bg-purple"
      v-for="item in todo"
      :key="item.hd"
    >
      <el-col :span="7">
        <div class="grid-content bg-purple" style="margin-right:5px">
          <img :src="item.src" style="width:100%" />
        </div>
      </el-col>
      <el-col :span="17">
        <div class="grid-content bg-purple-light light">
          <p class="p1">{{item.title}}</p>
          <p class="p2">{{item.hd}}</p>
          <p class="p3">
            <span class="span1">{{item.hd1}}</span>
            <span class="span2">{{item.hd2}}</span>
            <span class="span3">{{item.hd3}}</span>
            <span class="span4">{{item.hd4}}</span>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <img
            src="https://9i.dvmama.com/activity/2019/04/22/1125_30_cfdd601cc9048363b3f8c11602a969ef.jpg"
            alt
          />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" style="margin-bottom:10px">
        <div class="grid-content bg-purple-dark-2">
          <div>
            <span class="left">读书</span>
            <span class="right">热门</span>
          </div>
          <p>坚持读书打卡，让孩子爱上阅读</p>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-bottom:50px">
      <el-col :span="24" class="ccc">
        <div class="grid-content bg-purple-dark ddd">
          <img
            :src="item"
            v-for="item in todos"
            :key="item"
            style="height:90px;width:45%;margin-left:20px;flex-shrink:0;"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "book",
  data() {
    return {
      menu: [
        {
          imgurl: "https://9i.dvmama.com/free/2019/04/22/11.png",
          name: "买书"
        },
        {
          imgurl: "https://9i.dvmama.com/free/2019/04/22/22.png",
          name: "听书"
        },
        {
          imgurl: "https://9i.dvmama.com/free/2019/04/22/33.png",
          name: "荐书"
        },
        {
          imgurl: "https://9i.dvmama.com/free/2019/04/22/44.png",
          name: "读书"
        }
      ],
      menus: [
        {
          img:
            "https://9i.dvmama.com/free/2019/07/06/972_612_418ae823d0f22ccd1c47c6eceb12cd72.png",
          names: "《香草山传奇》点我听故事"
        },
        {
          img:
            "https://9i.dvmama.com/free/2019/08/19/324_204_03d05c0bc1ffe65531a6d4c8ca0af077.png",
          names: "哈爸讲故事 | 第257期"
        },
        {
          img:
            "https://9i.dvmama.com/free/2019/08/20/324_204_0f629e42735ed099b09422ad40ee5191.png",
          names: "睡前故事 | 第272期"
        },
        {
          img:
            "https://9i.dvmama.com/free/2019/07/06/972_612_418ae823d0f22ccd1c47c6eceb12cd72.png",
          names: "晚安书语|第269期"
        }
      ],
      todo: [
        {
          hd: "王漂亮 · 大V妈妈原创书单",
          title: "【大V妈妈原创书单】备孕育儿类绘本推荐",
          hd1: "0-12岁",
          hd2: "必读",
          hd3: "原创",
          hd4: "19人收藏",
          src:
            "https://9i.dvmama.com/free/2019/08/24/628_628_c8d1e9cfa6758fb2b77b7f448db10264.png"
        },
        {
          hd: "孙岩 · 大V妈妈原创书单",
          title: "【大V妈妈原创书单】亲子教育类绘本推荐",
          hd1: "0-12岁",
          hd2: "原创",
          hd4: "26人收藏",
          src:
            "https://9i.dvmama.com/free/2019/08/24/1158_1158_5a397f8f607a1b4840f13243c8ecd8bd.png"
        },
        {
          hd: "王亚萍 · 大V妈妈原创书单",
          title: "【大V妈妈原创书单】自然百科类绘本推荐",
          hd1: "0-12岁",
          hd2: "原创",
          hd4: "22人收藏",
          src:
            "https://9i.dvmama.com/free/2019/08/24/1218_1218_67afac415b383d436dde51dfd2c29629.png"
        }
      ],
      todos: [
        "https://9i.dvmama.com/free/2019/06/27/561_282_c3f8d2428d15bcabaac20fd79815d06e.jpg?x-oss-process=image/format,webp",
        "https://9i.dvmama.com/free/2019/07/01/561_282_e59d3bcdf5a036c4d21660e7b97004e5.jpg?x-oss-process=image/format,webp",
        "https://9i.dvmama.com/free/2019/08/02/1005_504_49f5f00bc088358f723c1689eacce2a7.jpg?x-oss-process=image/format,webp",
        "https://9i.dvmama.com/free/2019/06/28/561_282_f14f34296efd885eb95d36b4fdfc91eb.jpg?x-oss-process=image/format,webp",
        "https://9i.dvmama.com/free/2019/07/01/561_282_2d4fd03baf603fda3b3d80d35f1a5eac.jpg?x-oss-process=image/format,webp"
      ]
    };
  },
  methods: {
    goto(name) {
      this.$router.push(name);
    }
  }
};
</script>
<style scoped>
.row-bg {
  z-index: 88;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
}
.bg-purple-1 {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.bg-purple-1 i {
  font-size: 20px;
}
.bg-purple-1 span {
  font-size: 8px;
}
.bg-purple-dark img {
  width: 100%;
}
.grid-content {
  margin: auto;
}
.bg-purple-dark-1 {
  width: 90%;
  margin-top: 20px;
}
.bg-purple-dark-1 img {
  width: 100%;
}
.bg-purple-im {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
}
.bg-purple-im img {
  width: 53px;
  height: 53px;
  font-size: 10px;
}
.bg-purple-dark-2 {
  width: 90%;
  flex-wrap: wrap;
}
.bg-purple-dark-2 .left {
  font-size: 20px;
}
.bg-purple-dark-2 .right {
  float: right;
}
.bg-purple-dark-2 p {
  font-size: 10px;
  margin-top: 10px;
}
.aaa {
  width: 95%;
  margin: auto;
  text-align: center;
}

.aaa img {
  width: 95%;
}
.aaa p {
  font-size: 12px;
}
.light p {
  margin-bottom: 10px;
}
.light .p1 {
  font-size: 14px;
}
.light .p2 {
  font-size: 12px;
}
.light .p3 .span1,
.span2,
.span3 {
  text-align: center;
  display: inline-block;
  font-size: 12px;
  width: 40px;
  border: 1px solid #ccc;
  border-radius: 30px;
  margin-right: 10px;
}
.light .span1 {
  border: 1px solid #4a90e2;
  color: #4a90e2;
}
.light .span4 {
  font-size: 12px;
  float: right;
  line-height: 25px;
}
.ddd {
  display: flex;
  width: 100%;
  overflow: auto;
}
</style>
