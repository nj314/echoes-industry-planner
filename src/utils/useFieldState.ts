import { useField, UseFieldConfig } from "react-final-form";

export default function useFieldState<T>(
  name: string,
  config?: UseFieldConfig<T>
): [T, (e: T) => void] {
  const { input } = useField<T>(name as string, {
    ...config,
    subscription: { value: true },
  });
  return [input.value, input.onChange];
}
