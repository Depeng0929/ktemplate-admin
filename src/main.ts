import { createApp } from 'vue'

import App from './App.vue'
import setupMain from './setupMain'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/index.scss'

const app = createApp(App)

setupMain({ app })

app.mount('#app')
