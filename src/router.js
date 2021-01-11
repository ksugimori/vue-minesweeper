import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/templates/Home.vue';
import Play from '@/components/templates/Play.vue';
import Setting from '@/components/templates/Setting.vue';

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/play',
      component: Play,
    },
    {
      path: '/setting',
      component: Setting,
    }
  ]
})
