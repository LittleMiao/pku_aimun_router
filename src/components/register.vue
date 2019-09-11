<template>
  <div class="register-page">
    <headbar />
    <div class="register-body">
      <div class="main-title">注册</div>
      <div class="main-hint">
        <p>请注意：停止注册时间为（报名截止前两天就停止注册，待补日期）</p>
        <p>只有领队才需要注册并登陆，账号仅用以查看报名结果。如果希望报名，请联系学校模联协会领队，或大会代表联系总监。</p>
      </div>
      <div class="register-form">
        <el-form labelWidth="200px" label-position="left" :rules="rules" :model="user_info">
          <el-form-item label="是否是领队" prop="leader" >
            <el-radio v-model="user_info.leader" :label="true" >是</el-radio>
            <el-radio v-model="user_info.leader" :label="false" >否</el-radio>
          </el-form-item>
          <el-form-item label="学校姓名" prop="schoolName">
            <el-input size="medium" type="text" v-model="user_info.schoolName" placeholder="" clearable></el-input>
          </el-form-item>
          <el-form-item label="领队姓名" prop="leaderName">
            <el-input size="medium" type="text" v-model="user_info.leaderName" placeholder="" clearable></el-input>
          </el-form-item>
          <el-form-item label="是否是校内模联组织成员？
            如是，请说明职位。">
            <div class="isinPKU">
              <el-radio v-model="user_info.isPKU" :label="true" >是</el-radio>
              <el-input size="medium" type="text" v-model="user_info.position" placeholder="" :disabled="!user_info.isPKU"></el-input>
            </div>
            <el-radio v-model="user_info.isPKU" :label="false" >否</el-radio>
          </el-form-item>
          <el-form-item label="联系邮箱" prop="email">
            <el-input size="medium" type="text" v-model="user_info.email" placeholder="" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input size="medium" type="password" v-model="user_info.password" placeholder="" clearable></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="repassword">
            <el-input size="medium" type="password" v-model="user_info.repassword" placeholder="" clearable></el-input>
          </el-form-item>
        </el-form>
        <el-button class="login_btn" 
        @click="addUser" 
        type="primary" 
        round 
        >完成</el-button>
      </div>
     
    </div>
  </div>
</template>

<script>
import headbar from '../assets/components/common/headbar'

export default {
  components:{headbar},
  data(){
    var valiLeader = (rule, value, callback) => {
      if(!value || value === false){
        callback(new Error('请各学校领队进行报名注册！'))
      }
      else{
        callback()
      }
    }
    var valiPassword = (rule, value, callback) => {
      console.log(value)
      if (!value || value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.user_info.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      showResult: false,
      user_info:{
        email: '',
        leader: false,
        schoolName: '',
        leaderName: '',
        isPKU: false,

        position: '',
        password: '',
        repassword: '',
      },
      rules:{
        leader:[{ validator: valiLeader, trigger: 'blur'}],
        schoolName: [{required: true, message:'学校不能为空', trigger: 'blur'}],
        leaderName: [{required: true, message:'领队姓名不能为空', trigger: 'blur'}],
        email: [{required: true, message:'联系邮箱不能为空', trigger: 'blur'},
        {pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/, message:"请输入正确的邮箱格式" }],
        password: [{requred: true, message:'请输入密码', trigger: 'blur'},
        { pattern: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,20}$/, message: '密码为数字，小写字母，大写字母，特殊符号 至少包含三种，长度为 8-20位' }],
        repassword: [{required: true, validator: valiPassword, trigger: 'blur'}],
      }
    }
  },
  methods:{
    addUser(){
      if(!this.user_info.isPKU)
      {
        this.user_info.position = null
      }
      console.log(this)
      if(this.user_info.password!==this.user_info.repassword)
      {
        alert("两次输入的密码不一致，请再次尝试");
        return
      }
      if(!this.user_info.leader){
        alert("请各学校领队进行报名注册！")
        return
      }
      this.$ajax.post('/test/addUser',{
        schoolName: this.user_info.schoolName,
        leaderName: this.user_info.leaderName,
        isPKU: this.user_info.isPKU,
        position: this.user_info.position,
        email: this.user_info.email,
        password: this.user_info.password,
      }).then(success => {
          // this.dialogVisible = false;
          this.$message(success.data.message);
          // this.queryData()
          setTimeout(()=>{
            this.$router.push('/home')
          },200) 
      })
    }
  }
}
</script>

<style lang="stylus">
.isinPKU
  display flex
  align-items center
.register-page
  .register-body
    margin 20px 40px
  .main-title
    font-size 28px
    font-weight bold
    margin-bottom 20px
  .main-hint
    font-size 12px
    color grey
  .register-form
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin auto
    .el-form-item__label
      width 180px
    .el-form-item__content
      margin-left 180px
      width 300px
      .el-radio__input.is-checked .el-radio__inner
        background-color #a52a2a
        border-color #a52a2a
      .el-radio__input.is-checked+.el-radio__label
        color #a52a2a
      .el-input__inner:focus
        border-color #a52a2a
    .el-button--primary
      background-color #a52a2a
      border-color #a52a2a
      width 120px
</style>

