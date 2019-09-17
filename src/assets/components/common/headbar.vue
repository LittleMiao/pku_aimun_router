<template>
  <div class="head-wrapper">
    <div class="head-tip">
      <div id="time">{{date | formateDate }}</div>
      <div class="log-info" v-if="!isLogin"> 
        <div class="log-item" @click="toLogin" > 登录 </div>
        <div class="log-item" @click="toRegister" v-if="!isLogin"> 注册 </div>
        <!-- <div class="log-item" @click="toHelp"> 帮助 </div> -->
      </div>
      <div class="log-info" v-else>
        <div class="log-item wide" @click="toPersonal">个人中心</div>
        <div class="log-item wide" @click="logout" > 退出登录 </div>
        <!-- <div class="log-item" @click="toHelp"> 帮助 </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      date: new Date(),
      isLogin: false,
      userName: ''
    }
  },
  mounted() {  
    var _this = this;   
    this.timer = setInterval(function () {
      _this.date = new Date();  
    },1000);
    this.userName = this.$cookies.get('userName');
    if(this.userName && this.userName !== ''){
      this.isLogin = true;
    }
  },
  beforeDestory:function () { //清除定时器
      if (this.timer){
          clearInterval(this.timer);  //在Vue实例销毁前，清除定时器
      }
  },
  filters:{
    formateDate(){
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var day = date.getDate();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      // console.log(day)
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      //整理数据并返回
      return year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
    },
  },
  methods:{
    logout(){
      this.$cookies.remove('userName');
      setTimeout(()=>{
        this.$router.go(0)
      },200) 
    },
    toHelp(){
      this.$router.push('/help')
    },
    toRegister(){
      this.$router.push('/register')
    },
    toLogin(){
      this.$router.push('/login')
    },
    toPersonal(){
      this.$router.push('/personal')
    }
  }
}
</script>

<style lang="stylus">
.head-wrapper
  width 100%
  background-color rgb(165,42,42)
  color #E5E3E3
  height 60px
  .head-tip
    padding  20px 60px
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .log-info
      display flex
      flex-direction row
      justify-content space-evenly
      .log-item
        width 60px
        &.wide 
          width 80px

</style>

