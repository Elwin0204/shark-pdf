import { Color, EventType, TransformOffset } from "../interface/types";
import { rgbToHsl } from "../utils/converter";

export function calcOffset(
  containerRef: Ref<HTMLDivElement>,
  targetRef: Ref<HTMLDivElement>,
  color: Color
) {
  if (color) {
    const { l, s } = rgbToHsl(color.r, color.g, color.b);
    const lightness = l;
    let saturation = s;
    if (Number.isNaN(saturation)) {
      saturation = lightness;
    }
    const offset = { x: 0, y: 0 };
    const rl = containerRef.value.offsetWidth - targetRef.value.offsetWidth;
    const bl = containerRef.value.offsetHeight - targetRef.value.offsetHeight;
    const [x, y] =
      2 * lightness - 1 < 0
        ? [
            (rl * 2 * saturation) / (1 + saturation),
            bl * (1 - lightness * (1 + saturation)),
          ]
        : [
            (-rl * 2 * (lightness - 1) * saturation) /
              (lightness + saturation - lightness * saturation),
            bl * (lightness - 1) * (saturation - 1),
          ];
    offset.x = x;
    offset.y = y;
    return offset;
  } else {
    return null;
  }
}

export function getPosition(e: EventType) {
  const obj = "touches" in e ? e.touches[0] : e;
  const scrollXOffset =
    document.documentElement.scrollLeft ||
    document.body.scrollLeft ||
    window.pageXOffset;
  const scrollYOffset =
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    window.pageYOffset;
  return { pageX: obj.pageX - scrollXOffset, pageY: obj.pageY - scrollYOffset };
}

export function calcSL(props: {
  offset: TransformOffset;
  containerRef: Ref<HTMLDivElement>;
  targetRef: Ref<HTMLDivElement>;
}) {
  const { offset, targetRef, containerRef } = props;
  const obj = { s: 0, l: 0 };
  const rl = containerRef.value.offsetWidth - targetRef.value.offsetWidth;
  const bl = containerRef.value.offsetHeight - targetRef.value.offsetHeight;

  const hsv_value = 1 - offset.y / bl;
  const hsv_saturation = offset.x / rl;

  obj.l = (hsv_value / 2) * (2 - hsv_saturation);
  obj.s = (hsv_value * hsv_saturation) / (1 - Math.abs(2 * obj.l - 1));

  if (Number.isNaN(obj.s)) {
    obj.s = obj.l;
  }

  obj.l = obj.l > 1 ? 1 : obj.l;
  obj.s = obj.s > 1 ? 1 : obj.s;
  return obj;
}

export function cloneDeep(obj: any, map = new WeakMap()): any {
  if (typeof obj !== "object" || !obj) return obj;

  const objFromMap = map.get(obj);
  if (objFromMap) return objFromMap;
  let target: any = {};
  map.set(obj, target);

  if (obj instanceof Map) {
    target = new Map();
    obj.forEach((v, k) => {
      const v1 = cloneDeep(v, map);
      const k1 = cloneDeep(k, map);
      target.set(k1, v1);
    });
  }

  if (obj instanceof Set) {
    target = new Set();
    obj.forEach((v) => {
      const v1 = cloneDeep(v, map);
      target.add(v1);
    });
  }

  if (obj instanceof Array) {
    target = obj.map((v) => cloneDeep(v, map));
  }

  for (const k in obj) {
    const v = obj[k];
    target[k] = cloneDeep(v, map);
  }

  return target;
}
