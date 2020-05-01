<template>
  <div class="navi-body">
    <div class="list" @click="showImg=!showImg">
      <img src="../../img/home/list.png" style="height: 30px">
    </div>
    <div class="show-img" v-if="showImg" @click="changeContent(0)">
      <img src="../../img/home/header.jpg" style="height: 100px">
    </div>
    <div class="show-bar" v-else>
      <div class="navi-bar">
        <div class="navi-text" @mouseenter="showMenu1" @mouseleave="hideMenu1">关于我们</div>
        <div class="navi-text" @mouseenter="showMenu2" @mouseleave="hideMenu2"><p>北京大学</p><p>学生模拟联合国校际交流会</p></div>
        <div class="navi-text" @click="changeContent(12)"><p>亚洲国际模拟联合国大会</p><p>(AIMUN)</p></div>
        <div class="navi-text" @click="changeContent(13)">联系我们</div>
        <div class="navi-text" @click="changeContent(14)">常见问题</div>
      </div>

      <div class="menu menu-1" v-if="show1 || control1" @mouseenter="showLong1" @mouseleave="hideLong1">
        <div class="item red" @click="changeContent(1)">北京大学</div>
        <div class="item white" @click="changeContent(2)">北京大学亚洲模拟联合国大会</div>
        <div class="item red" @click="changeContent(3)">秘书长寄语</div>
        <!-- <div class="item" @click="changeContent(4)" @mouseenter="showMenu3" @mouseleave="hideMenu3">组委介绍</div> -->
        <div class="item white" @click="changeContent(4)" >AIMUN2020组委会名单</div>
      </div>
      <div class="menu menu-2" v-if="show2 || control2" @mouseenter="showLong2" @mouseleave="hideLong2">
        <div class="item red" @click="changeContent(7)">简介</div>
        <div class="item white" @click="changeContent(8)">委员会及议题设置</div>
        <div class="item red" @click="changeContent(9)">议事规则</div>
        <div class="item white" @click="changeContent(10)">大会日程</div>
        <div class="item red"  @click="changeContent(11)" @mouseenter="showMenu4" @mouseleave="hideMenu4">报名注册</div>
      </div>
      <!-- <div class="menu menu-3" v-if="show3 || control3" @mouseenter="showLong3" @mouseleave="hideLong3">
        <div class="item" @click="changeContent(5)">AIMUN2020组委会名单</div>
        <div class="item" @click="changeContent(6)">组委成员简介</div>
      </div> -->
      <div class="menu menu-4" v-if="show4 || control4" @mouseenter="showLong4" @mouseleave="hideLong4">
        <div class="item white" @click="changeContent(11)">报名注册须知</div>
        <div class="item red" @click="gotoRegister">点击报名</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show1:false,
      show2:false,
      show3:false,
      show4:false,
      control1:false,
      control2:false,
      control3:false,
      control4:false,
      showImg: true
    }
  },
  methods:{
    gotoRegister(){
      this.$router.push('/signup')
    },
    changeContent(data){
      console.log("changeTo",data);
      this.$emit('changeContent', data);
    },
    showMenu1(){
      setTimeout(()=>{
        this.show1 = true;
        this.show2 = false;
        },300);
    },
    showMenu2(){
      setTimeout(()=>{
        this.show2 = true;
        this.show1 = false;
        },300);
    },
    showMenu3(){
      setTimeout(()=>{
        this.show3 = true
      },300);
    },
    showMenu4(){
      setTimeout(()=>{
      this.show4 = true
      },300);
    },
    showLong1(){
      this.control1=true;
    },
    showLong2(){
      this.control2=true;
    },
    showLong3(){
      this.control1=true;
      this.control3=true;
    },
    showLong4(){
      this.control2=true;
      this.control4=true;
    },
    hideLong1(){
      this.control1=false;
    },
    hideLong2(){
      this.control2=false;
    },
    hideLong3(){
      this.control1=false;
      this.control3=false;
    },
    hideLong4(){
      this.control2=false;
      this.control4=false;
    },
    hideMenu1(){
      setTimeout(()=>{
        this.show1 = false;
        this.show3 = false;
        },2000);
    },
    hideMenu2(){
      setTimeout(()=>{
      this.show2 = false
      this.show4 = false
      },2000);
    },
    hideMenu3(){
      setTimeout(()=>{
      this.show3 = false
      },2000);
    },
    hideMenu4(){
      setTimeout(()=>{
      this.show4 = false
      },2000);
    },
  },
}
</script>

<style lang="stylus">
.navi-body
  width 100%
  margin 0 20px 20px 20px
  background-color white
  display flex
  flex-direction row
  align-items center
  height 120px
  z-index 10
  // .list
  //   background-image url("../../assets/home/list.png")
  .show-img
    margin-left 20px
  .show-bar
    width 100%
    margin-left 20px
    .navi-bar
      font-size 18px
      display flex
      flex-direction row
      justify-content space-evenly
      align-items center
      
      .navi-text
        // border 1px solid black
        width 20%
        height 60px
        display flex
        flex-direction column
        align-items center
        justify-content center
        &:hover
          background-color #a52a2a
          color white
        p 
          margin 5px auto
    .menu
      background-color white
      width 19%
      text-align center
      margin-top 20px
      position absolute
      color #444444
      z-index 10
      &:hover
        display block
      .item 
        margin-left 0
        height 30px
      
        &:hover
          color #a52a2a
        // &.red 
        //   background-color #a52a2a
        //   color white
        //   &:hover
        //     color #444444
    .menu-1
      left 5%
    .menu-2
      left 24%
    .menu-3
      left 20%
      top 260px
    .menu-4
      left 43%
      top 290px
    
</style>


