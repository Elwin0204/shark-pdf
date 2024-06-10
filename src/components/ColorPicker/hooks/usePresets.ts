import { PresetsItem, PresetsConfig, PresetsData } from "../interface/types";
import { PresetsEnum } from "@/enums/PresetsEnum";

const presetsList: PresetsItem[] = [
  {
    k: PresetsEnum.RED,
    v: {
      label: "Dust Red",
      colors: [
        {
          hex: "#fff1f0",
        },
        {
          hex: "#ffccc7",
        },
        {
          hex: "#ffa39e",
        },
        {
          hex: "#ff7875",
        },
        {
          hex: "#ff4d4f",
        },
        {
          hex: "#f5222d",
        },
        {
          hex: "#cf1322",
        },
        {
          hex: "#a8071a",
        },
        {
          hex: "#820014",
        },
        {
          hex: "#5c0011",
        },
      ],
    },
  },
  {
    k: PresetsEnum.VOLCANO,
    v: {
      label: "Volcano",
      colors: [
        {
          hex: "#fff2e8",
        },
        {
          hex: "#ffd8bf",
        },
        {
          hex: "#ffbb96",
        },
        {
          hex: "#ff9c6e",
        },
        {
          hex: "#ff7a45",
        },
        {
          hex: "#fa541c",
        },
        {
          hex: "#d4380d",
        },
        {
          hex: "#ad2102",
        },
        {
          hex: "#871400",
        },
        {
          hex: "#610b00",
        },
      ],
    },
  },
  {
    k: PresetsEnum.ORANGE,
    v: {
      label: "Sunset Orange",
      colors: [
        {
          hex: "#fff7e6",
        },
        {
          hex: "#ffe7ba",
        },
        {
          hex: "#ffd591",
        },
        {
          hex: "#ffc069",
        },
        {
          hex: "#ffa940",
        },
        {
          hex: "#fa8c16",
        },
        {
          hex: "#d46b08",
        },
        {
          hex: "#ad4e00",
        },
        {
          hex: "#873800",
        },
        {
          hex: "#612500",
        },
      ],
    },
  },
  {
    k: PresetsEnum.GOLD,
    v: {
      label: "Calendula Gold",
      colors: [
        {
          hex: "#fffbe6",
        },
        {
          hex: "#fff1b8",
        },
        {
          hex: "#ffe58f",
        },
        {
          hex: "#ffd666",
        },
        {
          hex: "#ffc53d",
        },
        {
          hex: "#faad14",
        },
        {
          hex: "#d48806",
        },
        {
          hex: "#ad6800",
        },
        {
          hex: "#874d00",
        },
        {
          hex: "#613400",
        },
      ],
    },
  },
  {
    k: PresetsEnum.YELLOW,
    v: {
      label: "Sunrise Yellow",
      colors: [
        {
          hex: "#feffe6",
        },
        {
          hex: "#ffffb8",
        },
        {
          hex: "#fffb8f",
        },
        {
          hex: "#fff566",
        },
        {
          hex: "#ffec3d",
        },
        {
          hex: "#fadb14",
        },
        {
          hex: "#d4b106",
        },
        {
          hex: "#ad8b00",
        },
        {
          hex: "#876800",
        },
        {
          hex: "#614700",
        },
      ],
    },
  },
  {
    k: PresetsEnum.LIME,
    v: {
      label: "Lime",
      colors: [
        {
          hex: "#fcffe6",
        },
        {
          hex: "#f4ffb8",
        },
        {
          hex: "#eaff8f",
        },
        {
          hex: "#d3f261",
        },
        {
          hex: "#bae637",
        },
        {
          hex: "#a0d911",
        },
        {
          hex: "#7cb305",
        },
        {
          hex: "#5b8c00",
        },
        {
          hex: "#3f6600",
        },
        {
          hex: "#254000",
        },
      ],
    },
  },
  {
    k: PresetsEnum.GREEN,
    v: {
      label: "Polar Green",
      colors: [
        {
          hex: "#f6ffed",
        },
        {
          hex: "#d9f7be",
        },
        {
          hex: "#b7eb8f",
        },
        {
          hex: "#95de64",
        },
        {
          hex: "#73d13d",
        },
        {
          hex: "#52c41a",
        },
        {
          hex: "#389e0d",
        },
        {
          hex: "#237804",
        },
        {
          hex: "#135200",
        },
        {
          hex: "#092b00",
        },
      ],
    },
  },
  {
    k: PresetsEnum.CYAN,
    v: {
      label: "Cyan",
      colors: [
        {
          hex: "#e6fffb",
        },
        {
          hex: "#b5f5ec",
        },
        {
          hex: "#87e8de",
        },
        {
          hex: "#5cdbd3",
        },
        {
          hex: "#36cfc9",
        },
        {
          hex: "#13c2c2",
        },
        {
          hex: "#08979c",
        },
        {
          hex: "#006d75",
        },
        {
          hex: "#00474f",
        },
        {
          hex: "#002329",
        },
      ],
    },
  },
  {
    k: PresetsEnum.DAYBREAK_BLUE,
    v: {
      label: "Daybreak Blue",
      colors: [
        {
          hex: "#e6f7ff",
        },
        {
          hex: "#bae7ff",
        },
        {
          hex: "#91d5ff",
        },
        {
          hex: "#69c0ff",
        },
        {
          hex: "#40a9ff",
        },
        {
          hex: "#1890ff",
        },
        {
          hex: "#096dd9",
        },
        {
          hex: "#0050b3",
        },
        {
          hex: "#003a8c",
        },
        {
          hex: "#002766",
        },
      ],
    },
  },
  {
    k: PresetsEnum.GEEK_BLUE,
    v: {
      label: "Geek Blue",
      colors: [
        {
          hex: "#f0f5ff",
        },
        {
          hex: "#d6e4ff",
        },
        {
          hex: "#adc6ff",
        },
        {
          hex: "#85a5ff",
        },
        {
          hex: "#597ef7",
        },
        {
          hex: "#2f54eb",
        },
        {
          hex: "#1d39c4",
        },
        {
          hex: "#10239e",
        },
        {
          hex: "#061178",
        },
        {
          hex: "#030852",
        },
      ],
    },
  },
  {
    k: PresetsEnum.GOLDEN_PURPLE,
    v: {
      label: "Golden Purple",
      colors: [
        {
          hex: "#f9f0ff",
        },
        {
          hex: "#efdbff",
        },
        {
          hex: "#d3adf7",
        },
        {
          hex: "#b37feb",
        },
        {
          hex: "#9254de",
        },
        {
          hex: "#722ed1",
        },
        {
          hex: "#531dab",
        },
        {
          hex: "#391085",
        },
        {
          hex: "#22075e",
        },
        {
          hex: "#120338",
        },
      ],
    },
  },
  {
    k: PresetsEnum.MAGEENTA,
    v: {
      label: "Magenta",
      colors: [
        {
          hex: "#fff0f6",
        },
        {
          hex: "#ffd6e7",
        },
        {
          hex: "#ffadd2",
        },
        {
          hex: "#ff85c0",
        },
        {
          hex: "#f759ab",
        },
        {
          hex: "#eb2f96",
        },
        {
          hex: "#c41d7f",
        },
        {
          hex: "#9e1068",
        },
        {
          hex: "#780650",
        },
        {
          hex: "#520339",
        },
      ],
    },
  },
];

export default function usePresets(config?: PresetsConfig) {
  const presetsMap = computed(() => {
    const map = new Map();
    presetsList.forEach((item) => {
      map.set(item.k, item.v);
    });
    return map;
  });
  const presets: PresetsData[] = [];
  if (!config)
    return {
      presets: [
        presetsMap.value.get(PresetsEnum.RED),
        presetsMap.value.get(PresetsEnum.YELLOW),
        presetsMap.value.get(PresetsEnum.GREEN),
        presetsMap.value.get(PresetsEnum.DAYBREAK_BLUE),
      ],
    };
  for (const k in config) {
    presets.push(presetsMap.value.get(k));
  }
  return {
    presets,
  };
}
