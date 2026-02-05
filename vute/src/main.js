import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { i18n, i18nPlugin } from './i18n'


const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

app.use(i18nPlugin)

import { useLanguageStore } from './i18n/store'
const languageStore = useLanguageStore()
languageStore.initialize()

app.mount('#app')
