<template>
  <div id="reg">
    <el-row :gutter="24" style="margin:0;width:100%;text-align:center" class="rr">
      <el-col :span="3">
        <div class="grid-content bg-purple" @click="goto('/cart')">
          <i class="el-icon-arrow-left"></i>
        </div>
      </el-col>
      <el-col :span="18">
        <div
          class="grid-content bg-purple"
          style="padding:8px 0;font-size: 18px;text-overfrew: ellipsis;color:#fff"
        >账号注册</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple" style>
          <i></i>
        </div>
      </el-col>
    </el-row>

  <div class="re-1">
   <div class="re">
       <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="" class="demo-ruleForm">
         <el-form-item label="" prop="age">
    <el-input v-model.number="ruleForm.age" placeholder="请输入手机号"></el-input>
  </el-form-item>
  <div class="lo-2-p2"><el-form-item label="" prop="pass"><el-input type="password" class="input" placeholder="设置密码(6-20位英文字母或数字)" v-model="ruleForm.pass" autocomplete="off"></el-input></el-form-item></div>
  
  <el-form-item label="" prop="checkPass">
    <el-input type="password" placeholder="请再次输入密码" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
     <p class="re-2-p2-1">
          <input type="text" placeholder="输入4位验证码" />
          <img src="https://www.aizhiyi.com/mobile/index.php?act=seccode&op=makecode&t=0.024734153840457296" alt="" class="codeimg">
          <span></span>
        </p>
         <div class="re-2-p3">
          <input type="text" placeholder="输入短信验证码" />
           <van-button slot="button" size="small" type="primary" class="van">发送验证码</van-button>
          <p></p>
        </div>
    <el-button type="primary" @click="submitForm('ruleForm')" class="lo-2-p4">注 册</el-button>
    <div class="re-2-p5">
          <input type="checkbox" />
          <span>阅读并且同意</span>
          <a href="">《服务协议》</a>
          <a href="">《隐私协议》</a>
        </div>
    <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
  </el-form-item>
</el-form>
   </div>
   </div>
    <!-- <div class="re">
      <div class="re-2">
        <p class="re-2-p2">
          <input type="text" placeholder="请输入手机号" />
          <span></span>
        </p>
        <p class="re-2-p2">
          <input type="text" placeholder="设置密码 (6-20位英文字母或数字)" />
          <span></span>
        </p>
        <p class="re-2-p2">
          <input type="text" placeholder="请再次输入密码" />
          <span></span>
        </p>
        <p class="re-2-p2-1">
          <input type="text" placeholder="输入4位验证码" />
          <img src="https://www.aizhiyi.com/mobile/index.php?act=seccode&op=makecode&t=0.024734153840457296" alt="" class="codeimg">
          <span></span>
        </p>
        <div class="re-2-p3">
          <input type="text" placeholder="输入短信验证码" />
           <van-button slot="button" size="small" type="primary" class="van">发送验证码</van-button>
          <p></p>
        </div>
        <p class="re-2-p4">
          <button>注 册</button>
        </p>
        <p class="re-2-p5">
          <input type="checkbox" />
          <span>阅读并同意</span>
          <span>服务协议</span>
          <span>隐私协议</span>
        </p>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
   data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          // } else {
          //   if (value < 18) {
          //     callback(new Error('必须年满18岁'));
          //   } else {
          //     callback();
          //   }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
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
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
//   methods: {
//     goto(name) {
//       this.$router.push(name);
//     }
//   }
// };
</script>
<style scoped>
#reg{background: #F5F5F5;}
.rr {
  background: #d33d3c;
}
.rr i {
  font-size: 30px;
  padding: 5px 0;
  color: #fff;
}
.re-1 {
  width: 100%;
background: #F5F5F5;
}
.re {
  width: 80%;
  margin: auto;
  margin-top: 50px;
 background: #F5F5F5;
}
.van{width: 83px;height: 34px;background: #d33d3c;border: 1px solid #d33d3c;}
.div-1{display: flex;}
.lo-2-p4{width: 100%;
margin-top: 30px;
padding: 10px;
border-radius: 10px;
    background-color: #d33d3c;
    border: 1px solid  #d33d3c;
    /* rgba(211,61 ,60 ,0.4) */
    font-size:14px;
    color: #FFFFFF ;margin: auto;}
.re-2-p2-1{display: flex;}
.re-2-p2-1 input{width: 65%;border: 1px solid #E0E3E9;display: block;padding-left: 15px;color:#BBBBBB;border-radius: 5px;}
.re-2-p2-1 img{display: block;;width: 90px;height: 40px;text-align: center;}
.re-2-p3{margin:20px 0 20px 0;}
.re-2-p3 input{width: 66%;border: 1px solid #E0E3E9;padding-left: 15px;color:#BBBBBB;border-radius: 5px;}
.lo-2-p5{border-bottom: solid 1px #ddd;text-align: center;
    height: 10px;margin:20px 0;}
.lo-2-p5 span{font-size: 10px;display: block;
    color: #BBBBBB;
    line-height: 20px;
    height: 20rem;
    padding: 0 0.25rem;;}
.lo-2-p5 a{color: #408BE2;}
</style>