import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@hyz-ui/components/icon'
import '@hyz-ui/theme-chalk/src/index.scss'
console.log(Icon)
const plugins = [Icon]

const app = createApp(App)

// 注册成全局组件
plugins.forEach(plugin => app.use(plugin))

app.mount('#app')
