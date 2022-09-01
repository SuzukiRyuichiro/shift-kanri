import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createVuesticEssential, VaButton } from 'vuestic-ui'

createApp(App).use(createVuesticEssential({ components: { VaButton } })).mount('#app')
