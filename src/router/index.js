import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import help from '@/components/help.vue'
import home from '@/components/home.vue'
import login  from '@/components/login.vue'
import pay  from '@/components/pay.vue'
import personal  from '@/components/personal.vue'
import register  from '@/components/register.vue'
import signup  from '@/components/signup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: home
    },
    {
      path: '/help',
      name: '帮助',
      component: help
    },
    {
      path: '/home',
      name: '主页',
      component: home
    },
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {
      path: '/pay',
      name: '支付',
      component: pay
    },
    {
      path: '/personal',
      name: '个人中心',
      component: personal
    },
    {
      path: '/register',
      name: '注册',
      component: register
    },
    {
      path: '/signup',
      name: '报名',
      component: signup
    },
  ]
})
