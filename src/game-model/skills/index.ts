import { BillOfMaterials } from "../blueprints";
import { BlueprintDef, ProductSubtype } from "../types";
import { mapValues } from "../utils";

export type SkillModel = Record<
  | "Destroyer Manufacture"
  | "Advanced Destroyer Manufacture"
  | "Expert Destroyer Manufacture"
  | "Industrial Ship Manufacture"
  | "Advanced Industrial Ship Manufacture",
  number
>;

const increaseEfficiency = (
  bonus: number,
  materials: BillOfMaterials
): BillOfMaterials => {
  const applyEfficiency = (x?: number) => (x || 0) * (1 - bonus);
  return {
    Planetary: mapValues(materials.Planetary, applyEfficiency),
    Minerals: mapValues(materials.Minerals, applyEfficiency),
  };
};

export type SkillBonuses = {
  time: number;
  materials: number;
};

/**
 * Applies effects from skills to the BP
 */
const applySkillBonuses = (
  subtype: ProductSubtype,
  bp: BlueprintDef,
  skills: SkillModel
): BlueprintDef => {
  const bonuses: SkillBonuses = Object.entries(subtype.relevantSkills).reduce(
    (bonuses, [skillName, skillBonuses]) => ({
      materials:
        bonuses.materials +
        (skillBonuses.materialEfficiencyBonus / 5) * skills[skillName],
      time:
        bonuses.time +
        (skillBonuses.timeEfficiencyBonus || 0 / 5) * skills[skillName],
    }),
    { materials: 0, time: 0 }
  );

  return {
    ...bp,
    time: bp.time * (1 - bonuses.time),
    materials: increaseEfficiency(bonuses.materials, bp.materials),
  };
};

export default applySkillBonuses;
