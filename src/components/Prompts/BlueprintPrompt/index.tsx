import React from "react";
import Prompt from "../Prompt";
import BlueprintPicker from "./BlueprintPicker";

const BlueprintPrompt = () => {
  return (
    <Prompt label="What would you like to produce?">
      <BlueprintPicker />
    </Prompt>
  );
};

export default BlueprintPrompt;
