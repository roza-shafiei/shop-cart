//Styles
import './assets/main.css'
import '@/assets/scss/vuetify/_index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import vuetify from '/src/plugins/vuetify.js'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(vuetify)
app.mount('#app')
