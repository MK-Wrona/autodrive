import { createApp } from 'vue'
import Vue from 'vue'
import App from './App'
import './styles/app.css';
import store from '@/store'
import components from '@/components/UI'
import router from './router';
import VueTheMask from 'vue-the-mask'
import VueCompositionAPI from 'vue'
import { ref, reactive } from 'vue'

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
})

app.use(VueTheMask)
app.use(VueCompositionAPI)




app.use(store);
app.use(router);


app.mount('#app')


