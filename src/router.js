import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home.vue'
import Play from '@/components/pages/Play.vue'
import Setting from '@/components/pages/Setting.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/play',
      component: Play
    },
    {
      path: '/setting',
      component: Setting
    }
  ]
})
