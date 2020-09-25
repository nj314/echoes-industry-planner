import React, { useMemo } from "react";
import { Table } from "rsuite";

import useFieldState from "../../../utils/useFieldState";
import Prompt from "../Prompt";
import blueprintService from "../../../services/blueprint";
import { css } from "@emotion/core";
import { BlueprintOption } from "../../../pages";
import NumberFieldCell from "./NumberFieldCell";
import { MaterialRow } from "./types";
import TotalCell from "./TotalCell";
import useFormattedNumber from "../../useFormattedNumber";
import { Prices } from "../../../services/market";

const { Cell, Column, HeaderCell } = Table;

const classes = {
  root: css({ width: "100%" }),
};

const transformToRows = (
  bom: Record<string, number | undefined>,
  parentScope: string
): MaterialRow[] =>
  Object.keys(bom).map(name => ({ name, scope: `${parentScope}.${name}` }));

const MaterialPrompt = () => {
  useFieldState<number>("bp.definition.materials.Blueprint", {
    defaultValue: 1,
  });
  const [prices] = useFieldState<Prices>("prices");
  const [bp] = useFieldState<BlueprintOption>("bp");
  const result = useMemo(() => {
    if (!bp.definition) return null;
    return blueprintService.estimateCost(bp.definition, prices, true);
  }, [bp.definition, prices]);

  const [totalMaterialCost] = useFormattedNumber(
    result?.totalMaterialCost || 0
  );

  const rows: MaterialRow[] = useMemo(
    () => [
      {
        name: `Blueprint: ${bp.name}`,
        scope: `Blueprint`,
      },
      {
        name: "Mineral",
        children: transformToRows(
          { ...result?.itemizedMaterialCost.Mineral },
          "Mineral"
        ),
      },
      {
        name: "Planetary",
        children: transformToRows(
          {
            ...result?.itemizedMaterialCost.Planetary,
          },
          "Planetary"
        ),
      },
    ],
    [bp.name, result]
  );

  if (!bp.definition) return null;
  return (
    <Prompt label="Here's the breakdown.">
      <div css={classes.root}>
        <Table
          autoHeight
          data={rows}
          isTree
          defaultExpandAllRows
          onRowClick={data => {
            console.log(data);
          }}
          rowKey="name"
        >
          <Column flexGrow={2}>
            <HeaderCell>Item</HeaderCell>
            <Cell dataKey="name" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Unit Price</HeaderCell>
            <NumberFieldCell
              editing
              getFieldName={rowData => `prices.${rowData?.scope}`}
            />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Quantity</HeaderCell>
            <NumberFieldCell
              getFieldName={rowData =>
                `bp.definition.materials.${rowData?.scope}`
              }
            />
          </Column>

          <Column flexGrow={2}>
            <HeaderCell>Total Price ({totalMaterialCost} ISK`)</HeaderCell>
            <TotalCell />
          </Column>
        </Table>
        {/* <pre>{JSON.stringify(rows, undefined, 2)}</pre> */}
      </div>
    </Prompt>
  );
};

export default MaterialPrompt;
