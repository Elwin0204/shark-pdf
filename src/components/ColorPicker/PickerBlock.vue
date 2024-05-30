<script setup lang="ts">
defineOptions({
  name: "PickerBlock",
  inheritAttrs: false,
});
import { Color } from "./interface/types";
const props = defineProps({
  color: {
    type: Object as () => Color,
    default: () => {},
  },
  alpha: {
    type: Number,
    default: 100,
  },
});

const blockBg = computed(() => {
  return `rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${props.alpha / 100})`;
});

function copyColor() {}
</script>
<template>
  <div class="picker-block">
    <div
      class="picker-block-inner"
      :style="{ background: blockBg }"
      @click="copyColor"
    >
      <svg-icon icon-class="iconoir--color-filter" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./styles/picker-block";
</style>
