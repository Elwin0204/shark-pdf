import { AnnotationEnum } from "@/enums/AnnotationEnum";

const iconList = [
  {
    k: AnnotationEnum.INK,
    v: "ph--pencil-circle-light",
  },
  {
    k: AnnotationEnum.TEXT,
    v: "solar--text-circle-bold",
  },
  {
    k: AnnotationEnum.TEXTMARK,
    v: "ph--text-aa-duotone",
  },
  {
    k: AnnotationEnum.SHAPE,
    v: "ri--shapes-line",
  },
  {
    k: AnnotationEnum.NOTE,
    v: "majesticons--noteblock-text-line",
  },
];

export default function useIconMap() {
  const iconMap = computed(() => {
    const map = new Map();
    iconList.forEach((item) => {
      map.set(item.k, item.v);
    });
    return map;
  });
  return iconMap;
}
