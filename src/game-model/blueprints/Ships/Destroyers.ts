import { BlueprintDef, ProductSubtype } from "../../types";

export const Destroyers: ProductSubtype = {
  products: {
    Algos: {
      isk: 250000,
      time: 1135,
      outputQuantity: 1,
      materials: {
        Mineral: {
          Tritanium: 81015,
          Pyerite: 19511,
          Mexallon: 7388,
        },
        Planetary: {
          "Lustering Alloy": 1487,
          "Sheen Compound": 1603,
          "Motley Compound": 1496,
          "Base Metals": 448,
          "Heavy Metals": 1603,
        },
      },
    },
  },
  relevantSkills: {
    "Destroyer Manufacture": {
      materialEfficiencyBonus: 0.3,
      timeEfficiencyBonus: 0.2,
    },
    "Advanced Destroyer Manufacture": {
      materialEfficiencyBonus: 0.2,
      timeEfficiencyBonus: 0.2,
    },
    "Expert Destroyer Manufacture": {
      materialEfficiencyBonus: 0.05,
      timeEfficiencyBonus: 0.2,
    },
  },
};
