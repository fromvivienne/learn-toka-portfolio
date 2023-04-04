import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Interviewer from '../views/Interviewer.vue'
import Work from '../views/Work.vue'
import About from '../views/About.vue'
import Learn from '../views/Learn.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/interviewer', name: 'interviewer', component: Interviewer },
  { path: '/work', name: 'work', component: Work },
  { path: '/about', name: 'about', component: About },
  { path: '/learn', name: 'learn', component: Learn },
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