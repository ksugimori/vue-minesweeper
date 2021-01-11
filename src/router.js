import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/templates/Home';
import Play from './components/templates/Play';
import Setting from './components/templates/Setting';

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
