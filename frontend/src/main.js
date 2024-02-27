import { createApp } from 'vue'
import App from './App.vue'
import { pluginsSetUp } from '@/plugins'

const app = createApp(App)
await pluginsSetUp(app)
app.mount('#app')