<template>
  <div id="app">
    <!-- <headerBar /> -->
    <router-view :key="$route.fullPath"/>
    <footerInfo />
  </div>
</template>

<script>
import headerBar from './assets/components/common/headbar'
import footerInfo from './assets/components/common/footerInfo'
export default {
  name: 'App',
  components:{
    headerBar,
    footerInfo
  },
  data(){
    return{
      userName: this.$cookies.get('userName')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
