export function hasOwn<T, K extends keyof T>(obj: T, key: PropertyKey): key is K {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export function isObject(value: unknown): value is object {
  return value !== null && typeof value === "object";
}
