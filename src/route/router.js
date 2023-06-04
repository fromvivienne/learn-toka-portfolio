import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Work from '../views/Work.vue'
import About from '../views/About.vue'
import Regist from '../views/Regist.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/portfolio', name: 'portfolio', component: Portfolio },
  { path: '/work', name: 'work', component: Work },
  { path: '/about', name: 'about', component: About },
  { path: '/regist', name: 'regist', component: Regist },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  }
})

export default router