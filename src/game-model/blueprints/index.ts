import { MineralName, PlanetaryResource } from "../items";
import { Inventory, ProductSubtype } from "../types";
import Ships from "./Ships";

export type BillOfMaterials = {
  Planetary: Inventory<PlanetaryResource>;
  Minerals: Inventory<MineralName>;
};

export default {
  Ships,
  Modules: {},
  Rigs: {},
} as Record<string, Record<string, ProductSubtype>>;
