// main.ts
import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../src/assets/css/reset.css'
// import 'lib-flexible/flexible'
import '../src/assets/js/flexible'
import { store, key } from './store'
import router from "./router";
import App from './App.vue'

const app = createApp(App)

app.use(store, key)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
