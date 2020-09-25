import React, { useMemo } from "react";
import { css } from "@emotion/core";
import { Cascader } from "rsuite";
import { ItemDataType } from "rsuite/lib/@types/common";

import { ProductSubtype } from "../../../game-model/types";
import blueprintService from "../../../services/blueprint";
import useFieldState from "../../../utils/useFieldState";
import { BlueprintOption } from "../../../pages";

const classes = {
  root: css({}),
};

const getCascaderItem = (subtype: ProductSubtype): ItemDataType => ({
  label: subtype.displayName,
  value: subtype.displayName,
  children: Object.entries(subtype.products).map(([label, definition]) => ({
    label,
    value: {
      definition: {
        ...definition,
        materials: { Blueprint: 1, ...definition.materials },
      },
      name: label,
      subtype: { ...subtype, products: {} },
    } as BlueprintOption,
  })),
});

const getCascaderData = (
  blueprints = blueprintService.list()
): ItemDataType[] => {
  return Object.entries(blueprints).map(([label, productSubType]) => ({
    label,
    value: label,
    children: Object.values(productSubType).map(getCascaderItem),
  }));
};

type Props = {
  placeholder?: string;
};

const BlueprintPicker = ({ placeholder = "Blueprints" }: Props) => {
  const [bp, setBp] = useFieldState("bp");
  const data = useMemo(() => getCascaderData(), []);
  return (
    <Cascader
      css={classes.root}
      data={data}
      inline
      onChange={setBp}
      placeholder={placeholder}
      value={bp}
    />
  );
};

export default BlueprintPicker;
