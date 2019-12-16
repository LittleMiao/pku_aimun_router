<template>
  <div class="person-page">
    <headbar />
    <div class="person-body">
      <div class="main-title">个人中心</div>
      <div class="main-content" v-if="!!userId">
        <div class="content-part">
          <div class="sub-title">基本信息</div>
          <ul class="person-info">
            <li>学校姓名: {{schoolName}}</li>
            <li>领队姓名: {{leaderName}}</li>
            <li>是否是校内模联组织成员: {{isPKU? "是": "否"}}</li>
            <li v-if="isPKU">职位: {{position}}</li>
            <li>联系邮箱: {{mail}}</li>
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
                  <td>{{register?"已通过审核":"正在审核中"}}</td>
                  <td>{{signup?"报名信息已确认":"报名信息确认中"}}</td>
                  <td>{{commit?"分配结果已公布":"分配结果待公布"}}</td>
                  <td>{{pay?"缴费成功":"缴费待确认"}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="btns">
          <div class="person-btn" @click="gotoSignup">{{signup? "查看报名信息" : "开始报名"}}</div>
          <div v-if="commit" class="person-btn" @click="gotoRes">查看分配结果</div>
        </div>
      </div>
      <div class="not-login" v-else>
        请先登录！
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
      userId: '',
      schoolName:'',
      leaderName:'',
      isPKU: 0,
      position:'',
      mail:'',
      register: false,
      signup: false,
      commit: false,
      pay: false
    }
  },
  methods:{
    gotoSignup(){
      this.$router.push('/signup');
    },
    gotoRes(){
      this.$router.push('/distribution');
    }
  },
  mounted(){
    console.log(this.$cookies.get('userId'));
    this.userId = this.$cookies.get('userId');
    if(this.userId){
      this.$ajax.post('/test/query_personal',{
        userId: this.userId
      }).then(data =>{
        let userInfo = data.data.info;
        this.schoolName = userInfo.school_name;
        this.leaderName = userInfo.leader_name;
        this.isPKU = userInfo.is_pku;
        this.position = userInfo.position;
        this.mail = userInfo.user_email;
      })
      this.$ajax.post('/test/queryCond',{
        userId: this.userId
      }).then(data =>{
          let condata = data.data.info;
          console.log(data)
          this.register = condata.register;
          this.signup = condata.signup;
          this.commit = condata.committee;
          this.pay = condata.fee;
      })
    }
    console.log(this)
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
  .not-login
    margin 60px auto
    font-size 24px
  .main-content
    margin 40px auto
    display flex
    flex-direction column
    justify-content center
    align-items center
    line-height 30px
    .btns
      margin-top 30px
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
