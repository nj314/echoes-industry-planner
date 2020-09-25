import React from "react";
import { Input, Table, TableCellProps } from "rsuite";
import { noop } from "lodash";
import useFormattedNumber from "../../useFormattedNumber";

type Props = TableCellProps & {
  dataKey?: string;
  disabled?: boolean;
  onChange?: (value: number) => void;
  rowData?: object & { status?: "EDIT" };
  value?: number;
};

const NumberCell = ({
  dataKey = "",
  disabled,
  editing,
  rowData,
  onChange = noop,
  value,
  ...props
}: Props) => {
  const [displayValue, handleChange] = useFormattedNumber(
    value ?? (rowData?.[dataKey] as number),
    onChange
  );
  return (
    <Table.Cell {...props}>
      {!disabled && editing ? (
        <Input onChange={handleChange} value={displayValue} />
      ) : (
        displayValue
      )}
    </Table.Cell>
  );
};

export default NumberCell;
