import React, { useMemo } from "react";
import { css } from "@emotion/core";
import { Cascader } from "rsuite";
import { ItemDataType } from "rsuite/lib/@types/common";

import { ProductSubtype } from "../game-model/types";
import blueprintService from "../services/blueprint";

const classes = {
  root: css({}),
};

const getCascaderItem = (item: ProductSubtype): ItemDataType => ({
  label: item.displayName,
  value: item.displayName,
  children: Object.entries(item.products).map(([label, bp]) => ({
    label,
    value: bp,
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
  onChange: (value: any, e: any) => void;
  placeholder?: string;
  value: any;
};

const BlueprintPicker = ({
  onChange,
  placeholder = "Blueprints",
  value,
}: Props) => {
  const data = useMemo(() => getCascaderData(), []);
  return (
    <Cascader
      inline
      data={data}
      css={classes.root}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default BlueprintPicker;
