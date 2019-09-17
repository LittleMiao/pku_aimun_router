<template>
  <div class="page-body">
    <div class="content">
      <div class="default" v-if="contentIndex===0">
        <div class="content-title">为什么要参加AIMUN？</div>
        <div class="content-text">
          <ul>
            <li>
              <img src="../../img/home/main1.jpg" style="height: 400px">
              <div><p>深厚的学术基础和底蕴：</p><p>我们致力于维持AIMUN的超高学术水平。
              除了常规的模拟委员会，AIMUN还设置了特别的大使项目和工作语言为中文的一系列特殊委员会，持续进行对模联活动的学术创新探索。</p></div>
            </li>
            <li>
              <div><p>多元文化的汇集和交流：</p><p>每年都会接待来自世界各地的600余名代表参加，为这些对国际问题有着共同兴趣的年轻人们提供了一个绝佳平台，
              来自中国大陆、港澳台地区及海外青年才俊一道，将会议塑造为多元文化、多元观念、多元交流、多元收获的地区盛会。</p></div>

              <img src="../../img/home/main2.jpg" style="height: 400px">
              
            </li>
            <li>
              <img src="../../img/home/main3.jpg" style="height: 400px">
              <div><p>丰富的国际外交资源支持：</p><p>作为中国大陆唯一面向大学生的国际性模拟联合国大会，AIMUN每年都邀请到联合国官员、国内外政要及各国大使的出席开幕式并致辞。
              此外，大会也吸引了国内外各界人士的高度关注。</p></div>
            </li>
          </ul>
          <div class="more-info">
            <div class="info-button">
              <div @click="contentIndex=2" class="button">
                <div>了解更多</div>
              </div>
              <div @click="contentIndex=11" class="button" v-if="countdownflag===false">
                <div>报名注册</div>
                </div>
            </div>
            <div v-if="countdownflag===false" class="hint">距报名截止还有{{countdown}}</div>
            <div v-else-if="countdownflag===true" class="hint">报名已截止</div>
          </div>
        </div>
      </div>

      <pkuInfo v-else-if="contentIndex===1"></pkuInfo>
      <pkuAsia v-else-if="contentIndex===2"></pkuAsia>
      <secretary v-else-if="contentIndex===3"></secretary>
      <memberList v-else-if="contentIndex===4"></memberList>
      <memberList v-else-if="contentIndex===5"></memberList>
      <memberInfo v-else-if="contentIndex===6"></memberInfo>

      <aimunInfo v-else-if="contentIndex===7"></aimunInfo>
      <topicSetting v-else-if="contentIndex===8"></topicSetting>
      <rules v-else-if="contentIndex===9"></rules>
      <schedule v-else-if="contentIndex===10"></schedule>
      <registerInfo v-else-if="contentIndex===11"></registerInfo>

      <world v-else-if="contentIndex===12"></world>
      <contactus v-else-if="contentIndex===13"></contactus>
      <question v-else-if="contentIndex===14"></question>
    </div> 
  </div>
</template>
<script>
import { setTimeout } from 'timers';
import pkuInfo from './pkuInfo';
import secretary from './secretary';
import committee from './committee';
import memberInfo from './memberInfo';
import pkuAsia from './pkuAsia';
import memberList from './memberList'

import aimunInfo from './aimunInfo';
import topicSetting from './topicSetting';
import rules from './rules';
import schedule from './schedule';
import registerInfo from './registerInfo';

import world from './world';
import contactus from './contactus';
import question from './question';


export default {
  props:['contentIndex'],
  data(){
    return{
      countdown: "",
      countdownflag: false,
      endTime: 1569859199000,
      // contentIndex: 0
    }    
  },
  components:{
    pkuInfo,
    secretary,
    committee,
    memberInfo,
    memberList,
    pkuAsia,
    aimunInfo,
    topicSetting,
    rules,
    schedule,
    registerInfo,
    world,
    contactus,
    question
  },
  // watch:{
  //   'contentIndex':(newVal,oldVal)=>{
  //     console.log("display:", newVal);
  //     this.setCur(newVal);
  //   }
  // },
  methods:{
    // setCur(data){
    //   this.curIdx = data;
    // },
    gotoRegister(){
      this.$router.push('/register')
    },
    timeDown () {
      const endTime = new Date(this.endTime)
      const nowTime = new Date();
      let leftTime = parseInt((endTime.getTime()-nowTime.getTime())/1000)
      let d = parseInt(leftTime/(24*60*60))
      let h = this.formate(parseInt(leftTime/(60*60)%24))
      let m = this.formate(parseInt(leftTime/60%60))
      let s = this.formate(parseInt(leftTime%60))

      if(leftTime <= 0){
        this.countdownflag = true
      }
      else{
        this.countdownflag = false
      }
      this.countdown = `${d}天${h}小时${m}分${s}秒`
      // this.countdown = endTime
    },
    formate (time) {
      if(time>=10){
        return time
      }else{
        return `0${time}`
      }
    },

  },
  mounted(){
    setInterval(()=>{
      this.timeDown();
    },1000);
    
    console.log(this);
  }
}
</script>

<style lang="stylus">
.page-body
  width 80%
  margin 60px auto
  background-color white
  // border 1px solid black
  .content
    font-size 18px
    line-height 24px
    margin 40px
    text-indent 36px
    .content-title
      text-align center
      font-size 24px
      font-weight bold
      margin 30px auto
    .content-text
      text-align left
      li  
        display flex
        align-items center
        margin 20px auto
        text-decoration none
        list-style-type none
        div 
          margin auto 30px
    .more-info
      .hint
        text-align center
        color grey
        font-size 16px
      .info-button
        display flex
        justify-content center
        align-items center
        margin 50px 0
        .button
          height 50px
          width 160px
          border-radius 20px
          color white
          background-color #a52a2a
          display flex
          justify-content center
          align-items center
          div
            padding-right 30px
            height 25px 
            display flex
            justify-content center
            align-items center
          &:last-child
            margin-left 50px
</style>

