<script setup lang="ts">
defineOptions({
  name: "InputHex",
  inheritAttrs: false,
});
import { InputHexEmitter } from "./interface/types";
const props = defineProps({
  modelValue: { default: "", type: String },
});

const emit = defineEmits<InputHexEmitter>();

function handleInput(payload: Event) {
  emit("update:modelValue", (payload.target as HTMLInputElement).value);
}

function handleKeydown(payload: KeyboardEvent) {}

function handleFocusOut(payload: Event) {}
</script>
<template>
  <div class="input-hex">
    <span class="input-hex-label">HEX</span>
    <input
      type="text"
      :value="modelValue"
      @input="handleInput"
      @keydown="handleKeydown"
      @focusout="handleFocusOut"
    />
  </div>
</template>
<style lang="scss" scoped>
@import "./styles/input-hex";
</style>
