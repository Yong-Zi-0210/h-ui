// 组册组件
import { Plugin } from 'vue'

type SFCWithInstall<T> = T & Plugin

export function withInstall<T extends Record<string, any>>(comp: T) {
  ;(comp as SFCWithInstall<T>).install = (app: any): void => {
    app.component(comp.name, comp)
  }
  return comp as SFCWithInstall<T>
}
