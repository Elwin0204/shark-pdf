import { AnnotationEnum } from "@/enums/AnnotationEnum";
import { AnnotationOptionEnum } from "@/enums/AnnotationOptionEnum";
import SkButton from "@/components/SkButton/index.vue";
import ColorPicker from "@/components/ColorPicker/index.vue";

const selectList = [
  {
    k: AnnotationEnum.INK,
    v: [
      {
        component: SkButton,
        props: {
          icon: "ph--pencil-circle-light",
          id: AnnotationOptionEnum.INK_1,
        },
      },
      {
        component: SkButton,
        props: {
          icon: "ph--pencil-circle-light",
          id: AnnotationOptionEnum.INK_2,
        },
      },
      {
        component: SkButton,
        props: {
          icon: "ph--pencil-circle-light",
          id: AnnotationOptionEnum.INK_3,
        },
      },
      {
        component: SkButton,
        props: {
          icon: "ph--pencil-circle-light",
          id: AnnotationOptionEnum.INK_4,
        },
      },
    ],
  },
  {
    k: AnnotationEnum.TEXT,
    v: [
      {
        component: SkButton,
        props: {
          icon: "solar--text-circle-bold",
          id: AnnotationOptionEnum.TEXT_1,
        },
      },
      {
        component: SkButton,
        props: {
          icon: "solar--text-circle-bold",
          id: AnnotationOptionEnum.TEXT_2,
        },
      },
      {
        component: SkButton,
        props: {
          icon: "solar--text-circle-bold",
          id: AnnotationOptionEnum.TEXT_3,
        },
      },
    ],
  },
  {
    k: AnnotationEnum.TEXTMARK,
    v: [
      {
        component: SkButton,
        props: {
          icon: "material-symbols--highlight-text-cursor",
          id: AnnotationOptionEnum.TEXTMARK_1,
        },
      },
      {
        component: SkButton,
        props: {
          icon: "mingcute--strikethrough-line",
          id: AnnotationOptionEnum.TEXTMARK_2,
        },
      },
      {
        component: SkButton,
        props: {
          icon: "ic--baseline-format-underlined",
          id: AnnotationOptionEnum.TEXTMARK_3,
        },
      },
      {
        component: SkButton,
        props: {
          icon: "material-symbols--format-underlined-squiggle",
          id: AnnotationOptionEnum.TEXTMARK_4,
        },
      },
      {
        component: ColorPicker,
        props: {},
      },
    ],
  },
  {
    k: AnnotationEnum.SHAPE,
    v: [
      {
        component: SkButton,
        props: {
          icon: "tabler--square",
          id: AnnotationOptionEnum.SHAPE_1,
        },
      },
      {
        component: SkButton,
        props: {
          icon: "solar--text-circle-bold",
          id: AnnotationOptionEnum.SHAPE_2,
        },
      },
      {
        component: SkButton,
        props: {
          icon: "fluent-mdl2--line",
          id: AnnotationOptionEnum.SHAPE_3,
        },
      },
      {
        component: SkButton,
        props: {
          icon: "teenyicons--arrow-solid",
          id: AnnotationOptionEnum.SHAPE_4,
        },
      },
    ],
  },
  {
    k: AnnotationEnum.NOTE,
    v: [
      {
        component: SkButton,
        props: {
          icon: "majesticons--noteblock-text-line",
          id: AnnotationOptionEnum.NOTE_1,
        },
      },
      {
        component: SkButton,
        props: {
          icon: "majesticons--noteblock-text-line",
          id: AnnotationOptionEnum.NOTE_2,
        },
      },
      {
        component: SkButton,
        props: {
          icon: "majesticons--noteblock-text-line",
          id: AnnotationOptionEnum.NOTE_3,
        },
      },
      {
        component: SkButton,
        props: {
          icon: "majesticons--noteblock-text-line",
          id: AnnotationOptionEnum.NOTE_4,
        },
      },
    ],
  },
];

export default function useIconMap() {
  const selectMap = computed(() => {
    const map = new Map();
    selectList.forEach((item) => {
      map.set(item.k, item.v);
    });
    return map;
  });
  return selectMap;
}
