import { createApp } from 'vue'
import App from './App.vue'

import router from './route/router.js'

import firebase from './config/firebase.js'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

const db = getFirestore(firebase.app);

const storage = getStorage(firebase.app);

export default { db, storage };

createApp(App).use(firebase.app).use(router).use(VueAwesomeSwiper, {}).mount('#app')
