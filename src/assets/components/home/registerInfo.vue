<template>
  <div class="regInfo">
    <div class="main-title">报名注册教程</div>
    <div class="content">
      <div class="sub-title">网页平台账号注册</div>
      <div class="time">2019年10月18日至2019年10月28日 </div>
      <div class="text">
        <div>1. 申请者应仔细阅读会议相关信息。各代表团领队需在规定时间内于官方网站上为学校代表团统一注册账号。</div>
        <div>2.注册完成的三个工作天内，各领队将收到确认邮件，请各代表团领队使用该账号进行后续的报名申请事宜。</div>
      </div>
      <div class="sub-title">提交报名申请事宜 </div>
      <div class="time">2019年10月18日至2019年10月29日</div>
      <div class="text">
        <div>请各代表团领队登入网页平台，完成填写代表团全体成员的相关信息，并于2019年10月29日前提交。</div>
        <div>报名成功后，各领队将收到确认报名邮件，请各代表团领队确认报名信息准确无误，如需作出任何更改，请直接与代表联系总监进行沟通。如申请表格提交一周后如未收到注册成功的确认邮件，请及时与我们取得联系，避免报名失效，错失名额。</div>
      </div>
      <div class="sub-title">委员会分配及缴费事宜</div>
      <div class="time">2019年10月31日至2019年11月5日</div>
      <div class="text">
        <div>1. 席位分配结果将于2019年10月31日于网站平台中统一发放予各领队，请领队进行确认，并根据各委员会的席位数量后方填写参加该委员会的代表姓名。网站平台信息将同时包括相关缴纳会费的通知，请领队于提交于填写信息后进行缴</div>
        <div>2. 会费以团队形式缴纳，统一由领队负责，大会不接受任何个人形式的会费支付。请各领队按照网站平台中的缴费步骤，在5天内完成代表团所有成员的支付。</div>
        <div>3. 会费支付完成后，各代表团领队将收到确认邮件，确认邮件将包括领队微信群二维码，请及时扫码入群。如代表团5天内未完成支付，默认为自动放弃参会资格。</div>
      </div>
      <div class="sub-title">学术测试与国家分配</div>
      <div class="time">2019年11月8日至2019年11月25日</div>
      <div class="text">
        <div>1. 代表需完成所在委员会拟定的学术测试。各委员会将自行设置测试内容与截止日期。</div>
        <div>2. 国家分配将考虑代表的学术测试结果。</div>
        <div>3. 国家分配结果将以邮件形式发送至领队。</div>
        <div>4. 国家分配结果将不接受更改或自行调整。</div>

      </div>
    </div>
    <div class="btn" @click="gotoSignup">点击报名</div>
  </div>
</template>
<script>
export default {
  methods:{
    gotoSignup(){
      this.$router.push('/signup')
    }
  }
}
</script>
<style lang="stylus" scoped>
.regInfo
  text-align left
  display flex
  flex-direction column
  align-items  center
  .main-title
    text-align center
    font-size 24px
    font-weight bold
  .content
    .sub-title
      text-align center
      font-size 20px
      line-height 40px
    .text
      text-indent 40px
      font-size 18px
      margin 20px auto
    .time
      color grey 
      text-align center
      font-size 16px
  .btn
    padding 13px 23px
    text-decoration none 
    background-color #a52a2a
    border-color #a52a2a
    width 120px
    border-radius 20px
    color #fff
    display inline-block
    line-height 1
    margin 20px auto
    font-size 14px
</style>