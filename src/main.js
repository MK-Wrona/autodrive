import { createApp } from 'vue'
import App from './App'
import './styles/app.css';
import store from '@/store'
import components from '@/components/UI'
import router from './router';
import VueCompositionAPI from 'vue'

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
})

app.use(VueCompositionAPI)
app.use(store);
app.use(router);
app.mount('#app')


