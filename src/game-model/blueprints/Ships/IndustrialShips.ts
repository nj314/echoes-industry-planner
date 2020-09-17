import { BlueprintDef, ProductSubtype } from "../../types";

export const IndustrialShips: ProductSubtype = {
  displayName: "Industrial Ships",
  products: {
    "Venture II": {
      isk: 300000,
      time: 1000,
      outputQuantity: 1,
      materials: {
        Mineral: {
          Tritanium: 127280,
          Pyerite: 34598,
          Mexallon: 10355,
          Isogen: 1500,
        },
        Planetary: {
          "Lustering Alloy": 753,
          "Condensed Alloy": 858,
          "Motley Compound": 758,
          "Base Metals": 227,
          "Toxic Metals": 213,
        },
      },
    },
  },
  relevantSkills: {
    "Industrial Ship Manufacture": {
      materialEfficiencyBonus: 0.3,
      timeEfficiencyBonus: 0.2,
    },
    "Advanced Industrial Ship Manufacture": {
      materialEfficiencyBonus: 0.2,
      timeEfficiencyBonus: 0.2,
    },
  },
};
