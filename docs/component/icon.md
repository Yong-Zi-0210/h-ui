# Icon 图标

hyz-ui 推荐使用 xicons 作为图标库。

```
$ pnpm install @vicons/ionicons5

```

[xicons 官方地址](https://www.xicons.org/#/)

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。
<script setup lang="ts">
import { Accessibility } from '@vicons/ionicons5'
</script>

<h-icon color="red" size="20">
  <Accessibility />
</h-icon>
<h-icon color="orange" size="30">
    <Accessibility />
</h-icon>
<h-icon color="yellow" size="40">
  <Accessibility />
</h-icon>
<h-icon color="green" size="40">
  <Accessibility />
</h-icon>

```vue
<script setup lang="ts">
import { Accessibility } from '@vicons/ionicons5'
</script>
<template>
  <h-icon color="red" size="40"> <Accessibility /> </h-icon>
</template>
```

## API

### Icon Props

| 名称  | 类型             | 默认值    | 说明     |
| ----- | ---------------- | --------- | -------- |
| color | string           | undefined | 图标颜色 |
| size  | number \| string | undefined | 图片大小 |
