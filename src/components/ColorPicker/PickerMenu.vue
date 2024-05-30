<script setup lang="ts">
defineOptions({
  name: "PickerMenu",
  inheritAttrs: false,
});
import { ColorModeEnum } from "@/enums/ColorModeEnum";
import { PickerMenuEmitter, Color } from "./interface/types";

const props = defineProps({
  colorMode: {
    type: String as () => ColorModeEnum,
    default: "RGB",
  },
  color: {
    type: Object as () => Color,
    default: () => {},
  },
  opacity: {
    type: Number,
    default: 100,
  },
});

const emit = defineEmits<PickerMenuEmitter>();
const myFavoriteRef = inject<Ref>("myFavoriteRef");

function toggleColorMode(val: ColorModeEnum) {
  emit("update:colorMode", val);
}

function addFavorite() {
  myFavoriteRef?.value.addFavorite(props.color);
}
</script>
<template>
  <div class="picker-menu">
    <div class="picker-menu-left">
      <button
        :class="{
          'sk-btn': true,
          'is-cp-text': true,
          'is-active': colorMode === ColorModeEnum.RGB,
        }"
        @click="toggleColorMode(ColorModeEnum.RGB)"
      >
        RGB
      </button>
      <button
        :class="{
          'sk-btn': true,
          'is-cp-text': true,
          'is-active': colorMode === ColorModeEnum.HSL,
        }"
        @click="toggleColorMode(ColorModeEnum.HSL)"
      >
        HSL
      </button>
      <button
        :class="{
          'sk-btn': true,
          'is-cp-text': true,
          'is-active': colorMode === ColorModeEnum.HSV,
        }"
        @click="toggleColorMode(ColorModeEnum.HSV)"
      >
        HSV
      </button>
      <button
        :class="{
          'sk-btn': true,
          'is-cp-text': true,
          'is-active': colorMode === ColorModeEnum.CMYK,
        }"
        @click="toggleColorMode(ColorModeEnum.CMYK)"
      >
        CMYK
      </button>
    </div>
    <div class="picker-menu-right">
      <button
        :class="{
          'sk-btn': true,
          'is-cp-icon': true,
        }"
        @click="addFavorite"
      >
        <svg-icon icon-class="material-symbols--box-add-outline" />
      </button>
      <PickerBlock :color="color" :alpha="opacity" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./styles/picker-menu";
</style>
