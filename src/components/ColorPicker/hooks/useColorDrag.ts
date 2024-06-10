import {
  MouseEventRef,
  EventHandler,
  useColorDragProps,
  TransformOffset,
} from "../interface/types";

import { calcOffset, getPosition } from "../utils/util";

export default function useColorDrag(props: useColorDragProps) {
  const {
    targetRef,
    containerRef,
    direction,
    color,
    onDragChange,
    onDragChangeComplete,
    disabledDrag,
  } = props;

  const offsetValue = reactive<TransformOffset>({
    x: 0,
    y: 0,
  });

  const mouseMoveRef = ref<MouseEventRef>(null);
  const mouseUpRef = ref<MouseEventRef>(null);
  const dragRef = reactive({
    flag: false,
  });

  const setOffsetValue = (value: TransformOffset) => {
    offsetValue.x = value.x;
    offsetValue.y = value.y;
  };

  const updateOffset: EventHandler = (e) => {
    const { pageX, pageY } = getPosition(e);
    const {
      x: rectX,
      y: rectY,
      width,
      height,
    } = containerRef.value.getBoundingClientRect();
    const { width: targetWidth, height: targetHeight } =
      targetRef.value.getBoundingClientRect();

    const centerOffsetX = targetWidth / 2;
    const centerOffsetY = targetHeight / 2;

    const offsetX = Math.max(0, Math.min(pageX - rectX, width)) - centerOffsetX;
    const offsetY =
      Math.max(0, Math.min(pageY - rectY, height)) - centerOffsetY;

    const offset = {
      x: offsetX,
      y: direction === "x" ? offsetValue.y : offsetY,
    };
    // Exclusion of boundary cases
    if (
      (targetWidth === 0 && targetHeight === 0) ||
      targetWidth !== targetHeight
    ) {
      return false;
    }

    setOffsetValue(offset);
    onDragChange?.(offset);
  };

  const onDragMove: EventHandler = (e) => {
    e.preventDefault();
    updateOffset(e);
  };

  const onDragStop: EventHandler = (e) => {
    e.preventDefault();
    dragRef.flag = false;
    document.removeEventListener("mousemove", mouseMoveRef.value!);
    document.removeEventListener("mouseup", mouseUpRef.value!);
    document.removeEventListener("touchmove", mouseMoveRef.value!);
    document.removeEventListener("touchend", mouseUpRef.value!);
    mouseMoveRef.value = null;
    mouseUpRef.value = null;
    onDragChangeComplete?.();
  };

  const onDragStart: EventHandler = (e) => {
    console.log("onDragStart", e);
    document.removeEventListener("mousemove", mouseMoveRef.value!);
    document.removeEventListener("mouseup", mouseUpRef.value!);

    if (disabledDrag) {
      return;
    }
    updateOffset(e);
    dragRef.flag = true;
    document.addEventListener("mousemove", onDragMove);
    document.addEventListener("mouseup", onDragStop);
    document.addEventListener("touchmove", onDragMove);
    document.addEventListener("touchend", onDragStop);
    mouseMoveRef.value = onDragMove;
    mouseUpRef.value = onDragStop;
  };

  onMounted(() => {
    document.removeEventListener("mousemove", mouseMoveRef.value!);
    document.removeEventListener("mouseup", mouseUpRef.value!);
    document.removeEventListener("touchmove", mouseMoveRef.value!);
    document.removeEventListener("touchend", mouseUpRef.value!);
    mouseMoveRef.value = null;
    mouseUpRef.value = null;
  });

  watch(
    () => color.value,
    () => {
      if (dragRef.flag === false) {
        nextTick(() => {
          const offset = calcOffset(containerRef, targetRef, color.value);
          if (offset) {
            setOffsetValue(offset);
          }
        });
      }
    },
    { immediate: true }
  );

  return {
    offsetValue,
    onDragStart,
  };
}
