<script setup lang="ts">
defineOptions({
  name: "Picker",
  inheritAttrs: false,
});
import { Color, PickerEmitter } from "./interface/types";
import useColorDrag from "./hooks/useColorDrag";
import { hsl2Hex, hslToRgb } from "./utils/converter";
import { calcSL } from "./utils/util";

const props = defineProps({
  hue: {
    type: Number,
    default: 0,
  },
  color: {
    type: Object as () => Color,
    default: () => {},
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<PickerEmitter>();

const pickerRef = ref();
const transformRef = ref();
const canvasRef = ref();

const renderCanvas = (rgb: number[]) => {
  const context = canvasRef.value.getContext("2d", {
    willReadFrequently: true,
  })!;
  const endX = canvasRef.value.width;
  const endY = canvasRef.value.height;

  context.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  context.fillRect(0, 0, endX, endY);

  const grdWhite = context.createLinearGradient(0, 0, endX - 12, 0);
  grdWhite.addColorStop(0, "rgb(255,255,255)");
  grdWhite.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = grdWhite;
  context.fillRect(0, 0, endX, endY);

  const grdBlack = context.createLinearGradient(0, 0, 0, endY);
  grdBlack.addColorStop(0, "rgba(0,0,0,0)");
  grdBlack.addColorStop(1, "rgb(0,0,0)");
  context.fillStyle = grdBlack;
  context.fillRect(0, 0, endX, endY);
};

const { offsetValue, onDragStart } = useColorDrag({
  containerRef: pickerRef,
  targetRef: transformRef,
  color: toRefs(props).color,
  disabledDrag: props.disabled,
  onDragChange: (offsetValue) => {
    const sl = calcSL({
      containerRef: pickerRef,
      targetRef: transformRef,
      offset: offsetValue,
    });
    const rgb = hslToRgb(props.hue, sl.s, sl.l);
    emit("onDragChange", rgb);
  },
});

function calcSL2() {
  return calcSL({
    containerRef: pickerRef,
    targetRef: transformRef,
    offset: offsetValue,
  });
}

watch(
  [() => props.hue],
  () => {
    nextTick(() => {
      const { rgb } = hsl2Hex(props.hue, 100, 50);
      renderCanvas(rgb);
    });
  },
  { immediate: true }
);

defineExpose({
  calcSL2,
});
</script>
<template>
  <div
    class="picker-container"
    ref="pickerRef"
    @mousedown="onDragStart"
    @touchstart="onDragStart"
  >
    <canvas ref="canvasRef" class="picker-palette"></canvas>
    <div class="picker-palette-mask"></div>
    <div
      class="picker-handler"
      :style="{ left: offsetValue.x + 'px', top: offsetValue.y + 'px' }"
      ref="transformRef"
    ></div>
  </div>
</template>
<style lang="scss" scoped>
@import "./styles/picker";
</style>
