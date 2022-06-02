import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import setupMain from './setupMain'
import router from '~/permission'

import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'

import '@unocss/reset/tailwind.css'
import 'uno.css'

import './styles/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

setupMain({ app })

app.mount('#app')
