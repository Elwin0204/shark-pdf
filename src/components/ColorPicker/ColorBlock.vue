<template>
  <div :class="{ 'color-block': true, 'color-checked': checked }">
    <div class="color-block-inner" :style="{ background: value }"></div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "ColorBlock",
  inheritAttrs: false,
});

const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: "",
  },
});
</script>
<style lang="scss" scoped>
@import "./styles/color-block.scss";
</style>
