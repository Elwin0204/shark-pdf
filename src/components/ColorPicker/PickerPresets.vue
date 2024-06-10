<template>
  <div class="picker-presets">
    <div class="preset-item" v-for="(item, index) in presets" :key="index">
      <div class="preset-label">{{ item.label }}</div>
      <div class="preset-content">
        <ColorBlock
          v-for="(preset, index2) in item.colors"
          :key="index2"
          :value="preset.hex"
          :checkedValue="checkedValue"
          @on-change="handleChange"
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
import { PickerPresetsEmitter } from "./interface/types";

const emit = defineEmits<PickerPresetsEmitter>();
const { presets } = usePresets();
const checkedValue = ref("");

function handleChange(value: string) {
  checkedValue.value = value;
  emit("onChange", value);
}
</script>
<style lang="scss" scoped>
@import "./styles/picker-presets";
</style>
