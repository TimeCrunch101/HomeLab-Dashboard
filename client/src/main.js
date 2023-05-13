import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/js/all.js"
// Quill CSS
import "quill/dist/quill.core.css"
import "quill/dist/quill.bubble.css"
import "quill/dist/quill.snow.css"
// Quill JS
import "quill/dist/quill.core.js"
import "quill/dist/quill.js"
import "quill/dist/quill.min.js"

import axios from 'axios'


axios.defaults.withCredentials = true
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://localhost:8080/'
} else {
    axios.defaults.baseURL = 'http://192.168.60.32:8080'
}
axios.defaults.withCredentials
// axios.interceptors.response.use(undefined, function (error) {
//     if (error) {
//       const originalRequest = error.config;
//       if (error.response.status === 401 && !originalRequest._retry) {
    
//           originalRequest._retry = true;
//           store.dispatch('LogOut')
//           return router.push('/login')
//       }
//     }
//   })



import "./assets/scss/main.scss"
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
