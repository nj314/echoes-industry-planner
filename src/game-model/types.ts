import { PlanetaryResource, MineralName } from "./items";

export type Inventory<T extends string> = Partial<Record<T, number>>;

export type BlueprintDef = {
  isk: number; // base manufacturing cost
  time: number; // base manufacturing time, seconds
  outputQuantity: number;
  materials: {
    Planetary: Inventory<PlanetaryResource>;
    Mineral: Inventory<MineralName>;
  };
};

export type SkillDef = {
  /**Total bonus at level 5 */
  materialEfficiencyBonus: number;
  /**Total bonus at level 5 */
  timeEfficiencyBonus?: number;
};

export type ProductSubtype = {
  products: Record<string, BlueprintDef>;
  relevantSkills: Record<string, SkillDef>;
};
