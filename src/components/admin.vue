<template>
  <div class="admin">
    <div class="register">
      <div>目前注册人数：{{userInfo.length}}</div>
      <div class="regdetail" v-for="user in userInfo" :key="user.user_id">
        <div>
          <div>邮箱：{{user.user_email}}</div>
          <div>学校名称：{{user.school_name}}</div>
          <div>领队名称：{{user.leader_name}}</div>
          <div>是否PKU模联成员：{{user.is_pku ? '是' : '否'}}</div>
          <div v-if="user.is_pku">pku模联职位：{{user.position}}</div>
        </div>
        <div v-for="cond in condInfo" :key="cond.user_id">
          <div v-if="cond.user_id === user.user_id">
            <div class="btn">{{cond.register ? "注册信息已确认": "确认注册信息"}}</div>
            <div class="btn">{{cond.signup ? "报名信息已确认": "确认报名信息"}}</div>
            <div class="btn">{{cond.committee  ? "名额分配已确认": "确认名额分配"}}</div>
            <div class="btn">{{cond.fee ? "支付已确认": "确认支付信息"}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="signup">
      <div>目前报名人数：{{signupInfo.length}}</div>
      <div class="signdetail" v-for="sign in signupInfo" :key="sign.userInfo">
        <div>学校名称：{{sign.school_name}}</div>
        <div>领队名称：{{sign.leader_name}}</div>
        <div>志愿分配情况：UNSC {{sign.unsc_num}} / UNGA4 {{sign.unga4_num}} / UNGA1 {{sign.unga1_num}} / UNGA2 {{sign.unga2_num}} / 5G {{sign.inter5g_num}} / MPC {{sign.mpc_num}}</div>
        <div class="btn" @click="updateSign(sign.user_id)"> 确认报名信息 </div>
        <div class="memdetail" v-for="mem in memberInfo" :key="mem.present_id">
          <div v-if="sign.user_id === mem.user_id">
            <div>代表名称：{{mem.name}}</div>
            <div>代表性别：{{mem.gender}}</div>
            <div>代表国籍：{{mem.nation}}</div>
            <div>代表年级：{{mem.grade}}</div>
            <div>代表电话：{{mem.tel}}</div>
            <div>代表邮箱：{{mem.email}}</div>
            <div>代表微信：{{mem.wechat}}</div>
            <div v-if="mem.more">代表备注：{{mem.more}}</div>
            <div class="expdetail" v-for="exp in expInfo" :key=" exp.present_id + exp.exp_id">
              <div v-if="exp.present_id === mem.present_id && exp.conf_name && exp.conf_year && exp.conf_role">
                <div>会议名称：{{exp.conf_name}}</div>
                <div>会议年份：{{exp.conf_year}}</div>
                <div>参会角色：{{exp.conf_role}}</div>
                <div v-if="exp.is_award">
                  所获奖项：{{exp.award_name}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      userInfo:[],
      signupInfo:[],
      memberInfo:[],
      expInfo: [],
      codInfo:[],
    }
  },
  methods:{
    updateSign(uid){
      this.$ajax('/test/getSignup',{
        userId: uid
      })
      console.log(uid, "signup!")
    }
  },
  mounted(){
    this.$ajax('/test/userInfo',{}).then(data =>{
      let uinfo = data.data.info;
      console.log(uinfo)
      this.userInfo = uinfo;
    })
    this.$ajax('/test/signupInfo',{}).then(data =>{
      let sinfo = data.data.info;
      console.log(sinfo)
      this.signupInfo = sinfo;
    })
    this.$ajax('/test/memberInfo',{}).then(data =>{
      let minfo = data.data.info;
      console.log(minfo)
      this.memberInfo = minfo;
    })
    this.$ajax('/test/expInfo',{}).then(data =>{
      let einfo = data.data.info;
      console.log(einfo)
      this.expInfo = einfo;
    })
    this.$ajax('/test/condInfo',{}).then(data =>{
      let cinfo = data.data.info;
      console.log(cinfo)
      this.condInfo = cinfo;
    })
  }
}
</script>
<style lang="stylus">
.admin
  width 80%
  margin 40px 
  text-align left
  .register
    margin 30px
    .regdetail
      margin 20px
  .signup
    margin 30px
    .signdetail
      margin 20px
      .memdetail
        margin 10px
        .expdetail
          margin 5px
  .btn
    border-radius 5px
    background-color steelblue 
    color white
    width 120px
    height 26px
    text-align center

</style>