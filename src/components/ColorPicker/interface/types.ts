import { ColorModeEnum } from "@/enums/ColorModeEnum";

// Picker types
export interface PickerEmitter {
  (e: "onMouseDown", value: MouseEvent): void;
  (e: "onDragChange", value: RGB): void;
}

// PickerHue types
export interface PickerHueEmitter {
  (e: "update:modelValue", value: number): void;
  (e: "onInput", value: number): void;
  (e: "onChange", value: number): void;
}

// OpacityBar types
export interface OpacityBarEmitter {
  (e: "update:modelValue", value: number): void;
  (e: "onInput", value: number): void;
}

// Picker types
export type MouseEventRef = ((event: EventType) => void) | null;

export type EventType = MouseEvent | TouchEvent;

export type EventHandler = (e: EventType) => void;

export type TransformOffset = {
  x: number;
  y: number;
};

export interface useColorDragProps {
  offset?: TransformOffset;
  containerRef: Ref<HTMLDivElement>;
  targetRef: Ref<HTMLDivElement>;
  color: Color;
  direction?: "x" | "y";
  onDragChange?: (offset: TransformOffset) => void;
  onDragChangeComplete?: () => void;
  /** Disabled drag */
  disabledDrag?: boolean;
}

// InputNumber types
export interface InputNumberEmitter {
  (e: "update:modelValue", value: string): void;
}

// InputHex types
export interface InputHexEmitter {
  (e: "update:modelValue", value: string): void;
}

// PickerMenu types
export interface PickerMenuEmitter {
  (e: "update:colorMode", value: ColorModeEnum): void;
}

export type ColorType = "HEX8" | "HEX" | "RGB" | "RGBA";
export type Mode = "gradient" | "solid";
export type Theme = "light" | "dark";
export type InputType = "RGB" | "HSL" | "HSV" | "CMYK";

export interface Color {
  id: number | string;
  r: number;
  g: number;
  b: number;
  a: number;
  percent: number;
  hue: number;
  select: boolean;
}

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface CMYK {
  c: number;
  m: number;
  y: number;
  k: number;
}
