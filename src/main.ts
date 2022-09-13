import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createVuesticEssential, VaDataTable, VaIcon, VaInput } from 'vuestic-ui'

const app = createApp(App).use(createVuesticEssential({ components: { VaDataTable, VaIcon, VaInput } })).mount('#app')
