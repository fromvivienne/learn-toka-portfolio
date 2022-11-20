import { createApp } from 'vue'
import App from './App.vue'

import router from './route/router.js'

import firebase from './config/firebase.js'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const db = getFirestore(firebase);

const storage = getStorage(firebase);

export default { db, storage };

createApp(App).use(firebase).use(router).mount('#app')
