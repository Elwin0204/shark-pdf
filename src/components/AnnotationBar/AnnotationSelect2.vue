<script setup lang="ts">
defineOptions({
  name: "AnnotationSelect2",
  inheritAttrs: false,
});
import { useAppStore } from "@/store";
import useIconMap from "@/hooks/useIconMap";
import useSelectMap from "@/hooks/useSelectMap";

const appStore = useAppStore();
const iconMap = useIconMap();
const selectMap = useSelectMap();
const annotationType = computed(() => appStore.annotationType);
const componentList = computed(() => {
  return selectMap.value.get(annotationType.value);
});

function toggleAnnotationSelect() {
  appStore.toggleAnnotationSelectVisible();
}
</script>

<template>
  <div class="annotation-select2">
    <button
      :class="{
        'sk-btn': true,
        'is-large': true,
        'is-vertical': true,
      }"
      style="margin-bottom: -12px"
      @click="toggleAnnotationSelect"
    >
      <div class="btn-content">
        <svg-icon :icon-class="iconMap.get(annotationType)" />
        <svg-icon
          icon-class="lets-icons--expand-left"
          style="transform: rotate(-90deg)"
        />
      </div>
    </button>
    <component
      v-for="(item, index) in componentList"
      :is="item.component"
      v-bind="item.props"
      :key="index"
    />
    <div class="line-horizontal"></div>
    <button
      :class="{
        'sk-btn': true,
        'is-large': true,
        'is-vertical': true,
      }"
    >
      <div class="btn-content">
        <svg-icon icon-class="icon-park-outline--selected" />
      </div>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.annotation-select2 {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px 4px;
  border-top-left-radius: 36px;
  border-bottom-left-radius: 36px;
  box-shadow:
    -1px 0 2px -2px rgb(0 0 0 / 16%),
    -3px 0 6px 0 rgb(0 0 0 / 12%),
    -5px 0 12px 4px rgb(0 0 0 / 9%);

  .btn-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 32px;
  }

  .line-horizontal {
    width: 32px;
    height: 1px;
    margin: 0 auto;
    background-color: #595959;
  }
}
</style>
