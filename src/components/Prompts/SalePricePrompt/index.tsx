import React from "react";
import { BlueprintOption } from "../../../pages";
import useFieldState from "../../../utils/useFieldState";
import IskInput from "../../IskInput";
import Prompt from "../Prompt";

const SalePricePrompt = () => {
  const [name] = useFieldState<string>("bp.name");
  const [unitPrice, setUnitPrice] = useFieldState<number>("unitSalePrice");
  if (!name) return null;
  return (
    <Prompt
      label={`What is the current market price of one completed ${name}?`}
    >
      <IskInput onChange={setUnitPrice} value={unitPrice} />
    </Prompt>
  );
};

export default SalePricePrompt;
