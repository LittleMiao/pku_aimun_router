<template>
  <div class="person-page">
    <headbar />
    <div class="person-body">
      <div class="main-title">个人中心</div>
      <div class="main-content">
        <div class="content-part">
          <div class="sub-title">基本信息</div>
          <ul class="person-info">
            <li>学校姓名：XXX</li>
            <li>领队姓名：XXX</li>
            <li>是否是校内模联组织成员：是/否</li>
            <li>职位：XXX（若是）</li>
            <li>联系邮箱：XXX</li>
          </ul>
        </div>
        <div class="content-part">
          <div class="sub-title">当前状态</div>
          <div class="condition-info">
            <table class="condition-table">
              <tbody>
                <tr>
                  <td></td>
                  <td>注册信息</td>
                  <td>报名信息</td>
                  <td>委员会分配</td>
                  <td>缴费</td>
                </tr>
                <tr>
                  <td>状态</td>
                  <td>已通过审核</td>
                  <td>报名信息已确认</td>
                  <td>分配结果已公布</td>
                  <td>缴费成功</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="btns">
          <div class="person-btn" @click="gotoSignup">查看报名信息</div>
          <div class="person-btn">查看分配结果</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headbar from '../assets/components/common/headbar'

export default {
  components:{headbar},
  data(){
    return {
      register: false,
      signup: false,
      commit: false,
      pay: false
    }
  }
}
</script>

<style lang="stylus">
.person-body
  margin 20px 40px
  .main-title
    font-size 28px
    font-weight bold
    margin-bottom 20px
  .main-content
    margin 40px auto
    display flex
    flex-direction column
    justify-content center
    align-items flex-start
    .btns
      display flex
      div:last-child
        margin-left 20px
    .person-btn
      padding 13px 23px
      text-decoration none 
      background-color #a52a2a
      border-color #a52a2a
      width 120px
      border-radius 20px
      color #fff
      display inline-block
      line-height 1
      text-align center
      margin 20px auto
      font-size 14px
    .content-part
      .sub-title
        margin-bottom 30px
        font-size 22px
      .person-info
        list-style-type none
        line-height 24px
        margin-bottom 40px
      .condition-info
        // display flex
        // justify-content center
        // align-items center
        // width 100%
        
        margin 0 auto
        .condition-table
          border solid 1px black
          border-collapse collapse
          width 100%
          margin 0 auto
          td
            width 160px
            height 30px
            border solid 1px black
            text-indent 5px
</style>
