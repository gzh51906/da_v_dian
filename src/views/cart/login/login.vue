<template>
  <div class="login">
    <el-row :gutter="24" style="margin:0;width:100%;text-align:center" class="ll">
      <el-col :span="3">
        <div class="grid-content bg-purple" @click="goto('/cart')"><i class="el-icon-arrow-left"></i></div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple" style="padding:8px 0;font-size: 18px;text-overflow: ellipsis;color:#fff">账号登录</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple" style=""><i></i></div>
      </el-col>
    </el-row>
  
    <div class="lo-1"> <p class="lo-1-p1"><van-icon name="volume-o" style="font-size:20px;margin-right:20%;line-height:25px"/><span>新用户注册立送160元大礼包</span></p></div>

   <div class="div1">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width=""  class="demo-ruleForm lo" >
            <p class="lo-2-p1"><img src="https://www.aizhiyi.com/wap/images/logo@2x.png?888" alt=""></p>
  <el-form-item label="" prop="pass" class="lo-2-p2">
      <div class="div2"><img src="https://www.aizhiyi.com/wap/images/login5.png?888" alt="">
    <el-input class="input" type="phone"  placeholder="请输入手机号" v-model="ruleForm.pass" autocomplete="off">
      <span></span>
    </el-input></div>
  </el-form-item>
  <el-form-item label="" prop="checkPass" class="lo-2-p2">
      <div class="div2"><img src="https://www.aizhiyi.com/wap/images/login7.png?777" alt="">
    <el-input class="input" type="password" placeholder="请输入密码" v-model="ruleForm.checkPass" autocomplete="off">
       <span></span>
    </el-input></div>
  </el-form-item>
   <p class="lo-2-p3"><span class="sn" @click="goto('/reg')">手机快速注册</span><span >忘记密码</span></p>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" class="lo-2-p4">登入</el-button>
  </el-form-item>
   <h2 class="lo-2-p5"> <span>合作账号登录</span></h2>
      <p class="lo-2-p6"><span><img src="https://www.aizhiyi.com/wap/images/login9.png?999" alt=""></span><span><img src="https://www.aizhiyi.com/wap/images/login10.png?888" alt=""></span></p>
</el-form>
   </div>
 
    <!-- <div :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm lo">
    <div class="lo-2">
      <p class="lo-2-p1"><img src="https://www.aizhiyi.com/wap/images/logo@2x.png?888" alt=""></p>
      <p class="lo-2-p2"><img src="https://www.aizhiyi.com/wap/images/login5.png?888" alt=""><input type="phone" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入手机号"><span></span></p>
      <p class="lo-2-p2"><img src="https://www.aizhiyi.com/wap/images/login7.png?777" alt=""><input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请输入密码"><span></span></p>
      <p class="lo-2-p3"><span class="sn" @click="goto('/reg')">手机快速注册</span><span >忘记密码</span></p>
      <p class="lo-2-p4"><button type="primary" @click="submitForm('ruleForm')">登录</button></p>
      <h2 class="lo-2-p5"> <span>合作账号登录</span></h2>
      <p class="lo-2-p6"><span><img src="https://www.aizhiyi.com/wap/images/login9.png?999" alt=""></span><span><img src="https://www.aizhiyi.com/wap/images/login10.png?888" alt=""></span></p>
    </div>
    </div> -->
    <div style="left: 50%; top: 333.5px; margin-left: -140px;" class="s-dialog-wrapper s-dialog-skin-block"><div class="s-dialog-content"><p>请输入手机号码</p> </div><div class="s-dialog-btn-wapper"><a href="javascript:void(0)" class="s-dialog-btn-ok"><span>确定</span></a><a href="javascript:void(0)" class="s-dialog-btn-cancel"><span>取消</span></a></div></div>
  </div>
</template>
<script>
export default {
     data() {
     
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } 
        // else if (value !== this.ruleForm.pass) {
        //   callback(new Error('两次输入密码不一致!'));
        // } 
        else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('登入成功');
          } else {
            console.log('手机号或密码错误');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
.ll{background: #D33D3C;}
.ll i{font-size: 30px;padding: 5px 0;color: #fff;}
.lo-1{width: 100%;;background: #FEF9F6;}
.lo-1-p1{width: 88%;margin: auto;font-size: 12px;padding: 10px;display: flex;}
.lo-1-p1 span{line-height: 25px;}
.div1{width: 80%;margin: auto;}
.div2{display: flex;}
.lo{width: 100%;margin: auto 0;margin-top: 20px;background: #F5F5F5;}
.lo-2-p1{text-align:center;}
.lo-2-p1 img{width: 70px;}
.lo-2-p2{width: 100%;float: left;}
.lo-2-p2 img{width: 15px;height: 20px;margin-right: 3%;display: block;margin-top: 10px;}
.div2 .input{display: block;;width: 90%;border: 1px solid #F5F5F5;background: #F5F5F5;}
.div2 span{margin-top: 10px;;display: block;width: 100%;;border-bottom: 1px solid #ccc}
.lo-2-p3 .sn{margin-right: 65%;}
.lo-2-p3 span{font-size: 10px;}
.lo-2-p3{word-spacing: 50%;}
.lo-2-p4{width: 100%;
margin-top: 30px;
padding: 10px;
border-radius: 10px;
    background-color: #d33d3c;
    border: 1px solid  #d33d3c;
    /* rgba(211,61 ,60 ,0.4) */
    font-size:14px;
    color: #FFFFFF ;margin: auto;}
.lo-2-p5{border-bottom: solid 1px #ddd;text-align: center;
    height: 10px;margin:20px 0;}
.lo-2-p5 span{font-size: 10px;display: block;
    color: #BBBBBB;
    line-height: 20px;
    height: 20rem;
    padding: 0 0.25rem;;}
.lo-2-p6{display: flex;justify-content: space-around;}
.lo-2-p6 span{display: block;}
.lo-2-p6 span img{width: 50px;}
</style>