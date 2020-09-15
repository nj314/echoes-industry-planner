import { MineralName, OreName } from "../items";
import { SkillModel } from "../skills";
import { Inventory } from "../types";
import { OreDefs } from "./OreDefs";

const applyReprocessing = (
  inventory: Inventory<OreName>,
  skills: SkillModel
): Inventory<MineralName> => {
  const minerals: Inventory<MineralName> = Object.entries(inventory).reduce(
    (totalMinerals, [oreName, oreQuantity]) => {
      if (!oreQuantity) return totalMinerals;
      Object.values(OreDefs).forEach(oreRarityDef => {
        // For each rarity, determine the minerals produced from the inventory's quantities

        // Determine efficiency bonus from relevant skills
        const skillMultiplier: number = Object.entries(
          oreRarityDef.relevantSkills
        ).reduce(
          (skillMultiplier, [skillName, skillDef]) =>
            skillMultiplier +
            (skillDef.materialEfficiencyBonus / 5) * skills[skillName],
          1
        );

        const mineralsToAdd =
          oreRarityDef.ore[oreName as OreName]?.minerals || {};
        Object.entries(mineralsToAdd).forEach(
          ([mineralName, mineralsPerHundredOre = 0]) =>
            // Add minerals from this rarity to the total
            (totalMinerals[mineralName] =
              (totalMinerals[mineralName] || 0) +
              Math.floor(oreQuantity / 100) *
                mineralsPerHundredOre *
                skillMultiplier)
        );
      });
      return totalMinerals;
    },
    {}
  );

  return minerals;
};

export { OreDefs } from "./OreDefs";
export default applyReprocessing;
