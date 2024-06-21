<script setup lang="ts">
defineOptions({
  name: "AnnotationSelect",
  inheritAttrs: false,
});

import { AnnotationEnum } from "@/enums/AnnotationEnum";
import { useAppStore } from "@/store";
import useIconMap from "@/hooks/useIconMap";

const appStore = useAppStore();
const iconMap = useIconMap();

function switchAnnotationType(val: string) {
  appStore.switchAnnotationType(val);
  appStore.toggleAnnotationSelectVisible();
}
</script>

<template>
  <div class="annotation-select">
    <button
      :class="{
        'sk-btn': true,
        'is-large': true,
        'is-vertical': true,
      }"
      @click="switchAnnotationType(AnnotationEnum.INK)"
    >
      <div class="btn-content">
        <svg-icon :icon-class="iconMap.get(AnnotationEnum.INK)" />
        <span>笔</span>
      </div>
    </button>
    <button
      :class="{
        'sk-btn': true,
        'is-large': true,
        'is-vertical': true,
      }"
      @click="switchAnnotationType(AnnotationEnum.TEXTMARK)"
    >
      <div class="btn-content">
        <svg-icon :icon-class="iconMap.get(AnnotationEnum.TEXTMARK)" />
        <span>文本标记</span>
      </div>
    </button>
    <button
      :class="{
        'sk-btn': true,
        'is-large': true,
        'is-vertical': true,
      }"
      @click="switchAnnotationType(AnnotationEnum.TEXT)"
    >
      <div class="btn-content">
        <svg-icon :icon-class="iconMap.get(AnnotationEnum.TEXT)" />
        <span>文本</span>
      </div>
    </button>
    <button
      :class="{
        'sk-btn': true,
        'is-large': true,
        'is-vertical': true,
      }"
      @click="switchAnnotationType(AnnotationEnum.SHAPE)"
    >
      <div class="btn-content">
        <svg-icon :icon-class="iconMap.get(AnnotationEnum.SHAPE)" />
        <span>形状</span>
      </div>
    </button>
    <button
      :class="{
        'sk-btn': true,
        'is-large': true,
        'is-vertical': true,
      }"
      @click="switchAnnotationType(AnnotationEnum.NOTE)"
    >
      <div class="btn-content">
        <svg-icon :icon-class="iconMap.get(AnnotationEnum.NOTE)" />
        <span>笔记</span>
      </div>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.annotation-select {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
  background-color: #fff;
  margin-right: 12px;
  border-radius: 16px;
  box-shadow:
    0 3px 6px -4px rgb(0 0 0 / 12%),
    0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);

  .btn-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 32px;

    span {
      margin-top: 12px;
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>
