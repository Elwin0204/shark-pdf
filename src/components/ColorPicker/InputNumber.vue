<script setup lang="ts">
defineOptions({
  name: "InputNumber",
  inheritAttrs: false,
});
import { InputNumberEmitter } from "./interface/types";
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: { default: 0, type: Number },
  min: { default: 0, type: Number },
  max: { default: 100, type: Number },
});

const emit = defineEmits<InputNumberEmitter>();

function handleInput(payload: Event) {
  emit("update:modelValue", (payload.target as HTMLInputElement).value);
}

function handleKeydown(payload: KeyboardEvent) {}

function handleFocusOut(payload: Event) {}
</script>
<template>
  <div class="input-number">
    <span class="input-number-label">{{ label }}</span>
    <input
      type="number"
      :min="min"
      :max="max"
      :value="modelValue"
      @input="handleInput"
      @keydown="handleKeydown"
      @focusout="handleFocusOut"
    />
  </div>
</template>
<style lang="scss" scoped>
@import "./styles/input-number";
</style>
