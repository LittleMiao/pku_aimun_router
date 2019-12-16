<template>
  <div class="scroll">
    <swiper :options="swiperOption" ref="mySwiper" v-if="files.length>0">
    <!-- slides -->
      <swiper-slide v-for="item in files" :key="item">
        <img v-lazy="'../../../../static/swiper/'+item+'.jpg'" style=" height:100%"> 
      </swiper-slide>
     
      <!-- Optional controls -->
      <div class="swiper-pagination "  slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper> 
    <div class="text-wrapper">
      <div class="swiper-text">
        <div class="title">主题：联袂、合倡、国是共襄</div>
        <div class="sub-title">2019年12月13至15日 | 中国，北京</div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'  
export default {
  name: 'HelloWorld',
  components: {  
    swiper,  
    swiperSlide  
  },  
  data () {
    return {
      files: ['5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
      swiperOption: {  
        notNextTick: true,
        //循环
        loop:true,
        //设定初始化时slide的索引
        initialSlide:0,
        //自动播放
        // autoplay:true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        // 设置轮播
        effect : 'slide',
        //滑动速度
        speed:800,
        //滑动方向
        direction : 'horizontal',
        //小手掌抓取滑动
        // grabCursor : true,
        //滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function(){
              // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          },
        },
        //左右点击
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        //分页器设置         
        pagination: {
            el: '.swiper-pagination',
            clickable :true
        },
        swiperSlides: [1, 2, 3, 4]
      }
    }
  },
  computed: {  
    swiper() {  
      return this.$refs.mySwiper.swiper;  
    }  
  }, 
  methods:{
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
color: #42b983;
}
.swiper-slide{
  height:640px;
}
.text-wrapper{
  width:100%;
  display: flex;
  position: absolute;
  top: 740px;
  justify-content: center;
}
.swiper-text{
  color: white;

  z-index: 999;
  height: 100px;
  width: 880px;
  text-align: center;
  background-color: rgba(160, 160, 160, 0.4)
}

.title{
  font-size: 32px;
  line-height: 36px;
  margin-top: 20px;
}
.sub-title{
  font-size: 24px;
  line-height: 28px;
}
</style>