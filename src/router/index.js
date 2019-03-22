import Vue from 'vue'
import Router from 'vue-router'
//import father from '@/components/father'
//import son from '@/components/son'
import login from '../pages/Login/Login.vue'
import main from '../pages/main/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
   /**
    * { path: '/son',
    name: 'son',
    component: son
    },
    */ 
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})
