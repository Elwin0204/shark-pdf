<script setup lang="ts">
defineOptions({
  name: "SkButton",
  inheritAttrs: false,
});
import { useAppStore } from "@/store";

const appStore = useAppStore();

const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
});

const annotationOptionType = computed(() => appStore.annotationOptionType);
function handleClick(val: string) {
  appStore.switchAnnotationOptionType(val);
}
</script>

<template>
  <button
    :class="{
      'sk-btn': true,
      'is-large': true,
      'is-vertical': true,
      'is-active': annotationOptionType === id,
    }"
    @click="handleClick(id)"
  >
    <div class="btn-content">
      <svg-icon :icon-class="icon" />
    </div>
  </button>
</template>
