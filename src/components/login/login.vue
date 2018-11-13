<!--登陆模块-->
<template>
  <div id="content-box">
      <h1>商机无限商户管理系统</h1>
      <div class="login-container">
         <h2>商家-登陆</h2>
         
         <div>
           <label for="account">账号</label>
           <el-input class="input" type="text" placeholder="请输入账号" id="account"  clearable v-model="account"></el-input>
         </div>

        <div v-if="isShow" class="password-box">
           <label for="password">密码</label>
           <el-input class="input" type="password" placeholder="请输入密码" id="password" v-model="password">
              <i slot="suffix" class=" el-input__icon iconfont icon-xianshi" @click="changetype"></i>
           </el-input>
        </div>     

        <div v-else class="password-box">
           <label for="password1">密码</label>
           <el-input class="input" type="text" placeholder="请输入密码" id="password1" v-model="password">
              <i slot="suffix" class=" el-input__icon iconfont icon-yincang" @click="changetype"></i>
           </el-input>
        </div> 
         <!-- 记住密码和记住账号 -->
        <div class="checkbox">
          <el-checkbox v-model="checkedAccount">记住账号</el-checkbox>
          <el-checkbox v-model="checkedPassword">记住密码</el-checkbox>
        </div>   
        <!-- 登陆按钮 -->
        <el-button type="primary" class="">登陆</el-button>

        <div>
          <router-link to="">忘记密码</router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account:'',
      password:"",
      isShow:true,
      checkedAccount:false,
      checkedPassword:false
    };
  },
  methods:{
    // 切换密码明暗文显示
    changetype(){
      this.isShow=!this.isShow
    }
  }

}

</script>
<style scoped>
 #content-box{
  width:100%;
  height:100%;
  background-image: url('../../../static/imgs/backImg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
 }

 h1{
   font-weight:500;
    font-family: inherit;
    color:inherit;
    padding:46px 0;
 }
 h2{
   font-weight:500;
   padding:20px 0;
 }

 .login-container{
   width:30%;
   margin-left:35%; 
   background-color:rgba(255,255,255,0.8);
   border-radius:15px;
 }

 .el-input{
   width:80%;
   padding:10px 0;
 }
 .password-box{
   margin-top:20px;
 }
 .checkbox{
   width:89%;
   height:50px;
   margin-left:5.5%;
   line-height:50px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
 }

.el-checkbox__inner{
  width:20px !important;
}
.el-button--primary{
  width:90%;
  font-size:22px;
 
}
</style>
