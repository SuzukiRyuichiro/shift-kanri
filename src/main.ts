import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import {
  createVuesticEssential,
  VaDataTable,
  VaIcon,
  VaInput,
  VaDatePicker,
  VaModal,
  VaButton,
} from 'vuestic-ui'
import { firebaseApp } from './firebase/firebaseinit'
import { VueFire, VueFireAuth, VueFireFirestoreOptionsAPI } from 'vuefire'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.use(VueFire, {
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
    VueFireFirestoreOptionsAPI(),
  ],
})

app.use(
  createVuesticEssential({
    components: {
      VaDataTable,
      VaIcon,
      VaInput,
      VaDatePicker,
      VaModal,
      VaButton,
    },
  })
)
app.mount('#app')
