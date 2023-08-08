import { createApp } from 'vue'
import { createPinia } from 'pinia'
import type * as Cesium from 'cesium'

import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'virtual:windi.css'
import './assets/main.css'

declare global {
  interface Window {
    viewer: Cesium.Viewer
    selectionIndicator: Cesium.SelectionIndicator
  }
}

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.mount('#app')
