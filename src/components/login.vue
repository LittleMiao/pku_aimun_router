<template>
  <div class="login-page">
    <headbar />
    <div class="login-form" v-if="!userId">
      <el-form labelWidth="80px" label-position="left" :rule="rules" :model="login">
        <el-form-item label="用户名" prop="email">
          <el-input size="medium" type="text" v-model="login.userName" placeholder="邮箱" clearable></el-input>
        </el-form-item>
        <el-form-item v-if="visible" label="密码" prop="password">
          <el-input size="medium" type="password" v-model="login.password" placeholder="请输入密码" 
          maxlength=20 minlength=8>
            <i slot="suffix" title="显示密码" @click="changePass" style="cursor:pointer;"
              class="el-input__icon iconfont pku-aimun-iconicon-test1"></i>
          </el-input>
        </el-form-item>
        <el-form-item v-else label="密码" prop="password">
          <el-input size="medium" type="text" v-model="password" placeholder="请输入密码"
            maxlength=20 minlength=8>
            <i slot="suffix" title="隐藏密码" @click="changePass" style="cursor:pointer;"
              class="el-input__icon iconfont pku-aimun-iconicon-test" src=""></i>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button class="login_btn" 
        @click="loginCheck" 
        type="primary" 
        round>登录</el-button>
      <div class="hint">
        <div @click="gotoRegister">如无账号，请先注册</div>
        <div>请注意：停止注册时间为10月28日</div>
      </div>
    </div>
    <div class="login-form" v-else>
      您已登录！
    </div>
  </div>
</template>


<script>
import headbar from '../assets/components/common/headbar'

export default {
  components:{ headbar},
  //   topblock,
  //   footerinfo
  // },
  data() {
    return {
      login:{
        userName: '',
        password: '',
      },
      isBtnLoading: false,
      visible: true,
      userId: this.$cookies.get('userId'),
      rules:{
        password: [{required: true, message:'请输入密码', trigger: 'blur'}],
        email: [{required: true, message:'请输入邮箱', trigger: 'blur'}],
      }
    }
  },
  created () {
  },
  methods: {
    changePass() {
      this.visible = !this.visible;
    },
    loginCheck() {
      this.$ajax.post('/test/login',{
        password: this.login.password,
        email: this.login.userName
      }).then(success =>{
        console.log(success)
        this.$message(success.data.message);
        if(success.data.ok){
          this.$cookies.set('userName', this.login.userName)
          // console.log(this.$cookies.get('userName'));
          this.$ajax.post('/test/getUid',{
            email: this.login.userName
          }).then(data => {
            console.log("uid:",data.data.info);
            this.userId = data.data.info;
            this.$cookies.set('userId', this.userId)
          })
          setTimeout(()=>{
            this.$router.push('/home')
          },200) 
          }
          
      })
    },
    gotoRegister(){
      this.$router.push('/register');
    }
  },
  mounted(){
    console.log(this.$cookies.get('userId'))
  }
}
</script>

<style lang="stylus">
.login-page
  .login-form
    margin 60px 40px
    display flex
    flex-direction column
    justify-content center
    align-items center
    .el-input
      .el-input__inner
        width 300px
      .el-input__inner:focus
        border-color #a52a2a
      .el-input__suffix
        left 275px
        i
          width 20px
          height 20px
          .icon-xianshi
            background url('../assets/img/login/notshow.jpg') center no-repeat
    .el-button--primary
      background-color #a52a2a
      border-color #a52a2a
      width 120px
    .hint
      color grey
      font-size 12px
      line-height 16px
      margin 40px auto
</style>

