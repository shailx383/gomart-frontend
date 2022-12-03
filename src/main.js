import Vue from 'vue'



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../index.css'
window.axios = require('axios')
// import Navbar from './components/Navbar.vue'

// Vue.component('Navbar', Navbar)

createApp(App).use(router).mount('#app')
