import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import PortfolioKai from '../views/PortfolioKai.vue'
import Works from '../views/Works.vue'
import About from '../views/About.vue'
import Regist from '../views/Regist.vue'
import Iroiro from '../views/Iroiro.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/portfolio', name: 'portfolio', component: Portfolio },
  { path: '/artworks', name: 'artworks', component: PortfolioKai },
  { path: '/works', name: 'works', component: Works },
  { path: '/about', name: 'about', component: About },
  { path: '/regist', name: 'regist', component: Regist },
  { path: '/iroiro', name: 'iroiro', component: Iroiro },
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