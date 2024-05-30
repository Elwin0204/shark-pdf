type EventType = MouseEvent | TouchEvent;

type EventHandle = (e: EventType) => void;

export default function useColorDrag() {
  const offset = reactive({
    x: 0,
    y: 0,
  });
  const mouseMoveRef = ref<((event: MouseEvent) => void) | null>(null);

  const onDragStart: EventHandle = (e) => {
    // https://github.com/ant-design/ant-design/issues/43529
    document.removeEventListener("mousemove", mouseMoveRef.value as any);
  };
  return {
    offset,
    onDragStart,
  };
}
