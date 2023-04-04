import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HeaderStandart from './components/Header.vue'
import FooterStandart from './components/Footer.vue'

const app = createApp(App, {
    data() {
        return {
            listItemIdCurrent : 0
        }
    }
})
app.config.globalProperties.$datePollCurrent = ''
app.config.globalProperties.$studentCurrentId = 0

app.use(router)
app.component('HeaderStandart', HeaderStandart)
app.component('FooterStandart', FooterStandart)

app.mount('#app')
