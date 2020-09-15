import { MineralName, PlanetaryResource } from "../items";
import * as Ships from "./Ships";

export type BillOfMaterials = {
  Planetary: Partial<Record<PlanetaryResource, number>>;
  Minerals: Partial<Record<MineralName, number>>;
};

export default {
  Modules: {},
  Rigs: {},
  Ships,
};
