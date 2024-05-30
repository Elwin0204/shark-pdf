<template>
  <div class="picker-presets">
    <div class="preset-item" v-for="(item, index) in presets" :key="index">
      <div class="preset-label">{{ item.label }}</div>
      <div class="preset-content">
        <ColorBlock
          v-for="(color, index2) in item.colors"
          :key="index2"
          :value="color.hex"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "GradientBar",
  inheritAttrs: false,
});
import usePresets from "./hooks/usePresets";

const { presets } = usePresets();
console.log("presets", presets);
</script>
<style lang="scss" scoped>
@import "./styles/picker-presets.scss";
</style>
