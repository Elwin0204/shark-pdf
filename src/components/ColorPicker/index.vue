<script setup lang="ts">
defineOptions({
  name: "ColorPicker",
  inheritAttrs: false,
});
import { ColorModeEnum } from "@/enums/ColorModeEnum";
import { Color, RGB } from "./interface/types";
import { rgbToHue, hslToRgb, hexToRgb } from "./utils/converter";
import { cloneDeep } from "./utils/util";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  showAlpha: {
    type: Boolean,
    default: true,
  },
  colorMode: {
    type: String as () => ColorModeEnum,
    default: "RGB",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const colorList = ref<Color[]>([
  { id: 1, r: 68, g: 71, b: 119, a: 100, percent: 0, hue: 0, select: true },
  { id: 2, r: 0, g: 0, b: 255, a: 100, percent: 100, hue: 0, select: false },
]);

const colorMode = ref(props.colorMode);
const hue = ref(0);
const opacity = ref(100);
const opacityBg = ref("");
const showModal = ref(false);
const color = computed(() => {
  return colorList.value.find((color) => color.select);
});

const pickerRef = ref();
const myFavoriteRef = ref();

provide("myFavoriteRef", myFavoriteRef);

function handlePickerDragChange(val: RGB) {
  const { r, g, b } = val;
  for (let i = 0; i < colorList.value.length; i++) {
    if (colorList.value[i].select) {
      colorList.value[i].r = r;
      colorList.value[i].g = g;
      colorList.value[i].b = b;
      colorList.value[i].hue = rgbToHue(r, g, b);
      colorList.value = cloneDeep(colorList.value);
      return;
    }
  }
}

function handlePickerHueInput(val: number) {
  for (let i = 0; i < colorList.value.length; i++) {
    if (colorList.value[i].select) {
      const sl = pickerRef.value.calcSL2();
      const rgb = hslToRgb(val, sl.s, sl.l);
      const { r, g, b } = rgb;
      colorList.value[i].r = r;
      colorList.value[i].g = g;
      colorList.value[i].b = b;
      colorList.value[i].hue = val;
      colorList.value = cloneDeep(colorList.value);
      return;
    }
  }
}

function handlePickerPresetsChange(val: string) {
  for (let i = 0; i < colorList.value.length; i++) {
    if (colorList.value[i].select) {
      const rgb = hexToRgb(val);
      if (rgb) {
        const { r, g, b } = rgb;
        colorList.value[i].r = r;
        colorList.value[i].g = g;
        colorList.value[i].b = b;
        colorList.value[i].hue = rgbToHue(rgb.r, rgb.g, rgb.b);
        hue.value = colorList.value[i].hue;
        colorList.value = cloneDeep(colorList.value);
      }
      return;
    }
  }
}

function updateColorMode(val: ColorModeEnum) {
  colorMode.value = val;
}

function handleClick() {
  showModal.value = true;
}

function handleMouseDown(payload: MouseEvent) {
  console.log("emit", payload);
}

function initColorList() {
  colorList.value.forEach((color) => {
    color.hue = rgbToHue(color.r, color.g, color.b);
  });
}

function initPickerHue() {
  initColorList();
  hue.value = colorList.value[0].hue;
}

function setOpacityBar() {
  if (props.showAlpha) {
    const color = colorList.value.find((color) => color.select);
    if (color) {
      opacityBg.value = `linear-gradient(90deg,rgba(255, 255, 255, 0) 0%, rgba(${color.r}, ${color.g}, ${color.b}, 100) 97%)`;
    }
  }
}

function initColorPicker() {
  initPickerHue();
  setOpacityBar();
}

onMounted(() => {
  initColorPicker();
});
</script>

<template>
  <button
    :class="{
      'sk-btn': true,
      'is-large': true,
      'is-vertical': true,
    }"
    @click="handleClick"
  >
    <div class="circle"></div>
  </button>
  <n-modal v-model:show="showModal">
    <div
      :class="{
        'color-picker': true,
        'is-disabled': disabled,
      }"
      ref="colorPickerRef"
    >
      <div class="pannel-left">
        <PickerPresets @on-change="handlePickerPresetsChange" />
        <MyFavorite ref="myFavoriteRef" />
      </div>
      <div class="color-picker-divider"></div>
      <div class="pannel-right">
        <Picker
          ref="pickerRef"
          @on-mouse-down="handleMouseDown"
          @on-drag-change="handlePickerDragChange"
          :hue="hue"
          :color="color"
        />
        <PickerMenu
          @update:color-mode="updateColorMode"
          :colorMode="colorMode"
          :color="color"
          :opacity="opacity"
        />
        <PickerHue v-model="hue" @on-input="handlePickerHueInput" />
        <OpacityBar v-if="showAlpha" v-model="opacity" :opacityBg="opacityBg" />
        <PickerInputs
          :colorMode="colorMode"
          :color="color"
          :opacity="opacity"
        />
      </div>
    </div>
  </n-modal>
</template>
<style lang="scss" scoped>
@import "./styles/color-picker";
</style>
