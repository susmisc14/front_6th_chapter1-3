import { hasOwn, isObject } from "../utils/objectUtils";

export function deepEquals<T>(a: T, b: T, depth: number = Infinity) {
  if (depth === 0) {
    return a === b;
  }

  if (isObject(a) && isObject(b)) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) {
      return false;
    }

    return aKeys.every((key): boolean => {
      if (hasOwn(a, key) && hasOwn(b, key)) {
        return deepEquals(a[key], b[key], depth - 1);
      }

      return false;
    });
  }

  return a === b;
}
