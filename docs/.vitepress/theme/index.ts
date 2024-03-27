import DefaultTheme from 'vitepress/theme' // vitepress默认主题
import HIcon from '@hyz-ui/components/icon'
import '@hyz-ui/theme-chalk/src/index.scss'

console.log(HIcon)
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(HIcon)
  }
}
