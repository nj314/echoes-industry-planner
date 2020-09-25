import React from "react";
import { Table, TableCellProps } from "rsuite";
import useFieldState from "../../../utils/useFieldState";
import useFormattedNumber from "../../useFormattedNumber";
import { MaterialRow } from "./types";

type Props = TableCellProps & { rowData?: MaterialRow };

const TotalCell = ({ rowData, ...props }: Props) => {
  const [unitPrice] = useFieldState<number>(`prices.${rowData?.scope}`);
  const [quantity] = useFieldState<number>(
    `bp.definition.materials.${rowData?.scope}`
  );
  const [total] = useFormattedNumber(unitPrice * quantity);
  if (!rowData?.scope) return null;
  return <Table.Cell {...props}>{total}</Table.Cell>;
};

export default TotalCell;
