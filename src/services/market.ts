import { Assets } from "./asset";

export type Prices = Assets & { Blueprint: number };

class MarketService {
  static LOCALSTORAGE_KEY = "MARKET_PRICES";

  private _prices: Prices;
  get prices() {
    return this._prices;
  }
  set prices(value: Prices) {
    this._prices = value;
    localStorage[MarketService.LOCALSTORAGE_KEY] = JSON.stringify(value);
  }

  constructor() {
    this._prices = JSON.parse(
      localStorage[MarketService.LOCALSTORAGE_KEY] || "{}"
    );
  }
}

export default new MarketService();
