import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createVuesticEssential, VaDataTable, VaIcon, VaInput } from 'vuestic-ui'

const app = createApp(App)
app.use(createVuesticEssential({ components: { VaDataTable, VaIcon, VaInput } }))
app.mount('#app')