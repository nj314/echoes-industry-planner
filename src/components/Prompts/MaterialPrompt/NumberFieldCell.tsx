import React from "react";
import { UseFieldConfig } from "react-final-form";
import { TableCellProps } from "rsuite";
import useFieldState from "../../../utils/useFieldState";
import NumberCell from "./NumberCell";

type Props<TRow, TCell> = {
  fieldName?: string;
  fieldProps?: UseFieldConfig<TCell>;
  getFieldName?: (rowData?: TRow) => string;
  rowData?: TRow;
  scope?: string;
} & Partial<TableCellProps>;

const getFullFieldName = (scope, fieldName) =>
  [scope, fieldName].filter(s => s).join(".");

const NumberFieldCell = <TRow extends { scope: string }, TCell>({
  fieldName,
  fieldConfig,
  getFieldName,
  rowData,
  scope: scopeProp,
  ...props
}: Props<TRow, TCell>) => {
  const scope = scopeProp ?? rowData?.scope;
  const [value, onChange] = useFieldState<number>(
    getFieldName?.(rowData) ?? getFullFieldName(scope, fieldName),
    fieldConfig
  );
  if (!scope) return null;
  return (
    <NumberCell
      rowData={rowData || {}}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

export default NumberFieldCell;
