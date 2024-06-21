<script setup lang="ts">
defineOptions({
  name: "AnnotationBar",
  inheritAttrs: false,
});
import { ModeEnum } from "@/enums/ModeEnum";
import { useAppStore } from "@/store";

const appStore = useAppStore();
const annotationSelectVisible = computed(
  () => appStore.annotationSelectVisible
);
const mode = computed(() => appStore.mode);
</script>

<template>
  <transition name="slide-outer">
    <div class="annotationbar-container" v-if="mode === ModeEnum.ANNOTATION">
      <div class="annotation-container">
        <transition name="slide">
          <annotation-select v-if="annotationSelectVisible" />
        </transition>
        <annotation-select2 />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.annotationbar-container {
  position: fixed;
  top: 50%;
  right: 0;
  display: inline-flex;
  transform: translateY(-50%);
  z-index: 100;

  .annotation-container {
    position: relative;
    display: flex;
    align-items: center;
    border-top-left-radius: 36px;
    border-bottom-left-radius: 36px;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(60%);
}

.slide-outer-enter-active,
.slide-outer-leave-active {
  transition: all 0.5s ease;
}

.slide-outer-enter-from,
.slide-outer-leave-to {
  opacity: 0;
  transform: translate(100%, -50%);
}
</style>
