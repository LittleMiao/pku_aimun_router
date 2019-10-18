<template>
  <div id="app">
    <!-- <img src="../../assets/home/header.jpg" style="height: 120px"> -->
    <headbar />
    <!-- <imgSwiper /> -->
    <naviBar @changeContent="changeContent" />
    <mainContent :contentIndex="contentIndex"/>
  </div>
</template>

<script>
// import imgSwiper from '../assets/components/home/imgSwiper'
import mainContent from '../assets/components/home/mainContent'
import naviBar from '../assets/components/home/naviBar'
import headbar from '../assets/components/common/headbar'

export default {
  name: 'app',
  components: {
    // imgSwiper,
    mainContent,
    headbar,
    naviBar
  },
  data(){
    return{
      files: [],
      date: new Date(),
      isLogin: false,
      contentIndex: 0,
      userName: this.$cookies.get('userName'),
    }   
  },
  methods:{
    changeContent(data){
      this.contentIndex = data;
      console.log(this.contentIndex)
    },
    // getFiles () {
    //   const files = require.context('@/assets/img/swiper', false, /\.jpg$/).keys()
    //   for (let item of files) {
    //     let file = this.$imgSrc(item.substring(2))
    //     // base64的不加载
    //     if (file.indexOf('data:') !== 0) {
    //       this.files.push(file)
    //     }
    //   }
    //   console.log('files:',files)
    // },
    // // 图片预加载
    // preload (imgs) {
    //   let count = 0
    //   for (let img of imgs) {
    //     let image = new Image()
    //     image.src = img
    //     image.onload = () => {
    //       count++
    //       // 计算图片加载的百分数，绑定到percent变量
    //       let percentNum = Math.floor(count / imgs.length * 100)
    //       this.percent = `${percentNum}%`
    //     }
    //   }
    // }
  },
  mounted(){
  //   new Promise((resolve, reject) => {
  //     this.getFiles()
  //     if (this.files.length > 0) {
  //       resolve()
  //     }
  //   }).then(() => {
  //     console.log('files:',this.files)
  //     this.preload(this.files)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  }  
}
</script>

<style lang="stylus">
#app 
  // font-family 'Avenir', Helvetica, Arial, sans-serif
  // font-family PingFangSC-Regular
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  width 100%
  margin 20px auto 60px auto

</style>
