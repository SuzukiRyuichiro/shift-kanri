import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { createVuesticEssential, VaDataTable, VaIcon, VaInput, VaDatePicker, VaModal, VaButton } from 'vuestic-ui'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(createVuesticEssential({ components: { VaDataTable, VaIcon, VaInput, VaDatePicker, VaModal, VaButton } }))
app.mount('#app')
