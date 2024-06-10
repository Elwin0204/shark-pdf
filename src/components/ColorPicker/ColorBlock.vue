<template>
  <div
    :class="{ 'color-block': true, 'color-checked': value === checkedValue }"
    @click="handleColorBlockClick(value)"
  >
    <div class="color-block-inner" :style="{ background: value }"></div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "ColorBlock",
  inheritAttrs: false,
});
import { ColorBlockEmitter } from "./interface/types";
const props = defineProps({
  checkedValue: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
});
const emit = defineEmits<ColorBlockEmitter>();
function handleColorBlockClick(value: string) {
  emit("onChange", value);
}
</script>
<style lang="scss" scoped>
@import "./styles/color-block";
</style>
