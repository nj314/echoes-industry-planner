type MaterialType = "Ore" | "Mineral" | "Planetary";
import blueprints from "../game-model/blueprints";
import { MineralName, OreName, PlanetaryResource } from "../game-model/items";
import { Inventory } from "../game-model/types";

type BlueprintAssets = {
  [t in keyof typeof blueprints]: {
    [u in keyof typeof blueprints[t]]: {
      [v in keyof typeof blueprints[t][u]]: number;
    };
  };
};

export type Assets = {
  Blueprints: BlueprintAssets;
  Ore: Inventory<OreName>;
  Mineral: Inventory<MineralName>;
  Planetary: Inventory<PlanetaryResource>;
};

const LOCALSTORAGE_KEY = "INVENTORY";

type AssetService = {
  list: () => Assets;
  save: (assets: Assets) => void;
};

const assetService: AssetService = {
  list() {
    const currentAssets = JSON.parse(localStorage[LOCALSTORAGE_KEY] || "[]");
    return currentAssets;
  },
  save(assets: Assets) {
    localStorage[LOCALSTORAGE_KEY] = JSON.stringify(assets);
  },
};

export default assetService;
