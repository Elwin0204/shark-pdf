<script setup lang="ts">
defineOptions({
  name: "PickerHue",
  inheritAttrs: false,
});
import { PickerHueEmitter } from "./interface/types";
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
});
const emit = defineEmits<PickerHueEmitter>();

function handleInput(payload: Event) {
  emit(
    "update:modelValue",
    parseInt((payload.target as HTMLInputElement).value)
  );
  emit("onInput", parseInt((payload.target as HTMLInputElement).value));
}

function handleChange(payload: Event) {
  emit("onChange", parseInt((payload.target as HTMLInputElement).value));
}
</script>
<template>
  <div class="picker-hue-container">
    <input
      class="picker-hue-slider"
      type="range"
      min="0"
      max="360"
      step="0.1"
      :value="modelValue"
      @input="handleInput"
      @change="handleChange"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "./styles/picker-hue.scss";
</style>
