import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { createVuesticEssential, VaDataTable, VaIcon, VaInput } from 'vuestic-ui'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(createVuesticEssential({ components: { VaDataTable, VaIcon, VaInput } }))
app.mount('#app')
