import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HeaderStandart from './components/Header.vue'
import FooterStandart from './components/Footer.vue'
const app = createApp(App)


app.use(router)
app.component('HeaderStandart', HeaderStandart)
app.component('FooterStandart', FooterStandart)

app.mount('#app')
