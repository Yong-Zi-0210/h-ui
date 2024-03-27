// 该文件用于定义组件的props类型
import { ExtractPropTypes, PropType } from 'vue'

export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>
