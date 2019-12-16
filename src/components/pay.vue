<template>
  <div class="pay">
    <headbar />
    <div class="title">缴费</div>
    <div class="choose">
      <div class="subtitle">请选择付款方式：</div>
      <div class="choice">
        <el-radio v-model="method" :label="0" >支付宝（不支持提供发票）</el-radio>
        <el-radio v-model="method" :label="1" >对公转账（提供发票，含5.6%税费，即每位代表人民币255元）</el-radio>
      </div>
    </div>
    <div class="detail">
      <div v-if="method===0">
        <div class="subtitle">缴费通知</div>
        <div class="head">各位领队请注意：</div>
        <div class="info">每位代表的费用为 240人民币。请按照你们所提交的代表数量，扫描下方二维码进行缴费。同时，请在缴费备注注明【学校名字-代表人数】，并将缴费截图发送到zhaopu.zhang@aimun.org.cn（张昭璞，财务总监）。由于我们将会在11月6号公布最终委员会分配，并在11月8日公布各委员会学术测试，希望各位领队能配合缴费流程，于11月5日之前完成缴费手续。
        另外，观察员与指导教师的报名与缴费将在稍后在领队微信群公布。领队微信群将在11月6日后建立，届时代表联系总监将以电邮通知各领队。</div>
        <img src="../../static/pay/zfb.jpg" style="width: 200px">
      </div>
      <div v-else-if="method===1">
        <div class="info">
        请联系代表联系总监（contact@aimun.org.cn），并于11月5日之前完成支付手续。
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import headbar from '../assets/components/common/headbar'

// import topblock from '../../components/common/topblock'
// import footerInfo from '../../components/common/footerInfo'
export default {
  components:{
    headbar,
    // topblock,
    // footerInfo,
  },
  data(){
    return {
      method: 0,
    }
  }
}
</script>

<style lang="stylus">
.pay
  .el-radio__input.is-checked+.el-radio__label
    color #a52a2a
  .el-radio__input.is-checked .el-radio__inner
    color #a52a2a
    background  #a52a2a
    border-color #a52a2a
  .title
    margin 30px
    font-size 26px
  .subtitle
    font-size 18px
    margin 20px 
  .choose
    margin 30px 200px
    .choice
      display flex
      flex-direction column
      align-items flex-start
      span 
        line-height 22px
  .detail
    .info
      text-indent 26px
      margin 30px 100px
    .head
      text-align left
      margin-left 100px
        
</style>
