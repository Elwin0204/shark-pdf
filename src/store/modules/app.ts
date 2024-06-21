import defaultSettings from "@/settings";

// 导入 NaiveUI 中英文语言包
import { zhCN, enUS } from "naive-ui";
import { store } from "@/store";
import { DeviceEnum } from "@/enums/DeviceEnum";
import { ModeEnum } from "@/enums/ModeEnum";
import { NavEnum } from "@/enums/NavEnum";
import { AnnotationEnum } from "@/enums/AnnotationEnum";
import { AnnotationOptionEnum } from "@/enums/AnnotationOptionEnum";

// setup
export const useAppStore = defineStore("app", () => {
  // state
  const device = useStorage("device", DeviceEnum.DESKTOP);
  const language = useStorage("language", defaultSettings.language);
  const mode = useStorage("mode", ModeEnum.DEFAULT);
  const navbarVisible = ref(false);
  const annotationSelectVisible = ref(false);
  const annotationSelectVisible2 = ref(false);
  const annotationType = ref<string>(AnnotationEnum.INK);
  const annotationOptionType = ref<string>(AnnotationOptionEnum.INK_1);
  const navMode = useStorage("navMode", NavEnum.BOOKMARK);
  const currentPage = ref(1);
  const pdfPages = ref(0);
  const thumbnailList = ref<Array<ThumbnailItem>>([
    {
      page: 1,
      content: "",
    },
    {
      page: 2,
      content: "",
    },
    {
      page: 3,
      content: "",
    },
  ]);
  const bookmarkList = ref<Array<BookmarkItem>>([
    {
      label: "第一章",
      value: "001",
      children: [
        {
          label: "第一节",
          value: "0011",
          children: [],
        },
        {
          label: "第二节",
          value: "0012",
          children: [],
        },
        {
          label: "第三节",
          value: "0013",
          children: [],
        },
      ],
    },
    {
      label: "第二章",
      value: "002",
      children: [
        {
          label: "第一节",
          value: "0021",
          children: [],
        },
        {
          label: "第二节",
          value: "0022",
          children: [],
        },
        {
          label: "第三节",
          value: "0023",
          children: [],
        },
      ],
    },
  ]);
  const annotationList = ref<Array<PageAnnotation>>([
    {
      page: 1,
      data: [
        {
          type: AnnotationEnum.TEXT,
          timestamp: 1716190684424,
          data: "123",
        },
        {
          type: AnnotationEnum.INK,
          timestamp: 1716190684424,
          data: "456",
        },
      ],
    },
    {
      page: 2,
      data: [
        {
          type: AnnotationEnum.INK,
          timestamp: 1716190684424,
          data: "sfsd",
        },
        {
          type: AnnotationEnum.TEXT,
          timestamp: 1716190684424,
          data: "ffd",
        },
        {
          type: AnnotationEnum.INK,
          timestamp: 1716190684424,
          data: "45gdfg6",
        },
      ],
    },
  ]);

  /**
   * 根据语言标识读取对应的语言包
   */
  const locale = computed(() => {
    if (language?.value == "en") {
      return enUS;
    } else {
      return zhCN;
    }
  });

  function toggleDevice(val: string) {
    device.value = val;
  }

  function toggleMode(val: string) {
    mode.value = val;
  }

  function toggleNavMode(val: string) {
    navMode.value = val;
  }

  function toggleNavbarVisible() {
    navbarVisible.value = !navbarVisible.value;
  }

  function toggleAnnotationSelectVisible() {
    annotationSelectVisible.value = !annotationSelectVisible.value;
  }

  function toggleAnnotationSelectVisible2() {
    annotationSelectVisible2.value = !annotationSelectVisible2.value;
  }

  function switchAnnotationType(val: string) {
    annotationType.value = val;
  }

  function switchAnnotationOptionType(val: string) {
    annotationOptionType.value = val;
  }

  function setCurrentPage(val: number) {
    currentPage.value = val;
  }

  function setPdfPages(val: number) {
    pdfPages.value = val;
  }
  function changeLanguage(val: string) {
    language.value = val;
  }

  return {
    device,
    language,
    locale,
    mode,
    navbarVisible,
    annotationSelectVisible,
    annotationSelectVisible2,
    navMode,
    annotationType,
    annotationOptionType,
    currentPage,
    pdfPages,
    thumbnailList,
    bookmarkList,
    annotationList,
    toggleDevice,
    changeLanguage,
    toggleMode,
    toggleNavMode,
    toggleNavbarVisible,
    switchAnnotationType,
    switchAnnotationOptionType,
    toggleAnnotationSelectVisible,
    toggleAnnotationSelectVisible2,
    setCurrentPage,
    setPdfPages,
  };
});

// 手动提供给 useStore() 函数 pinia 实例
// https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
export function useAppStoreHook() {
  return useAppStore(store);
}
