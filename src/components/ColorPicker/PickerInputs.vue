<script setup lang="ts">
defineOptions({
  name: "PickerInputs",
  inheritAttrs: false,
});
import { ColorModeEnum } from "@/enums/ColorModeEnum";
import { Color } from "./interface/types";
import { rgbToHsl, rgbToHsv, rgbToCmyk, rgb2Hex } from "./utils/converter";
const props = defineProps({
  colorMode: {
    type: String as () => ColorModeEnum,
    default: "RGB",
  },
  color: {
    type: Object as () => Color,
    default: () => {},
  },
  showAlpha: {
    type: Boolean,
    default: true,
  },
  opacity: {
    type: Number,
    default: 100,
  },
});

const RGB = reactive({
  r: 0,
  g: 0,
  b: 0,
});
const HSL = reactive({
  h: 0,
  s: 0,
  l: 0,
});
const HSV = reactive({
  h: 0,
  s: 0,
  v: 0,
});

const CMYK = reactive({
  c: 0,
  m: 0,
  y: 0,
  k: 0,
});

const hex = ref("");
const alpha = ref(100);

function updateInputs(color: Color) {
  hex.value = rgb2Hex(color.r, color.g, color.b).toUpperCase();
  switch (props.colorMode) {
    case "RGB":
      const { r, g, b } = color;
      RGB.r = r;
      RGB.g = g;
      RGB.b = b;
      break;
    case "HSL": {
      const { h, s, l } = rgbToHsl(color.r, color.g, color.b);
      HSL.h = Math.round(h);
      HSL.s = Math.round(s * 100);
      HSL.l = Math.round(l * 100);
      break;
    }
    case "HSV": {
      const { h, s, v } = rgbToHsv(color.r, color.g, color.b);
      HSV.h = Math.round(h);
      HSV.s = Math.round(s * 100);
      HSV.v = Math.round(v * 100);
      break;
    }
    case "CMYK":
      {
        const { c, m, y, k } = rgbToCmyk(color.r, color.g, color.b);
        CMYK.c = Math.round(c * 100);
        CMYK.m = Math.round(m * 100);
        CMYK.y = Math.round(y * 100);
        CMYK.k = Math.round(k * 100);
      }
      break;
  }
}

watch(
  [() => props.color, () => props.colorMode],
  () => {
    updateInputs(props.color);
  },
  { immediate: true }
);
watch(
  () => props.opacity,
  () => {
    alpha.value = props.opacity;
  },
  { immediate: true }
);
</script>
<template>
  <div class="picker-inputs">
    <InputHex v-if="colorMode !== ColorModeEnum.CMYK" v-model="hex" />
    <!-- RGB -->
    <InputNumber
      v-if="colorMode === ColorModeEnum.RGB"
      label="R"
      :min="0"
      :max="255"
      v-model="RGB.r"
    />
    <InputNumber
      v-if="colorMode === ColorModeEnum.RGB"
      label="G"
      :min="0"
      :max="255"
      v-model="RGB.g"
    />
    <InputNumber
      v-if="colorMode === ColorModeEnum.RGB"
      label="B"
      :min="0"
      :max="255"
      v-model="RGB.b"
    />

    <!-- HSL -->
    <InputNumber
      v-if="colorMode === ColorModeEnum.HSL"
      label="H"
      :min="0"
      :max="360"
      v-model="HSL.h"
    />
    <InputNumber
      v-if="colorMode === ColorModeEnum.HSL"
      label="S"
      :min="0"
      :max="100"
      v-model="HSL.s"
    />
    <InputNumber
      v-if="colorMode === ColorModeEnum.HSL"
      label="L"
      :min="0"
      :max="100"
      v-model="HSL.l"
    />
    <!-- HSV -->
    <InputNumber
      v-if="colorMode === ColorModeEnum.HSV"
      label="H"
      :min="0"
      :max="360"
      v-model="HSV.h"
    />
    <InputNumber
      v-if="colorMode === ColorModeEnum.HSV"
      label="S"
      :min="0"
      :max="100"
      v-model="HSV.s"
    />
    <InputNumber
      v-if="colorMode === ColorModeEnum.HSV"
      label="V"
      :min="0"
      :max="100"
      v-model="HSV.v"
    />
    <!-- CMYK -->
    <InputNumber
      v-if="colorMode === ColorModeEnum.CMYK"
      label="C"
      :min="0"
      :max="100"
      v-model="CMYK.c"
    />
    <InputNumber
      v-if="colorMode === ColorModeEnum.CMYK"
      label="M"
      :min="0"
      :max="100"
      v-model="CMYK.m"
    />
    <InputNumber
      v-if="colorMode === ColorModeEnum.CMYK"
      label="Y"
      :min="0"
      :max="100"
      v-model="CMYK.y"
    />
    <InputNumber
      v-if="colorMode === ColorModeEnum.CMYK"
      label="K"
      :min="0"
      :max="100"
      v-model="CMYK.k"
    />
    <InputNumber
      v-if="showAlpha"
      label="A"
      :min="0"
      :max="100"
      style="margin-right: 2px"
      v-model="alpha"
    />
  </div>
</template>
<style lang="scss" scoped>
@import "./styles/picker-inputs";
</style>
