import { MineralName, OreName } from "../items";
import { Inventory, SkillDef } from "../types";

type Rarity = "Common" | "Uncommon" | "Special" | "Rare" | "Precious";
export type OreDef = {
  /**Minerals produced from reprocessing 100 units @ 0.30 efficiency */
  minerals: Inventory<MineralName>;
  price?: number;
  volume: number;
};
type OreRarityDef = {
  ore: Partial<Record<OreName, OreDef>>;
  relevantSkills: Record<string, SkillDef>;
};

export const OreDefs: Record<Rarity, OreRarityDef> = {
  Common: {
    ore: {
      Veldspar: {
        volume: 0.1,
        minerals: {
          Tritanium: 125,
        },
      },
      Plagioclase: {
        volume: 0.35,
        minerals: {
          Tritanium: 15.3,
          Pyerite: 19.5,
          Mexallon: 29.1,
        },
      },
      Scordite: {
        volume: 0.15,
        minerals: {
          Tritanium: 48.6,
          Pyerite: 34.5,
        },
      },
    },
    relevantSkills: {
      "Common Ore Reprocessing": {
        materialEfficiencyBonus: 0.5,
      },
      "Advanced Common Ore Reprocessing": {
        materialEfficiencyBonus: 0.3,
      },
      "Expert Common Ore Reprocessing": {
        materialEfficiencyBonus: 0.25,
      },
    },
  },
  Uncommon: {
    ore: {
      Omber: {
        volume: 0.6,
        minerals: {
          Tritanium: 180,
          Pyerite: 22.8,
          Isogen: 16.5,
        },
      },
      Pyroxeres: {
        volume: 1.5,
        minerals: {
          Tritanium: 526,
          Pyerite: 168,
          Mexallon: 75,
          Nocxium: 9,
        },
      },
      Kernite: {
        volume: 1.2,
        minerals: {
          Tritanium: 79.8,
          Mexallon: 144,
          Isogen: 14.4,
        },
      },
      "Dark Ochre": {
        volume: 1.6,
        minerals: {
          Tritanium: 288,
          Isogen: 16.8,
          Nocxium: 12.9,
        },
      },
    },
    relevantSkills: {
      /* TODO */
    },
  },
  Special: {
    ore: {
      Gneiss: {
        volume: 2,
        minerals: {
          Pyerite: 264,
          Mexallon: 276,
          Isogen: 55.2,
        },
      },
      Spodumain: {
        volume: 3.2,
        minerals: {
          Tritanium: 5910,
          Pyerite: 1122,
          Mexallon: 108,
          Isogen: 18,
        },
      },
      Hemorphite: {
        volume: 3,
        minerals: {
          Tritanium: 1650,
          Isogen: 48,
          Nocxium: 3.9,
          Zydrine: 15,
        },
      },
    },
    relevantSkills: {
      /* TODO */
    },
  },
  Rare: {
    ore: {
      Hedbergite: {
        volume: 3,
        minerals: {
          Pyerite: 819,
          Isogen: 138,
          Nocxium: 2.7,
          Zydrine: 4.2,
        },
      },
      Jaspet: {
        volume: 4,
        minerals: {
          Mexallon: 738,
          Nocxium: 14.4,
          Zydrine: 16.8,
        },
      },
      Crokite: {
        volume: 6.4,
        minerals: {
          Tritanium: 11640,
          Nocxium: 28.2,
          Zydrine: 28.8,
        },
      },
    },
    relevantSkills: {
      /* TODO */
    },
  },
  Precious: {
    ore: {
      Bistot: {
        volume: 6.4,
        minerals: {
          Pyerite: 1836,
          Zydrine: 10.8,
          Megacyte: 23.7,
        },
      },
      Arkonor: {
        volume: 6.4,
        minerals: {
          Tritanium: 2640,
          Mexallon: 300,
          Megacyte: 31.2,
        },
      },
      Mercoxet: {
        volume: 8,
        minerals: {
          Morphite: 18,
        },
      },
    },
    relevantSkills: {
      /* TODO */
    },
  },
};
