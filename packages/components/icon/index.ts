import icon from './src/Icon.vue'
import { withInstall } from '@hyz-ui/utils/with-install'

const Icon = withInstall(icon)
export * from './src/icon'
export default Icon

// 利用接口声明HIcon类型，GlobalComponents接口vue已经定义，但是接口可以合并，
// 会把HIcon加入到GlobalComponents类型中，可以被模版解析
// 如果不做此组件类型声明，在使用的template模版中无法识别HIcon类型即unkown
declare module 'vue' {
  export interface GlobalComponents {
    HIcon: typeof Icon
  }
}
