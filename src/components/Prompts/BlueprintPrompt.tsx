import React, { useState } from "react";
import { css } from "@emotion/core";
import BlueprintPicker from "../BlueprintPicker";
import Prompt from "./Prompt";

const classes = {
  root: css(),
};

const BlueprintPrompt = () => {
  const [bp, setBp] = useState();
  return (
    <Prompt label="What would you like to produce?">
      <BlueprintPicker onChange={setBp} value={bp} />
      <pre>{JSON.stringify(bp, undefined, 2)}</pre>
    </Prompt>
  );
};

export default BlueprintPrompt;
