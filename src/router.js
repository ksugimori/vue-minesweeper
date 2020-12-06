import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home';
import Play from './views/Play';
import Setting from './views/Setting';

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
      component: Play,
    },
    {
      path: '/settings',
      component: Setting
    }
  ]
})