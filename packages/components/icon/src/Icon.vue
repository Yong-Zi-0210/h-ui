<template>
  <i :class="ns.b()" :style="style"> 
    <slot></slot>
  </i>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { iconProps } from "./icon";
import {useNamespace} from '@hyz-ui/hooks';

defineOptions({
  name: 'HIcon'
})
const ns = useNamespace('icon')
const prop = defineProps(iconProps);
const style = computed(() => {
  if (!prop.color && !prop.size) {
    return {};
  }
  return {
    ...(prop.size ? { "font-size": prop.size + "px" } : {}),
    ...(prop.color ? { "color": prop.color } : {}),
  };
});
</script>
