import { createApp } from 'vue'
import '@/assets/style.css'
import router from '@/router'
import App from './App.vue'

console.log('Main.js is running')

createApp(App).use(router).mount('#app')
