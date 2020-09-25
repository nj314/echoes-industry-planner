import React, { useCallback, useMemo } from "react";
import { parseNumber } from "../utils";

const useFormattedNumber = (
  value: number,
  onChange?: (value: number) => void
): [string, (valueString: string) => void] => {
  const displayValue: string = useMemo(
    () => value.toLocaleString(undefined, { maximumFractionDigits: 0 }),
    [value]
  );

  const handleChange = useCallback(
    (valueString: string) => {
      onChange?.(parseNumber(valueString) || 0);
    },
    [onChange]
  );

  return [displayValue, handleChange];
};

export default useFormattedNumber;
