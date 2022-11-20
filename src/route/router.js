import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'
import Signin from '../views/Signin.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/gallery', name: 'gallery', component: Gallery },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/signin', name: 'signin', component: Signin },
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