import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createVuesticEssential } from 'vuestic-ui'

createApp(App).use(createVuesticEssential({ components: { } })).mount('#app')
