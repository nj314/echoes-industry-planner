import React from "react";
import useFieldState from "../../../utils/useFieldState";
import { ProductSubtype } from "../../../game-model/types";
import Prompt from "../Prompt";
import SkillPicker from "./SkillPicker";

const SkillPrompt = () => {
  const [subtype] = useFieldState<ProductSubtype>("bp.subtype");
  console.log("@@SkillPrompt subtype", subtype);

  if (!subtype?.displayName) return null;
  return (
    <Prompt label="Great! Do you have any of these skills trained?">
      <SkillPicker skills={subtype?.relevantSkills || {}} />
    </Prompt>
  );
};

export default SkillPrompt;
