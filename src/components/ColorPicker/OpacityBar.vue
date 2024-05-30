<script setup lang="ts">
defineOptions({
  name: "OpacityBar",
  inheritAttrs: false,
});
import { OpacityBarEmitter } from "./interface/types";

defineProps({
  modelValue: {
    tpye: Number,
    default: 0,
  },
  opacityBg: {
    type: String,
    default: "",
  },
});
const emit = defineEmits<OpacityBarEmitter>();

function handleInput(payload: Event) {
  emit(
    "update:modelValue",
    parseInt((payload.target as HTMLInputElement).value)
  );
  emit("onInput", parseInt((payload.target as HTMLInputElement).value));
}
</script>
<template>
  <div class="opacity-bar">
    <div class="opacity-slider-container opacity-slider-bg">
      <input
        class="opacity-slider"
        :style="{ background: opacityBg }"
        type="range"
        min="0"
        max="100"
        :value="modelValue"
        @input="handleInput"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./styles/opacity-bar";
</style>
