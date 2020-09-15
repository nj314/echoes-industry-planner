export function mapValues<T>(
  o: Record<string, T>,
  callbackFn: (value: T) => T
): Record<string, T> {
  return Object.entries(o).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: callbackFn(value) }),
    {}
  );
}
