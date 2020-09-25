import { BlueprintDef } from "../game-model/types";

import blueprints from "../game-model/blueprints";
import assetService, { Assets } from "./asset";
import marketService, { Prices } from "./market";
import { mergeWith } from "lodash";

class BlueprintService {
  private merge(
    a: Partial<Assets>,
    b: Partial<Assets>,
    mergeCallback: (key: string, valueA: number, valueB: number) => number
  ): Partial<Assets> {
    const customizer = (value: any, srcValue: any, key) => {
      if (typeof value !== "number") return undefined;
      return mergeCallback(key, value, srcValue);
    };
    return mergeWith({}, a, b, customizer);
  }

  list() {
    return blueprints;
  }

  estimateCost(bp: BlueprintDef, prices: Prices, excludeAssets = false) {
    const assets = assetService.list();
    const materials = excludeAssets
      ? bp.materials
      : this.merge(bp.materials, assets, (key, quantityNeeded, quantityOwned) =>
          Math.max(0, quantityNeeded - quantityOwned)
        );

    let totalMaterialCost: number = prices.Blueprint;
    const itemizedMaterialCost = this.merge(
      materials,
      prices,
      (key, quantity, unitCost) => {
        const itemCost = quantity * unitCost;
        totalMaterialCost += itemCost;
        return itemCost;
      }
    );

    const productionCost = bp.isk;
    const totalCost = totalMaterialCost + productionCost;
    return {
      itemizedMaterialCost,
      totalMaterialCost,
      productionCost,
      totalCost,
    };
  }

  estimateProfit(
    bp: BlueprintDef,
    excludeAssets = false,
    salePriceEach: number = 0
  ) {
    const cost = this.estimateCost(bp, excludeAssets).totalCost;
    const revenue = bp.outputQuantity * salePriceEach;
    return revenue - cost;
  }
}

export default new BlueprintService();
