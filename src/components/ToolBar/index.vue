<script setup lang="ts">
defineOptions({
  name: "ToolBar",
  inheritAttrs: false,
});
import { useAppStore } from "@/store";
import { DeviceEnum } from "@/enums/DeviceEnum";
import { ModeEnum } from "@/enums/ModeEnum";

const appStore = useAppStore();

const width = useWindowSize().width;
const WIDTH = 992; // 响应式布局容器固定宽度  大屏（>=1200px） 中屏（>=992px） 小屏（>=768px）

const mode = computed(() => appStore.mode);
const navbarVisible = computed(() => appStore.navbarVisible);

watchEffect(() => {
  if (width.value < WIDTH) {
    appStore.toggleDevice(DeviceEnum.MOBILE);
  } else {
    appStore.toggleDevice(DeviceEnum.DESKTOP);
  }
});

function toggleMode() {
  if (mode.value === ModeEnum.ANNOTATION) {
    appStore.toggleMode(ModeEnum.DEFAULT);
  } else {
    appStore.toggleMode(ModeEnum.ANNOTATION);
  }
}

function toggleNavbarVisible() {
  appStore.toggleNavbarVisible();
}
</script>

<template>
  <div class="toolbar-container">
    <div class="tool-container">
      <button
        :class="{
          'sk-btn': true,
          'is-horizontal': true,
          'is-medium': true,
          'is-active': mode === ModeEnum.ANNOTATION,
        }"
        @click="toggleMode"
      >
        <svg-icon icon-class="material-symbols--ink-pen" />
      </button>
      <button
        :class="{
          'sk-btn': true,
          'is-horizontal': true,
          'is-medium': true,
          'is-active': navbarVisible,
        }"
        @click="toggleNavbarVisible"
      >
        <svg-icon icon-class="tdesign--system-3" />
      </button>
      <i class="line-vertical"></i>
      <button
        :class="{
          'sk-btn': true,
          'is-horizontal': true,
          'is-medium': true,
        }"
      >
        <svg-icon icon-class="fluent--arrow-step-back-16-filled" />
      </button>
      <button
        :class="{
          'sk-btn': true,
          'is-horizontal': true,
          'is-medium': true,
        }"
      >
        <svg-icon icon-class="fluent--arrow-step-over-16-filled" />
      </button>
      <button
        :class="{
          'sk-btn': true,
          'is-horizontal': true,
          'is-medium': true,
        }"
      >
        <svg-icon icon-class="fluent--save-arrow-right-24-filled" />
      </button>
      <button
        :class="{
          'sk-btn': true,
          'is-horizontal': true,
          'is-medium': true,
        }"
      >
        <svg-icon icon-class="gridicons--print" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar-container {
  position: fixed;
  top: 10px;
  left: 50%;
  display: inline-flex;
  transform: translateX(-50%);
  z-index: 100;

  .tool-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 4px;
    box-shadow:
      0 1px 2px -2px rgb(0 0 0 / 16%),
      0 3px 6px 0 rgb(0 0 0 / 12%),
      0 5px 12px 4px rgb(0 0 0 / 9%);

    .line-vertical {
      display: inline-flex;
      width: 1px;
      height: 24px;
      margin: 0 5px;
      background-color: #595959;
    }
  }
}
</style>
